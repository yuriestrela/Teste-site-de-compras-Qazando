import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CadastroPage, pageObjects } from "../../support/Pages/cadastroPage"
import { HomePage } from "../../support/Pages/homePage"
import { LoginPage } from "../../support/Pages/loginPage";
const Cadastro = new CadastroPage();
const Home = new HomePage();
const Login = new LoginPage();
const faker = require('faker-br');
const validEmail = 'qazando@gmail.com'
const validPassword = 'alunoqa@123'

Given('que o usuário está na página de cadastro', () => {
    Cadastro.visit()
})

When('o usuário preenche todos os campos obrigatórios com {string}',(type) => {
    let name;
    let email;
    let password;
    switch (type) {
        case "usuário , e-mail e senha válidos":
            name = faker.name.firstName();
            email = validEmail;
            password = validPassword;
            Cadastro.fillRegisterForm(name, email, password)
            break;
    
        default:
            break;
    }
    Cadastro.clickRegister()
})

Then('o sistema deve exibir uma mensagem de sucesso e realizar login automaticamente', () => {
    Login.shouldLogin()
})