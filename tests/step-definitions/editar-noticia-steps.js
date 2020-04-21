/* eslint-disable func-names */
/* eslint-disable no-undef */
const path = require('path');

module.exports = function () {
  this.Given(/^que o administrador esteja na home$/, () => helpers.loadPage(page.home.url));

  this.When(/^o administrador clicar no ícone de editar notícia na última notícia adicionada$/, () => page.home.clickEdit());

  this.When(/^preencher o campo Imagem com "([^"]*)"$/, (image) => {
    const newImage = path.join(__dirname, '..', 'images', image);
    driver.sleep(1000);

    return page.noticia.fillImage(newImage);
  });

  this.When(/^remover todos os valores dos campos da notícia$/, () => {
    driver.sleep(1000);

    helpers.clearStorages();

    return helpers.loadPage(page.noticia.url);
  });
};
