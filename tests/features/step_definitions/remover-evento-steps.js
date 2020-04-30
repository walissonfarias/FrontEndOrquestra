const { Given, When, Then } = require('cucumber');
const { driver } = require('../support/web_driver');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

var nameMatch;

When("o administrador clicar no ícone de Remover Evento no último evento adicionado", async function () {
    const selector = By.css('#container-card-events > div > div.icons > img:nth-child(2)');

    await driver.wait(until.elementLocated(selector), 30000);
    await driver.sleep(10000);

    await driver.findElement(selector).click();

    const _selector = By.css('#container-card-events > main > div.header > p');

    await driver.findElement(_selector).getText().then((name) => {
        nameMatch = name;
    });

    const __selector = By.css('#modal > div');

    await driver.wait(until.elementLocated(__selector), 30000); 
});

Given("clicar no botão de evento DELETAR", async function () {
    const selector = By.css('#modal > div > div.container-buttons > button.delete');

    await driver.findElement(selector).click();

    await driver.sleep(1000);
});

Then("o administrador não deve mais visualizar o evento na Home", async function () {
    await driver.get('https://orquestra-frontend-staging.herokuapp.com/').then(() => {
        driver.wait(until.elementLocated(By.css('body')), 30000);
    });

    const selector = By.css('#container-card-events > main > div.header > p');

    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).getText().then((name) => {
        expect(name).to.not.equal(nameMatch);
    });
});

Given("clicar no botão de evento Cancelar", async function () {
    const selector = By.css('#modal > div > div.container-buttons > button:nth-child(1)');

    await driver.findElement(selector).click();
});

Then("o administrador deve continuar visualizando o evento na Home", async function () {
    const selector = By.css('#container-card-events > main > div.header > p');

    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).getText().then((name) => {
        expect(name).to.equal(nameMatch);
    });
});