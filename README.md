# Cypress E2E - Projeto de Testes (Colmeia)

Este projeto contém testes end-to-end (E2E) utilizando Cypress para
validação das principais funcionalidades da aplicação.

---

## 📁 Estrutura do projeto

    cypress/
    ├── e2e/
    │   ├── auth/
    │   ├── campanha/
    │   └── dashboard/
    ├── support/
    │   ├── commands.js
    │   └── e2e.js
    ├── pages/
    │   ├── loginPage.js
    │   ├── dashboardPage.js
    │   └── campanhaPage.js
    └── .env

---

## 🚀 Como executar o projeto

### Instalar dependências

```bash
npm install
```

### Abrir Cypress em modo interativo

```bash
npx cypress open
```

### Rodar testes em modo headless

```bash
npx cypress run
```

---

## 🔐 Login

O login é realizado via comando customizado:

```js
cy.login();
```

---

## 🧪 Estrutura dos testes

### ✔ Login

- Validação de elementos da tela
- Login com sucesso
- Erros de autenticação
- Recuperação de senha

### ✔ Dashboard

- Carregamento da tela
- Navegação lateral
- Acesso ao perfil

### ✔ Campanha

- Acesso ao módulo
- Menu lateral
- Navegação:
  - Bancos de dados
  - Colmeia Forms

---

## 📦 Pages (Page Object Model)

- loginPage.js → tela de login
- dashboardPage.js → dashboard
- campanhaPage.js → módulo campanha

---

## 🧪 Boas práticas aplicadas

- cy.login reutilizável
- organização por módulos
- beforeEach para setup
- separação por contexto

---
