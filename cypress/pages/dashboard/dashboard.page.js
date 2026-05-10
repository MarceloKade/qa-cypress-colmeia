class DashboardPage {

    url() {
        return cy.location('pathname')
    }

    header() {
        return cy.get('header')
    }

    sidebar() {
        return cy.get('aside')
    }

    logo() {
        return cy.contains('Colmeia')
    }

    perfil() {
        return cy.contains('Candidato')
    }

    abrirMenuLateral() {
        cy.get('aside a').first().click()
    }

    acessarPerfil() {
        this.perfil().first().click()
    }

}

export const dashboardPage = new DashboardPage()