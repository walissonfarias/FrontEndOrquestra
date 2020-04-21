/* eslint-disable func-names */
/* eslint-disable no-undef */
module.exports = function () {
  this.When(/^o administrador clicar no ícone de remover notícia na última notícia adicionada$/, () => page.home.clickRemove());

  this.When(/^clicar no botão Deletar$/, () => page.home.clickDelete());

  this.Then(/^o administrador deve visualizar uma notícia a menos na home$/, () => page.home.checkNewsSize(1));

  this.When(/^clicar no botão Cancelar$/, () => page.home.clickCancel());

  this.Then(/^o administrador deve visualizar o mesmo número de notícias que antes$/, () => page.home.checkNewsSize(0));
};
