/* eslint-disable func-names */
/* eslint-disable no-undef */
const path = require('path');

module.exports = function () {
  this.Given(/^que o administrador esteja na tela de adicionar notícias$/, () => helpers.loadPage(page.noticia.url));

  this.When(/^o administrador preencher o campo Título da notícia com "([^"]*)"$/, (title) => page.noticia.fillTitle(title));

  this.When(/^o campo Título reduzido com "([^"]*)"$/, (briefTitle) => page.noticia.fillBriefTitle(briefTitle));

  this.When(/^o campo Breve descrição com "([^"]*)"$/, (description) => page.noticia.fillDescription(description));

  this.When(/^o campo Imagem com "([^"]*)"$/, (image) => {
    const newImage = path.join(__dirname, '..', 'images', image);

    return page.noticia.fillImage(newImage);
  });

  this.When(/^o campo Notícia com "([^"]*)"$/, (text) => page.noticia.fillText(text));

  this.When(/^clicar no botão Visualizar notícia$/, () => page.noticia.clickView());

  this.Then(/^o administrador deve pré-visualizar a Imagem "([^"]*)"$/, (imageMatch) => page.visualizarNoticia.previewImage(imageMatch));

  this.Then(/^o Título "([^"]*)"$/, (titleMatch) => page.visualizarNoticia.previewTitle(titleMatch));

  this.Then(/^a Breve descrição "([^"]*)"$/, (descriptionMatch) => page.visualizarNoticia.previewDescription(descriptionMatch));

  this.Then(/^o Texto da notícia "([^"]*)"$/, (textMatch) => page.visualizarNoticia.previewText(textMatch));

  this.Then(/^o Título reduzido "([^"]*)"$/, (briefTitleMatch) => page.visualizarNoticia.previewBriefTitle(briefTitleMatch));

  this.When(/^o administrador clicar no botão Adicionar Notícia$/, () => page.visualizarNoticia.clickAdd());

  this.Then(/^o administrador deve ver a Imagem "([^"]*)" na notícia na home$/, (imageMatch) => page.home.checkImage(imageMatch));

  this.Then(/^a Breve descrição "([^"]*)" na notícia na home$/, (briefTitleMatch) => page.home.checkBriefTitle(briefTitleMatch));

  this.Then(/^a Descrição "([^"]*)" na notícia na home$/, (descriptionMatch) => page.home.checkDescription(descriptionMatch));

  this.Then(/^o administrador deve permanecer na tela de adicionar notícia$/, () => page.noticia.checkURL());
};
