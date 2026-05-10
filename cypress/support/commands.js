// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.get('#email').type(Cypress.env('validEmail'))
    cy.get('#password').type(Cypress.env('validPassword'))
    cy.contains('Entrar').click()
})

Cypress.Commands.add('acessarBancosDeDados', () => {

    cy.contains('Continuar').click()
    cy.get('aside a').click()
    cy.contains('Bancos de dados').should('be.visible').click()
})

Cypress.Commands.add('criarBanco', (nome) => {
    cy.contains('button', 'Criar').click()
    cy.get('input[placeholder="Nome do item"]').should('be.visible').clear().type(nome)
    cy.contains('button', 'Salvar').click()
    cy.contains(nome).should('be.visible')
})