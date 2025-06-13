export const pageObjects = {
    inputName: '#user',
    inputEmail: '#email',
    inputPassword: '#password',
    clickRegister: '#btnRegister'
};

export class CadastroPage {

    visit() {
        cy.visit('/register')
    }

    fillRegisterForm(name, email, password) {
        if (name){
            cy.get(pageObjects.inputName).type(name)
        }
        if (email){
            cy.get(pageObjects.inputEmail).type(email)
        }
        if (password){
            cy.get(pageObjects.inputPassword).type(password)
        }                
    }

    clickRegister() {
        cy.get(pageObjects.clickRegister).click()
    }

}