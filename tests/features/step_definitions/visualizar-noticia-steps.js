const { Given, When, Then } = require('cucumber');
const { driver } = require('../support/web_driver');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Then("o administrador deve poder visualizar o card das notícias cadastradas no sistema", async function () {
    const selector = By.css('#home > div:nth-child(2) > div.container-cards > div:nth-child(1)');

    await driver.wait(until.elementLocated(selector), 30000);
});