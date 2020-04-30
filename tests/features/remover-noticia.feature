# language: pt
Funcionalidade: Remover Notícia
Para retirar uma notícia que já foi publicada no aplicativo por engano ou erro 
Eu como administrador 
Gostaria de entrar no sistema web para remover essa notícia.

  Contexto: 
    Dado que o administrador esteja na tela "https://orquestra-frontend-staging.herokuapp.com/"
    Quando o administrador clicar no ícone de Remover Notícia na última notícia adicionada

  Cenario: Notícia é removida com sucesso
    E clicar no botão DELETAR
    Então o administrador não deve mais visualizar a notícia na Home

  Cenário: Remoção da notícia é cancelada
    E clicar no botão Cancelar
    Então o administrador deve continuar visualizando a notícia na Home