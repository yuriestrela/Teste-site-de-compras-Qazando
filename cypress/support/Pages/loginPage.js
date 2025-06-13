export const pageObjects = {
    inputLogin: '#user',
    inputPassword: '#password',
    clickLogin: '#btnLogin',
    shouldLogin: 'div[class*="icon-success"] h2',
    clickInOk: 'button[class*="swal2-confirm"]',
    errorMessage: 'span.invalid_input',
    shouldNotHome: ''
};

export class LoginPage {

    visit() {
        cy.visit('/login');
    }

    inputLogin() {
        cy.get(pageObjects.inputLogin).type('validUsername@google.com.br');
    }

    inputFillLogin(login, password) {
        if (login) {
            cy.get(pageObjects.inputLogin).type(login)

        }
        if (password) {
            cy.get(pageObjects.inputPassword).type(password)
        }
    }

    inputPassword() {
        cy.get(pageObjects.inputPassword).type('1234567');
    }

    clickLogin() {
        cy.get(pageObjects.clickLogin).click();
    }

    shouldLogin(a) {
        cy.get(pageObjects.shouldLogin).should('have.text', a);
    }

    clickInOk() {
        cy.get(pageObjects.clickInOk).click();
    }

    shouldNotLogin() {
        cy.get(pageObjects.shouldLogin).should('not.exist');
        cy.url().should('not.include', '/my-account');
    }

    errorMessage(alert) {
        cy.get(pageObjects.errorMessage).should('have.text', alert)
    }

    goBack() {
        cy.go('back');
        cy.go('back');
    }

    shouldNotHome() {
        cy.url().should('not.include', '/my-account');
    }

}
