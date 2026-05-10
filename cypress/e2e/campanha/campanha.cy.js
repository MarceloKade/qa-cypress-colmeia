import { campanhaPage } from '../../../pages/campanha/campanha.page'

describe('Campanha', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.login()
        cy.contains('Continuar').click()
        campanhaPage.abrirModulo()
    })

    describe('Comportamentos esperados', () => {

        it('Deve acessar módulo de campanha', () => {
            campanhaPage.url().should('include', '/dashboard/campanha')
            campanhaPage.titulo().should('be.visible')
        })

        it('Deve exibir opções do menu da campanha', () => {
            campanhaPage.opcaoBancos().should('be.visible')
            campanhaPage.opcaoColmeiaForms().should('be.visible')
        })

        it('Deve navegar para Bancos de dados', () => {
            campanhaPage.acessarBancosDeDados()
            campanhaPage.url().should('include', '/dashboard/campanha/bancos-de-dados')
        })

        it('Deve navegar para Colmeia Forms', () => {
            campanhaPage.acessarColmeiaForms()
            campanhaPage.url().should('include', '/dashboard/campanha/colmeia-forms')

            campanhaPage.validarConteudoNaoVazio()
        })
    })

})