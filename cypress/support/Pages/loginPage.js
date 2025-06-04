export class LoginPage {
  
    visit() {
        cy.visit('/login');
    }

    inputLogin(){
        cy.get(pageObjects.inputLogin).type('validUsername@google.com.br');
    }

    inputPassword(){
        cy.get(pageObjects.inputPassword).type('1234567');
    }

    clickLogin(){
        cy.get(pageObjects.clickLogin).click();
    }

    shouldLogin(a){
        cy.get(pageObjects.shouldLogin).should('have.text', a);
    }

    clickInOk(){
        cy.get(pageObjects.clickInOk).click();
    }
}

const pageObjects = {
  inputLogin: '#user',
  inputPassword: '#password',
  clickLogin: '#btnLogin',
  shouldLogin: 'div[class*="icon-success"] h2',
  clickInOk: 'button[class*="swal2-confirm"]'
};