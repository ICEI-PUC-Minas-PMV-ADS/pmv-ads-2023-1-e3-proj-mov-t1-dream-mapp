import React, { useState, useEffect, useRef  } from 'react';
import { db } from '../DB/firebase';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import ToastProvider, { showToast } from 'react-native-toast-message';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput, Button, Headline } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome5";
import theme from '../components/DefaultTheme';
import TopBar from '../components/TopBar';
import Meta from '../components/Meta';

const CadastreObjetivo = ({ navigation}) => {
  const [Dojetivo, setDobjetivo] = useState('');
  const [Ddescricao, setDdescricao] = useState('');
  const [showMetaCampos, setShowMetaCampos] = useState(false);
  const [metaTitulo, setMetaTitulo] = useState('');
  const [metaDescricao, setMetaDescricao] = useState('');
  const [metaList, setMetaList] = useState([]);
  const [containerPaddingBottom, setContainerPaddingBottom] = useState(433);
  const [objetivoCadastrado, setObjetivoCadastrado] = useState(false);
  const [showObjetivoList, setShowObjetivoList] = useState(false);
  const objetivoIdRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const adicionarObjetivo = async () => {

    if (Dojetivo.trim() === '' || Ddescricao.trim() === '') {
      console.log('Preencha todos os campos obrigatórios!');
      return;
    }

    if (isLoading) {
      return; // Evita a adição duplicada enquanto o processo estiver em andamento
    }
    setIsLoading(true);

    let objetivoId;
    const novoObjetivo = {
      title: Dojetivo,
      description: Ddescricao,
      percentage: null,
      completed: false,
    };
  
    try {
      const docRef = await addDoc(collection(db, 'objetivo'), novoObjetivo);
      objetivoId = docRef.id;
      objetivoIdRef.current = objetivoId;
      console.log('Objetivo adicionado com ID:', objetivoId);
      setDobjetivo(novoObjetivo.title);
      setDdescricao(novoObjetivo.description);
      adicionarMeta(objetivoId);
      setObjetivoCadastrado(true);
      setShowObjetivoList(true);
    } catch (error) {
      console.error('Erro ao adicionar o objetivo:', error);
      setDobjetivo('');
      setDdescricao('');
    }
    setIsLoading(false);
  };

  const adicionarMeta = async (objetivoId) => {

    if (metaTitulo.trim() === '' || metaDescricao.trim() === '') {
      console.log('Preencha todos os campos obrigatórios!');
      return;
    }

    if (isLoading) {
      return; // Evita a adição duplicada enquanto o processo estiver em andamento
    }
    setIsLoading(true);

    if (!objetivoCadastrado) {
      // Exibir toast informando para cadastrar o objetivo antes de adicionar metas
      console.log('Cadastre o seu objetivo e adicione metas para ele!');
      return;
    }

    const novaMeta = {
      title: metaTitulo,
      description: metaDescricao,
      completed: false,
      objetivoId: objetivoId,
    };
  
    try {
      const docRef = await addDoc(collection(db, 'meta'), novaMeta);
      console.log('Meta adicionada com ID:', docRef.id);
      // Restante do código...

      setMetaTitulo('');
      setMetaDescricao('');
      // setMetaList([...metaList, novaMeta]);
    } catch (error) {
      console.error('Erro ao adicionar a meta:', error);
      setMetaTitulo('');
      setMetaDescricao('');
    }
    setIsLoading(false);
  }

  const toggleMetaCampos = () => {
    setShowMetaCampos(!showMetaCampos);
    setContainerPaddingBottom(showMetaCampos ? 433 : 263);
  };

  const renderItem = ({ item }) => (
    <Meta 
      title={item.title} 
      description={item.description} 
      completed={item.completed} 
      onEditPress={() => console.log('Editar objetivo')} 
      onCompletePress={() => console.log('Concluir objetivo')}
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
  }, []);

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
  }, []);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <TopBar navigation={navigation} />
      <KeyboardAwareScrollView contentContainerStyle={[styles.container, { paddingBottom: containerPaddingBottom }]}>
        <View style={styles.containerContent}>
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
                  onPress={adicionarObjetivo}
                  contentStyle={styles.button}
                  labelStyle={styles.buttonLabel}
                  theme={theme}
                  disabled={isLoading}
                >
                  Cadastrar Objetivo
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

                <View style={styles.btnAdicionarMeta}>
                <Button
                  mode="contained"
                  onPress={() => adicionarMeta(objetivoIdRef.current)}
                  contentStyle={styles.button2}
                  labelStyle={styles.buttonLabel2}
                  theme={theme}
                  disabled={isLoading}>
                  Adicionar Meta
                </Button>
                </View>

              </React.Fragment>
            )}
          {metaList.filter(meta => meta.objetivoId === objetivoIdRef.current).length > 0 && (
            <FlatList
              style={styles.tasklist}
              data={metaList.filter(meta => meta.objetivoId === objetivoIdRef.current)}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          )}

          </View>
        </View>
     </KeyboardAwareScrollView>
    </ScrollView>
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
    paddingTop: 0,
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
  });
  
export default CadastreObjetivo;
