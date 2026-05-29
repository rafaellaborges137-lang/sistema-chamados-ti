# Sistema de Chamados de TI - Aplicação Full Stack

Aplicação Full Stack desenvolvida para gerenciamento de chamados de suporte técnico, permitindo registrar e acompanhar solicitações de atendimento.

## Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento Full Stack, incluindo criação de APIs REST, integração entre Front-End e Back-End, manipulação de dados e versionamento com Git/GitHub.

O sistema permite que usuários registrem chamados de suporte e acompanhem seu status.

## Tecnologias Utilizadas

### Front-End

- React
- Vite
- Axios
- JavaScript
- HTML5
- CSS3

### Back-End

- Node.js
- Express
- CORS

### Ferramentas

- Git
- GitHub
- VS Code

## Funcionalidades

- Criar chamados
- Listar chamados
- Integração Front-End e Back-End
- API REST

## Estrutura do Projeto

```text
sistema-chamados-ti
│
├── backend
│   ├── server.js
│   ├── package.json
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│
└── README.md
```

## Como Executar o Projeto

### Clonar o repositório

```bash
git clone https://github.com/rafaellaborges137-lang/sistema-chamados-ti.git
```

### Acessar a pasta

```bash
cd sistema-chamados-ti
```

### Iniciar o Back-End

```bash
cd backend
npm install
node server.js
```

Servidor disponível em:

```text
http://localhost:3001
```

### Iniciar o Front-End

Abra outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Aplicação disponível em:

```text
http://localhost:5173
```

## Endpoints da API

### Listar chamados

```http
GET /chamados
```

### Criar chamado

```http
POST /chamados
```

Exemplo:

```json
{
  "titulo": "Internet caiu"
}
```

## Objetivos de Aprendizagem

- Desenvolvimento Full Stack
- Criação de APIs REST
- Integração entre React e Node.js
- Consumo de APIs com Axios
- Versionamento com Git e GitHub
- Boas práticas de desenvolvimento

## Autora

Rafaella Borges

Graduanda em Engenharia de Software com interesse em desenvolvimento de software, inteligência artificial e acessibilidade digital.

GitHub:
https://github.com/rafaellaborges137-lang

## Próximas Melhorias

- Implementação de banco de dados SQLite
- Alteração de status dos chamados
- Exclusão de chamados
- Sistema de login
- Cadastro de usuários
- Dashboard de métricas
- Deploy da aplicação
- Interface responsiva com Bootstrap

## Licença

Projeto desenvolvido para fins de estudo e aprimoramento de habilidades em desenvolvimento Full Stack.
