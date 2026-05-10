import { bancosPage } from '../../../pages/campanha/banco-de-dados/banco-de-dados.page'

describe('Bancos de dados', () => {

    beforeEach(() => {
        bancosPage.visit()
        cy.login()
        bancosPage.acessar()
    })

    describe('Criação', () => {
        it('Deve criar novo banco de dados', () => {
            bancosPage.criar('Marketing')
            bancosPage.banco('Marketing').should('be.visible')
        })
    })

    describe('Pesquisa', () => {

        beforeEach(() => {
            bancosPage.criar('Marketing')
            bancosPage.criar('Financeiro')
            bancosPage.criar('RH')
        })

        it('Deve filtrar por Financeiro', () => {

            bancosPage.searchInput().type('Financeiro')

            bancosPage.banco('Financeiro').should('be.visible')
            bancosPage.banco('Marketing').should('not.exist')
            bancosPage.banco('RH').should('not.exist')
        })
    })

    describe('Ações', () => {

        beforeEach(() => {
            bancosPage.criar('Marketing')
            bancosPage.criar('Financeiro')
            bancosPage.criar('RH')
        })

        it('Deve excluir um banco', () => {
            bancosPage.botaoExcluir('Marketing').click()
            bancosPage.banco('Marketing').should('not.exist')
        })

        it('Deve arquivar bancos e validar na lista de arquivados', () => {

            bancosPage.botaoArquivar('Financeiro').click()
            bancosPage.banco('Financeiro').should('not.exist')

            bancosPage.botaoArquivar('RH').click()
            bancosPage.banco('RH').should('not.exist')

            bancosPage.abrirArquivados()

            bancosPage.banco('Financeiro').should('be.visible')
            bancosPage.banco('RH').should('be.visible')
        })
    })
})