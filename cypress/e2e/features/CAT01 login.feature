# language: pt
Funcionalidade: Login e Logout

  Cenário: CT001: Login com sucesso
    Dado que o usuário está na página de login
    Quando o usuário tenta realizar login com "usuário e senha válidos"
    Então o sistema deve exibir o texto de sucesso "Login realizado"

  Cenário: CT002: Realizar logout pela bandeja de usuário
    Dado que o usuário está logado
    Quando o usuário passa o mouse no nome de usuário
    E o usuário clica no botão de logout
    Então o sistema deve exibir o texto de sucesso "Logout realizado"

  Cenário: CT003: Login com usuário não cadastrado
    Dado que o usuário está na página de login
    Quando o usuário tenta realizar login com "usuário não cadastrado"
    Então o sistema não deve permitir o login

  Cenário: CT004: Login com usuário inválido e senha válida
    Dado que o usuário está na página de login
    Quando o usuário tenta realizar login com "usuário inválido"
    Então o sistema deve exibir a mensagem de erro "E-mail inválido."
    E o sistema não deve permitir o login

  Cenário: CT005: Login com usuário válido e senha inválida
    Dado que o usuário está na página de login
    Quando o usuário tenta realizar login com "senha inválida"
    Então o sistema deve exibir a mensagem de erro "Senha inválida."
    E o sistema não deve permitir o login

  Cenário: CT006: Login com usuário válido e senha em branco
    Dado que o usuário está na página de login
    Quando o usuário tenta realizar login com "senha em branco"
    Então o sistema deve exibir a mensagem de erro "Senha inválida."
    E o sistema não deve permitir o login

  Cenário: CT007: Login com usuário em branco e senha válida
    Dado que o usuário está na página de login
    Quando o usuário tenta realizar login com "usuário em branco"
    Então o sistema deve exibir a mensagem de erro "E-mail inválido."
    E o sistema não deve permitir o login

  Cenário: CT008: Login com usuário em branco e senha em branco
    Dado que o usuário está na página de login
    Quando o usuário tenta realizar login com "usuário em branco e senha em branco"
    Então o sistema deve exibir a mensagem de erro "E-mail inválido."
    E o sistema deve exibir a mensagem de erro "Senha inválida."
    E o sistema não deve permitir o login

  Cenário: CT009: Login com tecla Enter após preencher usuário e senha
    Dado que o usuário está na página de login
    Quando o usuário tenta realizar login com "usuário e senha válidos" com a tecla Enter
    Então o sistema deve exibir o texto de sucesso "Login realizado"

  Cenário: CT010: Após logout, o usuário não deve conseguir acessar a página protegida ao clicar em "voltar" no navegador
    Dado que o usuário está logado
    Quando o usuário realiza logout
    E o usuário clica no botão "voltar" no navegador
    Então o sistema não deve permitir o acesso à página principal
