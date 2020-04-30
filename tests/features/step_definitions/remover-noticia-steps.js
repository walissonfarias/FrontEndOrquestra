const { Given, When, Then } = require('cucumber');
const { driver } = require('../support/web_driver');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

var briefTitleMatch;

When("o administrador clicar no ícone de Remover Notícia na última notícia adicionada", async function () {
    const _selector = By.css('#container-card-news > p.card-news-brief-title');

    await driver.wait(until.elementLocated(_selector), 30000);

    await driver.findElement(_selector).getText().then((briefTitle) => {
        briefTitleMatch = briefTitle;
    });
    
    const selector = By.css('#container-card-news > div > div > img:nth-child(2)');

    await driver.wait(until.elementLocated(selector), 30000);
    await driver.sleep(10000);

    await driver.findElement(selector).click();

    const __selector = By.css('#modal > div');

    await driver.wait(until.elementLocated(__selector), 30000);
});

Given("clicar no botão DELETAR", async function () {
    const selector = By.css('#modal > div > div.container-buttons > button.delete');

    await driver.wait(until.elementLocated(selector), 30000);
    await driver.sleep(5000);

    await driver.findElement(selector).click();
    
    await driver.wait(until.urlIs('https://orquestra-frontend-staging.herokuapp.com/'), 30000);
});

Then("o administrador não deve mais visualizar a notícia na Home", async function () {
    await driver.get('https://orquestra-frontend-staging.herokuapp.com/').then(() => {
        driver.wait(until.elementLocated(By.css('body')), 30000);
    });
    
    const selector = By.css('#container-card-news > p.card-news-brief-title');

    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).getText().then((briefTitle) => {
        expect(briefTitle).to.not.equal(briefTitleMatch);
    });
});

Given("clicar no botão Cancelar", async function () {
    const selector = By.css('#modal > div > div.container-buttons > button:nth-child(1)');

    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).click();
});

Then("o administrador deve continuar visualizando a notícia na Home", async function () {
    const selector = By.css('#container-card-news > p.card-news-brief-title');

    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).getText().then((briefTitle) => {
        expect(briefTitle).to.equal(briefTitleMatch);
    });
});