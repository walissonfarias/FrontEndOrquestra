# language: pt
Funcionalidade: Remover Evento
Para retirar uma publicação de um evento cancelado 
Eu como administrador 
Gostaria de entrar no sistema e remover esse evento.

  Contexto: 
    Dado que o administrador esteja na tela "https://orquestra-frontend-staging.herokuapp.com/"
    Quando o administrador clicar no ícone de Remover Evento no último evento adicionado

  Cenario: Evento é removido com sucesso
    E clicar no botão de evento DELETAR
    Então o administrador não deve mais visualizar o evento na Home

  Cenário: Remoção do evento é cancelada
    E clicar no botão de evento Cancelar
    Então o administrador deve continuar visualizando o evento na Home