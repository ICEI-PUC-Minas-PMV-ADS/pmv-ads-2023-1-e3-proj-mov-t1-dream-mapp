import React, { useState } from 'react';

import Container from './src/components/Container';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Input from './src/components/Input';

const App = () => {

  const [nome, setNome] = useState(null);
  const [sobrenome, setSobrenome] = useState(null);
  const [email, setEmail] = useState(null);
  const [telefone, setTelefone] = useState(null);

  return (
    <Container>
      <Header title={'DREAM-MAPP - Cadastro Clientes'} />
       <Body>
        <Input label="Nome" value={nome} onChangeText={(text) => setNome(text)}/>
        <Input label="Sobrenome" value={sobrenome} onChangeText={(text) => setSobrenome(text)}/>
        <Input label="E-mail" value={email} onChangeText={(text) => setEmail(text)} />
        <Input label="Telefone" value={telefone} onChangeText={(text) => setTelefone(text)} />
      </Body>
    </Container>
  );
};

export default App;
