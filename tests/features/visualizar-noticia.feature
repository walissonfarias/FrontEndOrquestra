# language: pt
Funcionalidade: Visualizar Notícias
Para saber quais notícias já foram publicadas. 
Eu como administrador 
Gostaria de entrar no sistema para visualizar as últimas notícias que foram cadastradas. 

  Contexto: 
    Dado que o administrador esteja na tela "https://orquestra-frontend-staging.herokuapp.com/"

  Cenario: Notícias são apresentadas na Home
    Então o administrador deve poder visualizar o card das notícias cadastradas no sistema