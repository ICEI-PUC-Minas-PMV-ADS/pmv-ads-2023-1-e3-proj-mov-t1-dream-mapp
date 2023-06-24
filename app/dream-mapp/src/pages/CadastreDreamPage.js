import React, { useState, useEffect, useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import { db, auth } from '../DB/firebase';
import { getDocs, query, where, collection, addDoc, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { View, StyleSheet, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput, Button, Headline } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome5";
import theme from '../components/DefaultTheme';
import TopBar from '../components/TopBar';
import MenuGlobal from '../components/MenuGlobal';
import Meta from '../components/Meta';
import Toast, { DURATION } from 'react-native-easy-toast';

const CadastreObjetivo = ({ navigation}) => {
  const [Dojetivo, setDobjetivo] = useState('');
  const [Ddescricao, setDdescricao] = useState('');
  const [showMetaCampos, setShowMetaCampos] = useState(false);
  const [metaTitulo, setMetaTitulo] = useState('');
  const [metaDescricao, setMetaDescricao] = useState('');
  const [metaList, setMetaList] = useState([]);
  const [containerPaddingBottom, setContainerPaddingBottom] = useState(433);
  const [objetivoCadastrado, setObjetivoCadastrado] = useState(false);
  const [objetivoFoiEditado, setObjetivoFoiEditado] = useState(false);
  const [showObjetivoList, setShowObjetivoList] = useState(false);
  const [isEditingMeta, setIsEditingMeta] = useState(false);
  const [showAddButtonMeta, setShowAddButtonMeta] = useState(true);

  const objetivoIdRef = useRef(null);
  const metaIdRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const toastRef = useRef();
  const [botaoTexto, setBotaoTexto] = useState('Cadastrar Objetivo');
  // const [botaoTextoEditar, setBotaoTextoEditar] = useState('Adicionar meta');
  const [botaoStyle, setBotaoStyle] = useState(styles.button);
  const [modoEdicao, setModoEdicao] = useState(false);
  const route = useRoute();
  const editingObjetivo = route.params?.editingObjetivo;
  const [editingMeta, setEditingMeta] = useState(null);
  const [metaEditingMode, setMetaEditingMode] = useState(false);
  const [updateMetas, setUpdateMetas] = useState(false);

  const getMetaIdByObjetivoId = async (objetivoId, metaTitulo, metaDescricao) => {

    const querySnapshot = await getDocs(
      query(
        collection(db, 'meta'),
        where('objetivoId', '==', objetivoId),
        where('title', '==', metaTitulo),
        where('description', '==', metaDescricao)
      )
    );
  
    if (querySnapshot.empty) {
      return null;
    }
  
    const matchingMetaDoc = querySnapshot.docs.find(doc => {
      const metaData = doc.data();
      return (
        metaData.title === metaTitulo &&
        metaData.description === metaDescricao &&
        metaData.objetivoId === objetivoId
      );
    });
  
    if (!matchingMetaDoc) {
      return null;
    }
  
    const metaId = matchingMetaDoc.id;

    editingMeta.metaId = metaId;
    console.log('NA REQUISIÇÃO ID META É', metaId);

    return metaId;
  };

  const handleObjetivoPress = async () => {
    if (modoEdicao) {
      await objetivoEditado();
    } else {
      await adicionarObjetivo();
    }
  };

  useEffect(() => {  
    if (editingObjetivo) {
      setModoEdicao(true);
      setDobjetivo(editingObjetivo.title);
      setDdescricao(editingObjetivo.description);
      objetivoIdRef.current = editingObjetivo.id;
      setBotaoTexto('Editar Objetivo');
      setBotaoStyle(styles.buttonEdicao);
    }
  }, [editingObjetivo]);

  useEffect(() => {
    if (editingMeta) {
      setMetaEditingMode(true);
      setModoEdicao(true);
      setMetaTitulo(editingMeta.title);
      setMetaDescricao(editingMeta.description);
      setBotaoStyle(styles.buttonEdicao);
      objetivoIdRef.current = editingObjetivo.id;
      // metaIdRef.current = editingMeta.metaId;

      const fetchMetaId = async () => {
        const metaId = await getMetaIdByObjetivoId(
          editingObjetivo.id,
          editingMeta.title,
          editingMeta.description
        );
        const objetivoId = editingObjetivo.id;
        console.log(objetivoId)

        metaEditado(objetivoId, metaId);
        // handleMetaPress(objetivoId, metaId);

      };
      fetchMetaId();
    }
  }, [editingMeta]);

  const showToast = () => {
    toastRef.current.show('This is a toast message', DURATION.LENGTH_LONG);
  };
  
  const objetivoEditado = async () => {

    if (Dojetivo.trim() === '' || Ddescricao.trim() === '') {
      toastRef.current.show('Preencha todos os campos obrigatórios!', DURATION.LENGTH_LONG);
      
      return;
    }

    if (isLoading) {
      return;
    }
    setIsLoading(true);
  
    const editadoObjetivo = {
      title: Dojetivo,
      description: Ddescricao,
      percentage: null,
      completed: false,
      userId: auth.currentUser.uid,
    };

    let houveAlteracao = true;

    if (Dojetivo === editingObjetivo.title && Ddescricao === editingObjetivo.description) {
      houveAlteracao = false;
    }
  
    try {
      if (houveAlteracao) {
      await updateDoc(doc(db, 'objetivo', objetivoIdRef.current), editadoObjetivo);
     }
      setDobjetivo(editadoObjetivo.title);
      setDdescricao(editadoObjetivo.description);
      const objetivoId = objetivoIdRef.current;
      adicionarMeta(objetivoId);
      setObjetivoFoiEditado(true);
      setShowObjetivoList(true);
      if (houveAlteracao) {
      toastRef.current.show('Objetivo atualizado!', DURATION.LENGTH_LONG);
      } else {
      toastRef.current.show('Objetivo atualizado sem alterações!', DURATION.LENGTH_LONG);  
      }
    } catch (error) {
      toastRef.current.show('Erro ao atualizar o objetivo!', DURATION.LENGTH_LONG);
    }
  
    setIsLoading(false);
  };
  
  



  const adicionarObjetivo = async () => {

    if (Dojetivo.trim() === '' || Ddescricao.trim() === '') {
      toastRef.current.show('Preencha todos os campos obrigatórios!', DURATION.LENGTH_LONG);
      return;
    }
  
    if (modoEdicao) {
      objetivoEditado();
      return;
    }

    if (isLoading) {
      return; 
    }
    setIsLoading(true);

    let objetivoId;
    const novoObjetivo = {
      title: Dojetivo,
      description: Ddescricao,
      percentage: null,
      completed: false,
      userId: auth.currentUser.uid,
    };
  
    try {
      const docRef = await addDoc(collection(db, 'objetivo'), novoObjetivo);
      objetivoId = docRef.id;
      objetivoIdRef.current = objetivoId;
      setDobjetivo(novoObjetivo.title);
      setDdescricao(novoObjetivo.description);
      adicionarMeta(objetivoId);

      metaEditado(objetivoId); /// adicionei

      setObjetivoCadastrado(true);
      setShowObjetivoList(true);
      toastRef.current.show('Objetivo adicionado!', DURATION.LENGTH_LONG);
    } catch (error) {
      toastRef.current.show('Erro ao adicionar o objetivo!', DURATION.LENGTH_LONG);
      setDobjetivo('');
      setDdescricao('');
    }
    setIsLoading(false);
  };

  const adicionarMeta = async (objetivoId) => {

    if (modoEdicao && !objetivoFoiEditado) {
      toastRef.current.show('Edite o seu objetivo e adicione metas para ele!', DURATION.LENGTH_LONG);
      // setObjetivoFoiEditado(true);
      return;
    }

    if (!modoEdicao && !objetivoCadastrado) {
      toastRef.current.show('Cadastre o seu objetivo e adicione metas para ele!', DURATION.LENGTH_LONG);
      return;
    }

    if (metaTitulo.trim() === '' || metaDescricao.trim() === '') {
      toastRef.current.show('Preencha todos os campos obrigatórios!', DURATION.LENGTH_LONG);
      return;
    }

    // if (modoEdicao) {
    //   metaEditado();
    //   return;
    // }

    if (isLoading) {
      return;
    }
    setIsLoading(true);

    const novaMeta = {
      title: metaTitulo,
      description: metaDescricao,
      completed: false,
      objetivoId: objetivoId,
      userId: auth.currentUser.uid,
    };
  
    try {
      const docRef = await addDoc(collection(db, 'meta'), novaMeta);
      await updateDoc(doc(db, 'meta', docRef.id), { userId: auth.currentUser.uid });
      toastRef.current.show('Meta adicionada!', DURATION.LENGTH_LONG);

      setMetaTitulo('');
      setMetaDescricao('');

    } catch (error) {
      toastRef.current.show('Erro ao adicionar a meta!', DURATION.LENGTH_LONG);
      setMetaTitulo('');
      setMetaDescricao('');
    }
    setIsLoading(false);
  }

  const metaEditado = async (objetivoId, metaId) => {
    console.log( 'O ID DO OBEJTIVO É:', objetivoId, 'e O ID DA META É:', metaId)

    if (modoEdicao && !objetivoFoiEditado) {
      toastRef.current.show('Edite o seu objetivo e adicione metas para ele!', DURATION.LENGTH_LONG);
      return;
    }
  
    if (metaTitulo.trim() === '' || metaDescricao.trim() === '') {
      toastRef.current.show('Preencha todos os campos obrigatórios!', DURATION.LENGTH_LONG);
      return;
    }
  
    if (isLoading) {
      return;
    }
    setIsLoading(true);
  
    const editadoMeta = {
      // metaId: metaId,
      title: metaTitulo,
      description: metaDescricao,
      completed: false,
      objetivoId: objetivoId,
      userId: auth.currentUser.uid,
    };

    let houveAlteracao = true;

    if (metaTitulo === editingMeta.title  && metaDescricao === editingMeta.description) {
      houveAlteracao = false;
    }

    try {
      if (houveAlteracao) {
        console.log('PRÓXIMO DA OPERAÇÃO -> o id da meta é: ', metaId);
        await updateDoc(doc(db, 'meta', metaId), editadoMeta);
        await updateDoc(doc(db, 'meta', metaId), { userId: auth.currentUser.uid });
      }
        setMetaTitulo(editadoMeta.title);
        setMetaDescricao(editadoMeta.description);
        setUpdateMetas(true);
      if (houveAlteracao) {
        toastRef.current.show('Meta atualizada!', DURATION.LENGTH_LONG);
        } else {
          toastRef.current.show('Meta atualizada sem alterações!', DURATION.LENGTH_LONG);
        }
    } catch (error) {
      console.log('Erro ao editar a meta:', error);
      toastRef.current.show('Erro ao editar a meta!', DURATION.LENGTH_LONG);
    }
    setIsLoading(false);
  };

  const toggleMetaCampos = () => {
    setIsEditingMeta(false); // Desabilita o botão "Editar meta"
    setShowAddButtonMeta(!isEditingMeta); // Atualiza o valor de showAddButton com base em isEditingMeta
    setShowMetaCampos(!showMetaCampos);
    setContainerPaddingBottom(showMetaCampos ? 433 : 263);

    // Verifica se o botão "Editar meta" está desabilitado
    if (!isEditingMeta) {
      setEditingMeta(null);
      setMetaTitulo('');
      setMetaDescricao('');
    }
  };

  const renderItem = ({ item }) => (
    <Meta 
      title={item.title} 
      description={item.description} 
      completed={item.completed} 
      onEditPress={() => {
        toggleMetaCampos();
        setEditingMeta(item);
        setIsEditingMeta(true); // Habilita o botão "Editar meta"
        setShowAddButtonMeta(false);
      }} 
      onCompletePress={() => console.log('Concluir Meta')}
    />
  );
  
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'objetivo'), (querySnapshot) => {
      const objetivoData = [];
      querySnapshot.forEach((doc) => {
        const objetivo = doc.data();
        if (objetivo.title && objetivo.description) {
          objetivoData.push(objetivo);
        }
      });
    });
  
    return () => unsubscribe();
  }, [modoEdicao]);

  useEffect(() => {
    
    const unsubscribe = onSnapshot(collection(db, 'meta'), (querySnapshot) => {
      const metaData = [];
      querySnapshot.forEach((doc) => {
        const meta = doc.data();
        if (meta.title && meta.description) {
          metaData.push(meta);
        }
      });
      setMetaList(metaData);
    });
  
    return () => unsubscribe();
  }, [modoEdicao]);

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <TopBar navigation={navigation} />
        <View style={styles.containerContent}>
          <Toast
          ref={toastRef}
          style={styles.toastContainer}
          textStyle={styles.toastText}
          opacity={0.7}
            />
          <View style={styles.form}>
            <Headline style={styles.title2}> Cadastro de Objetivos </Headline>

            <TextInput
              mode="outlined"
              label="Título Objetivo"
              value={Dojetivo}
              onChangeText={(text) => setDobjetivo(text)}
              theme={theme}
              style={styles.input}/>

            <TextInput
              mode="outlined"
              label="Descrição Objetivo"
              value={Ddescricao}
              onChangeText={(text) => setDdescricao(text)}
              theme={theme}
              style={styles.input}/>

            {!showObjetivoList ? (
              <View style={styles.btnCadastrarObjOrientacao}>
                <Button
                  mode="contained"
                  onPress={handleObjetivoPress}
                  contentStyle={botaoStyle}
                  labelStyle={styles.buttonLabel}
                  theme={theme}
                  disabled={isLoading}
                >
                  {botaoTexto}
                </Button>
              </View>
            ) : (
              <View style={styles.btnCadastrarObjOrientacao}>
                <Button
                  mode="contained"
                  onPress={() => navigation.navigate('Home')}
                  contentStyle={styles.button}
                  labelStyle={styles.buttonLabel}
                  theme={theme}
                  disabled={isLoading}
                >
                  Ver lista de objetivos
                </Button>
              </View>
            )}

            <View style={styles.container2}>
              <Headline style={styles.titleMeta}> Cadastrar Meta </Headline>
              <View style={styles.metaIconContainer}>
                <Icon
                  name="plus-circle"
                  onPress={toggleMetaCampos}
                  size={25}
                  color={theme.colors.secondary}/>
              </View>
            </View>

              <View style={styles.containerFlat}>
                <View style={styles.frame}>
                {showMetaCampos && (
                  <React.Fragment>
                    <TextInput
                      mode="outlined"
                      label="Título da Meta"
                      value={metaTitulo}
                      onChangeText={(text) => setMetaTitulo(text)}
                      theme={theme}
                      style={styles.input}/>

                    <TextInput
                      mode="outlined"
                      label="Descrição Meta"
                      value={metaDescricao}
                      onChangeText={(text) => setMetaDescricao(text)}
                      theme={theme}
                      style={styles.input}/>

                    {showAddButtonMeta && (
                    <View style={styles.btnAdicionarMeta}>
                    <Button
                      mode="contained"
                      onPress={() => adicionarMeta(objetivoIdRef.current)}
                      
                      contentStyle={styles.button}
                      labelStyle={styles.buttonLabel}
                      theme={theme}
                      disabled={isLoading}>
                      Adicionar Meta
                    </Button>
                    </View>
                    )}

                    {isEditingMeta && (
                    <View style={styles.btnAdicionarMeta}>
                    <Button
                      mode="contained"
                      onPress={() => metaEditado(objetivoIdRef.current)}
                      contentStyle={botaoStyle}
                      labelStyle={styles.buttonLabel}
                      theme={theme}
                      disabled={isLoading}>
                        Editar meta
                    </Button>
                    </View>
                    )}
                  </React.Fragment>
                )}
                  {metaList.filter(meta => meta.objetivoId === objetivoIdRef.current && meta.userId === auth.currentUser.uid).length > 0 && (
                    <FlatList
                      style={styles.tasklist}
                      data={metaList.filter(meta => meta.objetivoId === objetivoIdRef.current && meta.userId === auth.currentUser.uid)}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  )}
                </View>
              </View>
      </View>
        </View>
        <View style={styles.containerMenuGlobal}>
        <MenuGlobal navigation={navigation}/>
        </View>
     </KeyboardAwareScrollView>
    );
  };

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    paddingTop: 120,
    paddingBottom: 433,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    },
  containerContent: {
    flex: 1,
    width: '100%',
    paddingTop: 110,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    },
  container2: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 80,
    },
  title2: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    color: theme.colors.primary,
    paddingTop: 10,
    },
  button2: {
    backgroundColor: theme.colors.secondary,
    },
  buttonEdicao: {
    backgroundColor: theme.colors.tercyary,
    },
  buttonLabel2: {
    color: theme.colors.buttonText,
    },
  form: {
    width: '100%',
    },
  label: {
    fontSize: 16,
    marginBottom: 4,
    },
  input: {
    marginTop: 4,
    borderRadius: 30,
    },
  btnCadastrarObjOrientacao: {
    marginTop: 10,
    marginBottom: 10,
    },
  btnAdicionarMeta: {
    marginTop: 10,
    },
  metaIconContainer: {
    marginLeft: 1,
    paddingTop: 10,
    },
  titleMeta: {
    fontWeight: 'bold',
    fontSize: 20,
    color: theme.colors.secondary,
    marginRight: 1,
    paddingTop: 10,
    },
  tasklist: {
    flex: 1,
    marginTop: 10,
    width: '100%',
    },
  task: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: '500',
    },
  containerFlat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
  frame: {
    width: 300,
    height: 400,
    borderWidth: 0,
    overflow: 'hidden',
    },
  containerMenuGlobal: {
    width: '100%',
    height: 53,
    },
  toastContainer: {
    position: 'absolute',
    bottom: -85,
    left: 20,
    right: 20,
    backgroundColor: theme.colors.secondary,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    },
  toastText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    },
    });
  
export default CadastreObjetivo;
