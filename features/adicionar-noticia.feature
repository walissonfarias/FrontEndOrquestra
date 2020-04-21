# language:pt

Funcionalidade: Adicionar notícia
  Para publicar novas notícias
  Eu como administrador
  Gostaria de entrar no sistema para cadastrar uma notícia

  Contexto:
    Dado que o administrador esteja na tela de adicionar notícias

  Cenário: Adicionar notícia com sucesso
    Quando o administrador preencher o campo Título da notícia com "Title"
    E o campo Título reduzido com "briefTitle"
    E o campo Breve descrição com "description"
    E o campo Imagem com "black-hole.jpg"
    E o campo Notícia com "testando a aplicação"
    E clicar no botão Visualizar notícia
    Então o administrador deve pré-visualizar a Imagem "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wCEAAMBAQ"
    E o Título "Title"
    E a Breve descrição "description"
    E o Texto da notícia "testando a aplicação"
    E o Título reduzido "BRIEFTITLE"
    Quando o administrador clicar no botão Adicionar Notícia 
    Então o administrador deve ver a Imagem "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wCEAAMBAQ" na notícia na home 
    E a Breve descrição "BRIEFTITLE" na notícia na home 
    E a Descrição "DESCRIPTION" na notícia na home

  Cenário: Adicionar notícia com falha (sem preencher os campos)
    Quando clicar no botão Visualizar notícia
    Então o administrador deve permanecer na tela de adicionar notícia
