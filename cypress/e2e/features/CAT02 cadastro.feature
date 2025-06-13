# language: pt

Funcionalidade: Cadastro de usuário

Cenário: CT001 - Cadastro com sucesso
    Dado que o usuário está na página de cadastro
    Quando o usuário preenche todos os campos obrigatórios com "usuário , e-mail e senha válidos"
    Então o sistema deve exibir uma mensagem de sucesso e realizar login automaticamente