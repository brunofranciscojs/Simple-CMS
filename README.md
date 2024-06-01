# Projeto CMS Simples
## Visão Geral
Este projeto é um Sistema de Gerenciamento de Conteúdo (CMS) simples que permite aos usuários gerenciar projetos, descrições, links, ícones, nomes de usuário e senhas. Foi construído usando React para o frontend e Firebase para o banco de dados backend.

### Funcionalidades
* Editar e gerenciar projetos
* Atualizar descrições de projetos
* Adicionar e gerenciar links
* Atualizar e gerenciar ícones
* Autenticação de usuário (nome de usuário e senha)
* Tecnologias Utilizadas
* React
* Firebase (Firestore)

### Requisitos
* Pré-requisitos
* Node.js instalado
* Conta no Firebase

### Instalação
* Clone o repositório:

```bash
git clone https://github.com/brunofranciscu/cms-simples.git
cd cms-simples
```

Instale as dependências:
```bash
npm install
Configure o Firebase:
```

Vá para o console do Firebase e crie um novo projeto.
Ative o Firestore no console do Firebase.
Crie um arquivo .env na raiz do seu projeto e adicione sua configuração do Firebase:

```bash
REACT_APP_FIREBASE_API_KEY=sua_chave_api
REACT_APP_FIREBASE_AUTH_DOMAIN=seu_projeto_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=seu_projeto_id
REACT_APP_FIREBASE_STORAGE_BUCKET=seu_projeto_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu_id_de_mensagem
REACT_APP_FIREBASE_APP_ID=seu_app_id
```

Inicie o servidor de desenvolvimento:
```bash
npm start
Abra seu navegador e vá para http://localhost:5173.
```

### Uso
Faça login com seu nome de usuário e senha.
Navegue até o painel para adicionar ou editar projetos.
Use os formulários para atualizar descrições de projetos, links e ícones.

### Licença
Este projeto é licenciado sob a Licença MIT.







# Simple CMS Project
## Overview
This project is a simple Content Management System (CMS) that allows users to manage projects, descriptions, links, icons, usernames, and passwords. It is built using React for the frontend and Firebase for the backend database.

## Login
* user: jhon
* password: 0000
  
### Features
* Edit and manage projects
* Update project descriptions
* Add and manage links
* Update and manage icons
* User authentication (username and password)
* Technologies Used
* React
* Firebase (Firestore)
* Getting Started
* Prerequisites
* Node.js installed
* Firebase account

### Installation
Clone the repository:

```bash
git clone https://github.com/brunofranciscu/simple-cms.git
cd simple-cms
Install the dependencies:
```

```bash
npm install
Set up Firebase:
```


Go to the Firebase console and create a new project.
Enable Firestore in the Firebase console.
Create a .env file in the root of your project and add your Firebase configuration:

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
Start the development server:
```

```bash
npm run dev
Open your browser and go to http://localhost:5173.
```

### Usage
Log in with your username and password.
Navigate to the dashboard to add or edit projects.
Use the forms to update project descriptions, links, and icons.

### License
This project is licensed under the MIT License.
