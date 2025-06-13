import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage, pageObjects } from "../../support/Pages/loginPage"
import { HomePage } from "../../support/Pages/homePage"
const Home = new HomePage();
const Login = new LoginPage();
const faker = require('faker-br');
const validUser = 'qazando@gmail.com'
const validPassword = 'alunoqa123'

Given('que o usuário está na página de login', () => {
    Login.visit()
})


Then('o sistema deve exibir o texto de sucesso {string}', (expectText) => {
    Login.shouldLogin(expectText)
})


Given('que o usuário está logado', () => {
    Login.visit()
    Login.inputLogin()
    Login.inputPassword()
    Login.clickLogin()
    Login.clickInOk()
})

When('o usuário passa o mouse no nome de usuário', () => {
    Home.options()
})

When('o usuário clica no botão de logout', () => {
    Home.clickLogout()
})

When('o usuário tenta realizar login com {string}', (type) => {
    let login;
    let password;
    switch (type) {
        case "usuário não cadastrado":
            login = faker.internet.email();
            password = faker.internet.password();
            Login.inputFillLogin(login, password);
            break;

        case "usuário e senha válidos":
            login = validUser;
            password = validPassword;
            Login.inputFillLogin(login, password);
            break;

        case "usuário inválido":
            login = faker.name.firstName();
            password = validPassword;
            Login.inputFillLogin(login, password);
            break;

        case "senha inválida":
            login = validUser;
            password = 'seila';
            Login.inputFillLogin(login, password);
            break;

        case "senha em branco":
            login = validUser;
            Login.inputFillLogin(login, password);
            break;

        case "usuário em branco":
            password = '123456'
            Login.validPassword;
            break

        case "usuário em branco e senha em branco":
            Login.inputFillLogin(login, password);
            break
        default:
            break;
    }

    Login.clickLogin()

})

Then('o sistema não deve permitir o login', () => {
    Login.shouldNotLogin()
})

Then('o sistema deve exibir a mensagem de erro {string}', (alert) => {
    Login.errorMessage(alert)
})

When('o usuário tenta realizar login com "usuário e senha válidos" com a tecla Enter', (type) => {
    const login = validUser
    const password = validPassword

    Login.inputFillLogin(login, password);
    cy.get(pageObjects.inputPassword).type('{enter}');
})

When('o usuário realiza logout', () => {
    Home.options()    
    Home.clickLogout()
    Login.clickInOk()

})

When('o usuário clica no botão "voltar" no navegador', () => {
    Login.goBack()
})

Then('o sistema não deve permitir o acesso à página principal', () => {
    Login.shouldNotHome()
})