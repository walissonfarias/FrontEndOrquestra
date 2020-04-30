# language: pt
Funcionalidade: Editar Notícia
Para alterar uma notícia publicada 
Eu como administrador 
Gostaria de entrar no sistema web visualizar a notícia e editar essa notícia. 

  Contexto: 
    Dado que o administrador esteja na tela "https://orquestra-frontend-staging.herokuapp.com"
    Quando o administrador clicar no ícone de Editar Notícia na última notícia adicionada

  # Cenário: Notícia é editada com sucesso
  #   E preencher o campo Título reduzido com "Novo título reduzido"
  #   E clicar no botão PRÓXIMO
  #   E clicar no botão VISUALIZAR
  #   Quando o administrador clicar no botão ATUALIZAR NOTÍCIA
  #   Então a Notícia deve ser editada na tela "https://orquestra-frontend-staging.herokuapp.com/" com o título reduzido "NOVO TÍTULO REDUZIDO"

  Cenário: Notícia não é editada por conta de campos não preenchidos
    E remover os valores dos campos da notícia
    E clicar no botão PRÓXIMO
    Então deve aparecer um pop-up com o texto "Preencha o Título da notícia"