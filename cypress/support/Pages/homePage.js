import 'cypress-real-events'
export class HomePage {

    options(){
        cy.get(pageObjects.homeOptions).realHover()
    }

    clickLogout() {
        cy.get(pageObjects.clickLogout).click({ force: true })
    }
}

const pageObjects = {
    homeOptions: '#userLogged',
    clickLogout: '.custom_dropdown i[class*="fa fa-sign-out"]',
}