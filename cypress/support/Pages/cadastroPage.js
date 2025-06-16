export const pageObjects = {
    inputName: '#user',
    inputEmail: '#email',
    inputPassword: '#password',
    clickRegister: '#btnRegister',
    shouldRegister: 'div[class*="swal2-show"]'
};

export class CadastroPage {

    visit() {
        cy.visit('/register')
    }

    fillRegisterForm(name, email, password) {
        if (name) {
            cy.get(pageObjects.inputName).type(name)
        }
        if (email) {
            cy.get(pageObjects.inputEmail).type(email)
        }
        if (password) {
            cy.get(pageObjects.inputPassword).type(password)
        }
    }

    clickRegister() {
        cy.get(pageObjects.clickRegister).click()
    }

    shouldRegister(message) {
        cy.url().should('include', '/my-account');
        cy.get(pageObjects.shouldRegister).contains(message).should('be.visible')
    }

    shouldNotRegister(error) {

        if (error.includes('nome')) {
            cy.get(pageObjects.inputName)
                .siblings('.errorLabel')
                .should('contain', error)

        } else if (error.includes('e-mail')) {
            cy.get(pageObjects.inputEmail)
                .siblings('.errorLabel')
                .should('contain', error)

        } else if (error.includes('senha')) {
            cy.get(pageObjects.inputPassword)
                .siblings('.errorLabel')
                .should('contain', error)
        }

        cy.url().should('not.include', '/my-account');


    }

    ValidateAllFields(nameError, emailError, passwordError) {
        cy.get(pageObjects.inputName)
            .siblings('.errorLabel')
            .should('contain', nameError)

        cy.get(pageObjects.inputEmail)
            .siblings('.errorLabel')
            .should('contain', emailError)

        cy.get(pageObjects.inputPassword)
            .siblings('.errorLabel')
            .should('contain', passwordError)
    }


}