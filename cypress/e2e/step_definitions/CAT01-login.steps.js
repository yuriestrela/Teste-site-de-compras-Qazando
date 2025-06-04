import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {LoginPage} from "../../support/Pages/loginPage" 
import {HomePage} from "../../support/Pages/homePage"
const Home = new HomePage();
const Login = new LoginPage();

Given('que o usuário está na página de login', () => {
    Login.visit()
})

When('o usuário insere um nome de usuário válido', () =>{
    Login.inputLogin()
})

When('o usuário insere uma senha válida', () => {
    Login.inputPassword()
})

When('o usuário clica no botão de login', ()=> {
    Login.clickLogin()
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