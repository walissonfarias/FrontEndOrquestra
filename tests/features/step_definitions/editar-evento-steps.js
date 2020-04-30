const { Given, When, Then } = require('cucumber');
const { driver } = require('../support/web_driver');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

When("o administrador clicar no ícone de Editar Evento no último evento adicionado", async function () {
    const selector = By.css('#container-card-events > div > div.icons > img:nth-child(1)');

    await driver.wait(until.elementLocated(selector), 30000);
    await driver.sleep(5000);

    await driver.findElement(selector).click();

    await driver.wait(until.urlIs('https://orquestra-frontend-staging.herokuapp.com/add-events'), 30000);
});

Given("preencher o campo Nome do evento com {string}", async function (name) {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div:nth-child(1) > div > div > input');

    await driver.findElement(selector).clear();
    await driver.findElement(selector).sendKeys(name);
});

Then("o Evento deve ser editado na tela {string} com o nome {string}", async function (url, nameMatch) {
    const selector = By.css('#container-card-events > main > div.header > p');

    await driver.sleep(1000);
    await driver.wait(until.urlIs(url), 30000);
    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).getText().then((name) => {
        expect(name).to.equal(nameMatch);
    });
});

Given("remover os valores dos campos do evento", async function () {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div:nth-child(1) > div > div > input');
    
    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).clear();
});