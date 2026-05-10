class LoginPage {
    visit() {
        cy.visit('/')
    }

    form() {
        return cy.get('form')
    }

    email() {
        return cy.get('#email')
    }

    password() {
        return cy.get('#password')
    }

    botaoEntrar() {
        return cy.contains('Entrar')
    }

    linkEsqueceuSenha() {
        return cy.contains('Esqueceu sua senha?')
    }

    logo() {
        return cy.get('img[alt="Colmeia logo"]')
    }

    imagemFundo() {
        return cy.get('img.object-cover')
    }

    preencherEmail(valor) {
        this.email().type(valor)
    }

    preencherSenha(valor) {
        this.password().type(valor)
    }

    limparCampos() {
        this.email().clear()
        this.password().clear()
    }

    loginValido() {
        cy.login()
    }
}

export const loginPage = new LoginPage()