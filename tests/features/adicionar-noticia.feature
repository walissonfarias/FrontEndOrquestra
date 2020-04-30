# language: pt
Funcionalidade: Adicionar notícia
Para publicar novas notícias
Eu como administrador
Gostaria de entrar no sistema para preencher os dados da notícia e publicar.

  Contexto: 
    Dado que o administrador esteja na tela "https://orquestra-frontend-staging.herokuapp.com/add-news"

  Cenario: Notícia é cadastrada com sucesso
    Quando o administrador preencher o campo Título da notícia com "Título do teste"
    E o campo Título reduzido com "Título reduzido do teste"
    E o campo Breve descrição com "Breve descrição do teste"
    E o campo Imagem com "black-hole.jpg"
    E clicar no botão PRÓXIMO
    E preencher o campo Notícia com "Conteúdo do teste"
    E clicar no botão VISUALIZAR
    Então o administrador deve pré-visualizar a Notícia
    E o card da Notícia
    Quando o administrador clicar no botão ADICIONAR NOTÍCIA
    Então a Notícia deve ser publicada na tela "https://orquestra-frontend-staging.herokuapp.com/" com o título reduzido "TÍTULO REDUZIDO DO TESTE"

  Cenário: Notícia não é cadastrada por conta de campos não preenchidos
    Quando clicar no botão PRÓXIMO
    Então deve aparecer um pop-up com o texto "Preencha o Título da notícia"