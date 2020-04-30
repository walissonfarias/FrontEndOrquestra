# language: pt
Funcionalidade: Adicionar evento
Para publicar os próximos eventos organizados pela orquestra no aplicativo 
Eu como administrador 
Gostaria de entrar no sistema para cadastrar um novo evento.

  Contexto: 
    Dado que o administrador esteja na tela "https://orquestra-frontend-staging.herokuapp.com/add-events"

  Cenario: Evento é cadastrada com sucesso
    Quando o administrador preencher o campo Nome do evento com "Nome do teste"
    E o campo Local com "Local do teste"
    E o campo Endereço com "Endereço do teste"
    E o campo Latitude com -20
    E o campo Longitude com -43
    E clicar no botão de evento PRÓXIMO
    E o campo Data com uma data muito antiga
    E preencher o campo Classificação com Livre
    E o campo Duração com 60
    E o campo Horário de início com o horário atual
    E o campo Horário de término com o horário atual
    E clicar no botão de evento PRÓXIMO denovo
    E preencher o campo Descrição com "Descrição do teste"
    E clicar no botão de evento VISUALIZAR
    Então o administrador deve pré-visualizar o Evento
    E o card do Evento
    Quando o administrador clicar no botão ADICIONAR EVENTO
    Então o Evento deve ser publicado na tela "https://orquestra-frontend-staging.herokuapp.com/" com o nome "Nome do teste"

  Cenário: Evento não é cadastrado por conta de campos não preenchidos
    Quando clicar no botão de evento PRÓXIMO
    Então deve aparecer um pop-up de evento com o texto "Preencha o Nome do evento"