# language: pt
Funcionalidade: Editar Evento
Para alterar um evento publicado 
Eu como administrador 
Gostaria de entrar no sistema web, visualizar e editar esse evento.

  Contexto: 
    Dado que o administrador esteja na tela "https://orquestra-frontend-staging.herokuapp.com"
    Quando o administrador clicar no ícone de Editar Evento no último evento adicionado

  Cenário: Evento é editado com sucesso
    E preencher o campo Nome do evento com "Novo nome"
    E o campo Latitude com -20
    E o campo Longitude com -43
    E clicar no botão de evento PRÓXIMO
    E o campo Horário de término com o horário atual
    E clicar no botão de evento PRÓXIMO denovo
    E clicar no botão de evento VISUALIZAR
    Quando o administrador clicar no botão ADICIONAR EVENTO
    Então o Evento deve ser editado na tela "https://orquestra-frontend-staging.herokuapp.com/" com o nome "Novo nome"

  Cenário: Evento não é editado por conta de campos não preenchidos
    E remover os valores dos campos do evento
    E clicar no botão de evento PRÓXIMO
    Então deve aparecer um pop-up com o texto "Preencha o Nome do evento"