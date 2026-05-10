class BancosPage {

    visit() {
        cy.visit('/')
    }

    searchInput() {
        return cy.get('input[type="search"]')
    }

    banco(nome) {
        return cy.contains(nome)
    }

    botaoExcluir(nome) {
        return cy.contains(nome)
            .parent()
            .find('button[title="Apagar"]')
    }

    botaoArquivar(nome) {
        return cy.contains(nome)
            .parent()
            .find('button[title="Arquivar"]')
    }

    abrirArquivados() {
        cy.get('button[data-variant="icon"]')
            .find('svg path[d*="M20 2H4"]')
            .closest('button')
            .click()
    }

    criar(nome) {
        cy.criarBanco(nome)
    }

    acessar() {
        cy.acessarBancosDeDados()
    }
}

export const bancosPage = new BancosPage()