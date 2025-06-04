# language: pt

Funcionalidade: Login e Logout

Cenário: CT001: Login com sucesso
  Dado que o usuário está na página de login
  Quando o usuário insere um nome de usuário válido
  E o usuário insere uma senha válida
  E o usuário clica no botão de login
  Então o sistema deve exibir o texto de sucesso "Login realizado"

Cenário: CT002: Realizar logout pela bandeja de usuário
  Dado que o usuário está logado
  Quando o usuário passa o mouse no nome de usuário
  E o usuário clica no botão de logout
  Então o sistema deve exibir o texto de sucesso "Logout realizado"