class CampanhaPage {

    abrirModulo() {
        cy.get('aside a').click()
    }

    url() {
        return cy.url()
    }

    titulo() {
        return cy.contains('Campanha')
    }

    opcaoBancos() {
        return cy.contains('Bancos de dados')
    }

    opcaoColmeiaForms() {
        return cy.contains('Colmeia Forms')
    }

    acessarBancosDeDados() {
        this.opcaoBancos().click()
    }

    acessarColmeiaForms() {
        this.opcaoColmeiaForms().click()
    }

    validarConteudoNaoVazio() {
        cy.get('div.flex.gap-2.h-full.p-4')
            .find('ng-component')
            .last()
            .should(($el) => {
                const hasChildren = $el[0].children.length > 0
                const hasText = $el.text().trim().length > 0

                expect(hasChildren || hasText).to.eq(true)
            })
    }
}

export const campanhaPage = new CampanhaPage()