<div align="center"> 
<img  src="https://assets.website-files.com/5ff79f3ebebf6b12f6b7747f/5ffe04fc6284b7e90070d985_logo-gama-academy.png" width="250" />
</div>
<h1 align="center"> GamaBank - Versão WEB</h1>

<p align="center">Desenvolvido pela equipe da <strong>CodeCommit</strong>. Deploy <a href="#">aqui</a>.</p>

<p align="center"> 
	<a href="#equipe-da-codecommit">Equipe</a> | 
	<a href="#tecnologias">Tecnologias</a> | 
	<a href="#features">Features</a> | 
	<a href="#arquitetura-de-pastas">Arquitetura de pastas</a> | 
	<a href="#como-usar">Como usar</a> | 
	<a href="#licença">Licença</a>
</p>

<img src="https://raw.githubusercontent.com/igorsantos97/bank-acc-react/main/docs/home-print.png" />
<p>Projeto desenvolvido na academia da <a href="https://www.gama.academy/" target="_blank">Gama Academy</a> em parceria com a <a href="https://www.accenture.com/br-pt" target="_blank">Accenture</a> com objetivo de aplicar todos os conceitos aprendidos durante o curso e apresentar para banca como projeto final!</p>

## Equipe da CodeCommit

<a href="https://cutt.ly/blOnLPV" target="_blank"> 
<img src="https://cutt.ly/glOknQX" width="90"/></a>     
<a href="https://cutt.ly/7lOQfzv" target="_blank"> 
<img src="https://cutt.ly/MlOkJaB" width="90"/></a>     
<a href="https://cutt.ly/SlOQcBf" target="_blank"> 
<img src="https://cutt.ly/1lOlfra" width="90"/></a>     
<a href="https://cutt.ly/LlOQCM4" target="_blank"> 
<img src="https://cutt.ly/3lOj5ZR" width="90"/></a>      
<a href="https://cutt.ly/NlOm8Tm" target="_blank"> 
<img src="https://cutt.ly/jlOlWa2" width="90"/></a>
<a href="https://cutt.ly/slOQ5xI" target="_blank"> 
<img src="https://cutt.ly/JlOvHsQ" width="90"/>
</a>

&nbsp;<a href="https://cutt.ly/blOnLPV" target="_blank">Alisson O.</a> | &nbsp;<a href="https://cutt.ly/7lOQfzv" target="_blank">Ana Laura</a> | <a href="https://cutt.ly/SlOQcBf" target="_blank">Gabriel M.</a> | <a href="https://cutt.ly/LlOQCM4" target="_blank">Gabriel N.</a> | <a href="https://cutt.ly/NlOm8Tm" target="_blank">Glauber A.</a> | <a href="https://cutt.ly/slOQ5xI" target="_blank">Igor Santos</a>

## Libs

- ReactJS
- Typescript
- axios
- jest
- react-redux
- react-router-dom
- styled-components
- jsonwebtoken
- react-toastify
- yup
- unform

## Features

Conexão com API para:

- Cadastro e autenticação de usuários
- Recuperação de senha do usuário
- Busca das informações do usuário e da sua conta
- Transferências entre contas de usuários
- Fazer depósitos
- Fazer pagamentos
- Cadastrar planos

Outras características:

- Componentização de elementos da interface para o reaproveitamento de código
- Responsividade
- Validação de input com unform
- Alertas de mensagens com Yup e React Toastify
- Arquitetura de Design: Atomic Design para organização dos componentes

## Arquitetura de pastas

```
├── src<br />
│ ├── assets<br />
│ ├── components<br />
│ ├── pages<br />
│ ├── services<br />
│ ├── store<br />
│ ├── styles<br />
│ ├── utils<br />

```

```
.
├── README.md
├── jsconfig.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── assets
    │   ├── css
    │   │   ├── bootstrap.min.css
    │   │   └── bootstrap.min.css.map
    │   ├── style
    │   │   └── style.css
    │   ├── fonts
    │   ├── img
    │   └── scss
    │       ├── case2k20
    │       │   ├── cards
    │       │   ├── mixins
    │       │   └── plugins
    │       ├── react
    │       │   ├── case2k20
    │       │   ├── plugins
    │       │   └── react-differences.scss
    │       └── case2k20.scss
    ├── components
    │   ├── Footers
    │   │   └── index.js
    │   ├── Headers
    │   │   └── IndexHeader.js
    │   └── Navbar
    │       └── index.js
    └── views
        ├── Index.js
        ├── pages
        │   ├── FlagPage.js
        └── sections
            ├── StageContent.js
            └── IndexTopFooter.js
```

## Como Usar

#### Clonando o repositório

```bash
git clone https://github.com/igorsantos97/bank-acc-react.git
```

#### Entrando no diretório do projeto

```bash
cd bank-acc-react
```

#### Instalando as Dependências

```bash
yarn install
```

#### Iniciando a Aplicação

```bash
yarn start
```

## Licença

Esse projeto utiliza a [LICENÇA](../LICENSE) MIT.
