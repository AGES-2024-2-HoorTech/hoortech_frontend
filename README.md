# Projeto React - HoorTech Frontend

Este projeto é o frontend da aplicação HoorTech, desenvolvido utilizando React.js. Este README fornece as instruções necessárias para a instalação, configuração e execução do ambiente de desenvolvimento.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm** (que vem junto com o Node.js) ou **yarn** (opcional): [Yarn](https://yarnpkg.com/)

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

### 1. Clonar o Repositório

Primeiro, clone o repositório do projeto para a sua máquina local. No terminal, execute:

```bash
git clone https://tools.ages.pucrs.br/hoortech/hoortech_frontend.git


2. Navegar para o Diretório do Projeto
Entre no diretório do projeto clonado:


cd HoorTech-Frontend



3. Instalar Dependências
Com o Node.js instalado, use o npm para instalar as dependências do projeto:

npm install
Nota: Se você preferir usar yarn, você pode instalar as dependências usando yarn install.

Executar o Projeto
Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento local:

npm start
O comando acima iniciará o servidor de desenvolvimento e abrirá automaticamente a aplicação no seu navegador padrão. A aplicação estará disponível em http://localhost:3000.

Estrutura do Projeto
Aqui está uma visão geral da estrutura básica do projeto:

hoortech_frontend/
├── node_modules/            # Módulos e pacotes instalados via npm
├── public/                  # Arquivos públicos estáticos
│   ├── favicon.ico          # Ícone da aba do navegador
│   ├── index.html           # Arquivo HTML principal
│   ├── logo192.png          # Ícone padrão (opcional)
│   ├── logo512.png          # Ícone padrão (opcional)
│   ├── manifest.json        # Configurações de PWA (opcional)
│   └── robots.txt           # Configurações para motores de busca
├── src/                     # Código-fonte do projeto
│   ├── assets/              # Arquivos estáticos (imagens, fontes, etc.)
│   │   └── images/          # Imagens utilizadas no projeto
│   ├── components/          # Componentes React reutilizáveis
│   ├── pages/               # Componentes de página
│   ├── services/            # Serviços para comunicação com APIs
│   ├── styles/              # Arquivos de estilização (CSS, SASS, etc.)
│   ├── tests/               # Arquivos de testes
│   ├── utils/               # Funções utilitárias e helpers
│   ├── routes.js            # Configuração de rotas da aplicação
│   ├── App.js               # Componente principal
│   ├── index.js             # Ponto de entrada do React
│   └── ...
├── .gitignore               # Arquivos a serem ignorados pelo Git
├── package.json             # Arquivo de configuração do npm
├── package-lock.json        # Versões exatas das dependências instaladas
└── README.md                # Instruções do projeto

Scripts Disponíveis
No diretório do projeto, você pode executar os seguintes comandos:

npm start: Inicia o servidor de desenvolvimento.
npm run build: Compila a aplicação para produção na pasta build.
npm run eject: Remove a dependência de configuração do create-react-app.
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react: instala Material Icons.
npm install jspdf instalará o jspdf

