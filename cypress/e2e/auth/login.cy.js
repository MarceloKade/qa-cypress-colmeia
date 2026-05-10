import { loginPage } from '../../pages/auth/login.page'

describe('Login', () => {

    beforeEach(() => {
        loginPage.visit()
    })

    describe('Comportamentos esperados', () => {

        it('Deve carregar corretamente todos os elementos da interface de login', () => {

            loginPage.form().should('be.visible')
            loginPage.email().should('be.visible')
            loginPage.password().should('be.visible')
            loginPage.botaoEntrar().should('be.visible')
            loginPage.linkEsqueceuSenha().should('be.visible')
            loginPage.logo().should('be.visible')
            loginPage.imagemFundo().should('be.visible')

            cy.screenshot('login-ui-loaded')
        })

        it('Deve exibir modal de sucesso ao realizar login', () => {
            loginPage.loginValido()
            cy.contains('Login realizado com sucesso').should('be.visible')
        })

        it('Deve redirecionar para dashboard após confirmar login', () => {
            loginPage.loginValido()
            cy.contains('Continuar').click()
            cy.url().should('include', '/dashboard')
        })

        it('Deve iniciar fluxo de recuperação de senha', () => {
            loginPage.linkEsqueceuSenha().click()
            cy.url().should('include', '/forgot-password')
        })

        it('Deve exibir mensagem ao deixar campos obrigatórios vazios', () => {
            loginPage.email().click().blur()
            loginPage.password().click().blur()
            cy.contains('Este campo é obrigatório').should('be.visible')
        })

    })

    describe('Comportamentos inválidos', () => {

        it('Não deve permitir email inválido', () => {
            loginPage.email().type('abacaxi').blur()
            cy.contains('Email inválido').should('be.visible')
        })

        it('Não deve realizar login sem credenciais válidas', () => {
            cy.intercept('POST', '**/*login*').as('login')
            loginPage.botaoEntrar().click()
            cy.get('body').should('contain.text', 'Usuário ou senha inválidos')
        })

    })
})