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

## 🔐 Comandos customizados

Foram criados comandos reutilizáveis para facilitar os testes e evitar repetição de código:

- `cy.login()` → realiza autenticação no sistema
- `cy.accessDashboard()` → acessa diretamente o dashboard após login
- `cy.openCampaignModule()` → navega até o módulo de campanha

---

## 🧪 Estrutura dos testes

### ✔ Login

- Validação de elementos da interface
- Login com sucesso (foi observado comportamento inconsistente na mensagem exibida após autenticação)
- Redirecionamento para dashboard após confirmação do login
- Fluxo de recuperação de senha
- Validação de campos obrigatórios
- Validação de formato de e-mail
- Tentativa de autenticação sem credenciais válidas

### ✔ Dashboard

- Carregamento da tela
- Navegação lateral
- Acesso ao perfil(não apresentou alteração visual, redirecionamento ou carregamento de conteúdo durante a navegação testada)

### ✔ Campanha

- Acesso ao módulo
- Menu lateral
- Navegação:
  - Bancos de dados(feature da aplicação com fluxo de criação, pesquisa, arquivamento e exclusão)
    - Observação: durante a execução dos testes E2E, foi observado que os dados criados no módulo "Bancos de dados" não persistem após recarregamento da página, e itens arquivados não permanecem disponíveis na listagem de arquivados entre sessões.
  - Colmeia Forms(acesso via menu lateral; conteúdo da página não é carregado durante a navegação testada)

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
