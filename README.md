<p align="center">
   <img src="https://github.com/joaopedrolullo/happy/assets/14797386/f82afe2c-9e84-4516-8d07-6952d0f7c03f" alt="Happy" width="400"/>
</p>

> :rocket: Projeto feito para auxiliar orfanatos, feito na Next Level Week #3 @Rocketseat

# :pushpin: Tabela de Conteúdo

* [Tecnologias](#computer-tecnologias)
* [Funcionalidades](#rocket-funcionalidades)
* [Como rodar](#construction_worker-como-rodar)

### Screenshot
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
   <img src="https://github.com/joaopedrolullo/happy/assets/14797386/baa2a7ed-6141-41e7-8fc5-103ad7c2d651" width="800">
</div>

# :computer: Tecnologias
Esse projeto foi feito utilizando as seguintes tecnologias:

* [Typescript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/en/)
* [ReactJS](https://reactjs.org/)
* [React Native](http://facebook.github.io/react-native/)
* [Expo](https://expo.io/)
* [Express](https://expressjs.com/)
* [axios](https://github.com/axios/axios)

# :rocket: Funcionalidades

O **Happy** é uma aplicação Web e Mobile feita para auxiliar aos orfanatos, podendo eles se cadastrarem e indicarem informações importantes como nome, endereço e instruções importantes para a realização de uma visita e os usuários podem encontrar os orfanatos cadastrados.
  
Essa aplicação foi realizada durante a Next **Level Week #3**, projeto da [Rocketseat](https://rocketseat.com.br/).

# :construction_worker: Como rodar
- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/joaopedrolullo/happy.git
```

2. Executando a Aplicação:

```sh
  # API
  $ cd backend
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Configurando o banco de dados e criando as tabelas.
  $ yarn typeorm migration:run # ou npm typeorm migration:run

  # Inicie a API
  $ yarn dev # ou npm dev

  # Aplicação web
  $ cd web
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start

  # Aplicação mobile
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação mobile
  $ yarn start # ou npm start
```
