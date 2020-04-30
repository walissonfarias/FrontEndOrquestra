const { Given, When, Then } = require('cucumber');
const { driver } = require('../support/web_driver');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

When("o administrador clicar no ícone de Editar Notícia na última notícia adicionada", async function () {
    const selector = By.css('#container-card-news > div > div > img:nth-child(1)');

    await driver.wait(until.elementLocated(selector), 30000);
    await driver.sleep(5000);

    await driver.findElement(selector).click();

    await driver.wait(until.urlIs('https://orquestra-frontend-staging.herokuapp.com/add-news'), 30000);
});

When("preencher o campo Título reduzido com {string}", async function (briefTitle) {
    const selector = By.css('#news > div > div.container-add-news > form > div.container-form > div:nth-child(2) > div > div > input');

    await driver.findElement(selector).clear();
    await driver.findElement(selector).sendKeys(briefTitle);
});

When("o administrador clicar no botão ATUALIZAR NOTÍCIA", async function () {
    const selector = By.css('#view-news > div > div.container-view-card > div > div.container-buttons > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained');

    await driver.findElement(selector).click();
});

Then("a Notícia deve ser editada na tela {string} com o título reduzido {string}", async function (url, briefTitleMatch) {
    const selector = By.css('#container-card-news > p.card-news-brief-title');

    await driver.sleep(1000);
    await driver.wait(until.urlIs(url), 30000);
    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).getText().then((briefTitle) => {
        expect(briefTitle).to.equal(briefTitleMatch);
    });
});

Given("remover os valores dos campos da notícia", async function () {
    const selector = By.css('#news > div > div.container-add-news > form > div.container-form > div:nth-child(1) > div > div > input');

    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).clear();
});