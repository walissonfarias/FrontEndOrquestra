# language:pt

Funcionalidade: Remover notícia
  Para retirar uma notícia que foi publicada no aplicativo por engano ou erro
  Eu como administrador
  Gostaria de entrar no sistema web para remover essa notícia do aplicativo

  Contexto:
    Dado que o administrador esteja na home
    Quando o administrador clicar no ícone de remover notícia na última notícia adicionada

    Cenário: Remover notícia com sucesso
      E clicar no botão Deletar
      Então o administrador deve visualizar uma notícia a menos na home

    Cenário: Cancelar a remoção de uma notícia
      E clicar no botão Cancelar
      Então o administrador deve visualizar o mesmo número de notícias que antes
