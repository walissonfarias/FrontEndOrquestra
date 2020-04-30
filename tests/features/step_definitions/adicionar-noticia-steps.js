const { Given, When, Then } = require('cucumber');
const { driver } = require('../support/web_driver');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const path = require('path');

Given("que o administrador esteja na tela {string}", async function (url) {
    await driver.get(url).then(() => {
        driver.wait(until.elementLocated(By.css('body')), 30000);
    });
});

When("o administrador preencher o campo Título da notícia com {string}", async function (title) {
    const selector = By.css('#news > div > div.container-add-news > form > div.container-form > div:nth-child(1) > div > div > input');

    await driver.findElement(selector).sendKeys(title);

});

When("o campo Título reduzido com {string}", async function (briefTitle) {
    const selector = By.css('#news > div > div.container-add-news > form > div.container-form > div:nth-child(2) > div > div > input');

    await driver.findElement(selector).sendKeys(briefTitle);
});

When("o campo Breve descrição com {string}", async function (description) {
    const selector = By.css('#news > div > div.container-add-news > form > div.container-form > div:nth-child(3) > div > div > input');

    await driver.findElement(selector).sendKeys(description);
});

When("o campo Imagem com {string}", async function (image) {
    const selector = By.css('#news > div > div.container-add-news > form > div.container-form > div:nth-child(4) > div > input[type=file]');

    const newImage = path.join(__dirname, '..', 'images', image);

    await driver.findElement(selector).sendKeys(newImage);

    await driver.sleep(1000);
});

When("clicar no botão PRÓXIMO", async function () {
    const selector = By.css('#news > div > div.container-add-news > form > div.container-buttons > button:nth-child(2)');

    await driver.findElement(selector).click();
});

When("preencher o campo Notícia com {string}", async function (text) {
    const selector = By.css('#news > div > div.container-add-news > form > div.container-form > div > div > div > textarea');

    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).sendKeys(text);
});

When("clicar no botão VISUALIZAR", async function () {
    const selector = By.css('#news > div > div.container-add-news > form > div.container-buttons > button:nth-child(2) > span.MuiButton-label');

    await driver.findElement(selector).click();
});

Then("o administrador deve pré-visualizar a Notícia", async function () {
    const selector = By.css('#view-news > div > div.container-view');

    await driver.wait(until.elementLocated(selector), 30000);
});

Then("o card da Notícia", async function () {
    const selector = By.css('#view-news > div > div.container-view-card');

    await driver.wait(until.elementLocated(selector), 30000);
});

When("o administrador clicar no botão ADICIONAR NOTÍCIA", async function () {
    const selector = By.css('#view-news > div > div.container-view-card > div > div.container-buttons > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained');

    await driver.findElement(selector).click();
});

Then("a Notícia deve ser publicada na tela {string} com o título reduzido {string}", async function (url, briefTitleMatch) {
    const selector = By.css('#container-card-news > p.card-news-brief-title');

    await driver.wait(until.urlIs(url), 30000);
    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).getText().then((briefTitle) => {
        expect(briefTitle).to.equal(briefTitleMatch);
    });
});

Then("deve aparecer um pop-up com o texto {string}", async function (textMatch) {
    const selector = By.css('#client-snackbar');

    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).getText().then((text) => {
        expect(text).to.equal(textMatch);
    });
});