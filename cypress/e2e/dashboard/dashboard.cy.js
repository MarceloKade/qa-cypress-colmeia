import { dashboardPage } from '../../pages/dashboard/dashboard.page'

describe('Dashboard', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.login()
        cy.contains('Continuar').click()
    })

    it('Deve acessar o dashboard com sucesso', () => {
        dashboardPage.url().should('include', '/dashboard')
        dashboardPage.header().should('be.visible')
    })

    it('Deve exibir elementos principais do dashboard', () => {
        dashboardPage.logo().should('be.visible')
        dashboardPage.perfil().should('be.visible')
        dashboardPage.sidebar().should('be.visible')
    })

    it('Deve permitir navegação pelo menu lateral', () => {
        dashboardPage.abrirMenuLateral()
        dashboardPage.url().should('include', '/campanha')
    })

    it('Deve navegar para perfil ao clicar em Candidato', () => {
        dashboardPage.acessarPerfil()
        dashboardPage.url().should('include', '/dashboard/perfil')
    })

})