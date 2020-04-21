# language:pt

Funcionalidade: Editar notícia
  Para alterar uma notícia publicada
  Eu como administrador
  Gostaria de entrar no sistema web e editar essa notícia

  Contexto: 
    Dado que o administrador esteja na home
    Quando o administrador clicar no ícone de editar notícia na última notícia adicionada

  Cenário: Editar notícia com sucesso
  E preencher o campo Imagem com "black-hole-2.jpg"
  E clicar no botão Visualizar notícia
  Então o administrador deve ver a Imagem "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAUDBA" na notícia na home 


  Cenário: Editar notícia com falha (sem preencher os campos)
    E remover todos os valores dos campos da notícia
    E clicar no botão Visualizar notícia
    Então o administrador deve permanecer na tela de adicionar notícia
    