# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

<img src="https://user-images.githubusercontent.com/86859418/229002972-8f646cf5-31c6-447c-a5dc-686387ca2936.jpeg"><img>

## Modelo ER

<img src="https://user-images.githubusercontent.com/86859418/229011621-91278e30-5a68-4acf-b159-f5196efe761f.jpg"></src>

## Esquema Relacional

<img src="https://user-images.githubusercontent.com/86859418/229002250-a11c80b1-c75f-4ff9-bce5-a9cdd0fb456f.jpg"></img>

## Modelo Físico

Script do arquivo do banco dados SQL SERVER - modelagem de dados no link: > - [Dream Mapp DB](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-dream-mapp/blob/main/bd/dream_mapp_modelagem.sql)

## Tecnologias Utilizadas

|Função    | Tecnologia  | 
|------------|-----------------------------------------|
| Linguagem | JavaScript | 
| Framework | ReactNative | 
| Bibliotecas | React Native Paper, React Navigation, Json server, Json server auth, Axios | 
| IDE | Visual Studio Code | 
| Ferramentas | Microsoft Teams, GitHub, Whatsapp | 
| Banco de dados | SQL SERVER | 

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

<table>
  <tr>  <th> Características de Qualidade </th> 
    <th> Sub-características de Qualidade </th> 
   <th> Register </th>
  <th> Login</th>
  <th> Cadastro de Usuário </th>
  <th> Cadastro de Objetivos </th>
  <th> Cadastro de Metas </th>
  <th> Home </th>
  <th> Splash </th>
  <th> Perfil </th></tr>
  <tr><th rowspan="5">Funcionalidade</th>
    <td>Adequação</td>
    <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td></tr>
  <tr>
    <td>Acurácia</td>
    <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td></tr>
   <tr>
    <td>Interoperabilidade</td>
    <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td></tr>
    <tr>
    <td>Conformidade</td>
    <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td></tr>
    <tr>
    <td>Segurança de acesso</td>
    <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td></tr>
   <tr><th rowspan="3">Confiabilidade</th>
    <td>Maturidade</td>
    <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td></tr>
  <tr>
    <td>Tolerâncoa a Falhas</td>
    <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td></tr>
   <tr>
    <td>Recuperabilidade</td>
    <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td></tr>
    </tr>
   <tr><th rowspan="4">Portabilidade</th>
    <td>Adaptabilidade</td>
    <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td></tr>
  <tr>
    <td>Capacidade para ser instalado</td>
    <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td>
  <td>Não</td></tr>
   <tr>
    <td>Conformidade</td>
    <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td></tr>
    <tr>
    <td>Anasibilidade</td>
    <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td></tr>
  <tr><th rowspan="3">Manutenibilidade</th>
    <td>Modificabilidade</td>
    <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td></tr>
  <tr>
    <td>Estabilidade</td>
    <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td></tr>
   <tr>
    <td>Testabilidade</td>
    <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td>
  <td>Sim</td></tr>
 
*Justificativa*

Foram escolhidas estas caracteristicas e sub-características por entendermos que são os essenciais para o fluxo do projeto e seu sucesso no momento da entrega para o usuário. Assim, foi observado a tecnologia disponível para o desenvolvimento e sua finalidade.
