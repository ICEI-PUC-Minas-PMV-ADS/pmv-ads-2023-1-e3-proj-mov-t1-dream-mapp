import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput, Button, Headline } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome5";
import theme from '../components/DefaultTheme';
import TopBar from '../components/TopBar';
import MenuGlobal from '../components/MenuGlobal';
import Meta from '../components/Meta';

const CadastreObjetivo = ({ navigation }) => {
  const [Dojetivo, setDobjetivo] = useState('');
  const [Ddescricao, setDdescricao] = useState('');
  const [showMetaCampos, setShowMetaCampos] = useState(false);
  const [metaTitulo, setMetaTitulo] = useState('');
  const [metaDescricao, setMetaDescricao] = useState('');
  const [containerPaddingBottom, setContainerPaddingBottom] = useState(433);

  const toggleMetaCampos = () => {
    setShowMetaCampos(!showMetaCampos);
    setContainerPaddingBottom(showMetaCampos ? 433 : 263);
  };

  const tasks = [
    { id: 1, title: 'Meta #01', description: 'Descrição do Meta #01', completed: false },
    { id: 2, title: 'Meta #02', description: 'Descrição do Meta #02', completed: false },
  ];

  const renderItem = ({ item }) => (
    <Meta 
      title={item.title} 
      description={item.description} 
      completed={item.completed} 
      onEditPress={() => console.log('Editar objetivo')} 
      onCompletePress={() => console.log('Concluir objetivo')}
    />
  );

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
                  onPress={() => navigation.navigate('Home')}
                  contentStyle={styles.button2}
                  labelStyle={styles.buttonLabel2}
                  theme={theme}>
                  Adicionar Meta
                </Button>
                </View>
              </React.Fragment>
              )}

            <FlatList
              style={styles.tasklist}
              data={tasks}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}/>

            <View style={styles.btnCadastrarObjOrientacao}>
            <Button
                mode="contained"
                onPress={() => navigation.navigate('Home')}
                contentStyle={styles.button}
                labelStyle={styles.buttonLabel}
                theme={theme}>
                Cadastrar Objetivo
            </Button>
            </View>

          </View>
        </View>
      <MenuGlobal navigation={navigation} />
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
  
                

