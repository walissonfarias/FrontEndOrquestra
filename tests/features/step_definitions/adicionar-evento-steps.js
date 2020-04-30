const { Given, When, Then } = require('cucumber');
const { driver } = require('../support/web_driver');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

When("o administrador preencher o campo Nome do evento com {string}", async function (name) {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div:nth-child(1) > div > div > input');

    await driver.findElement(selector).sendKeys(name);
});

When("o campo Local com {string}", async function (local) {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div:nth-child(2) > div > div > input');

    await driver.findElement(selector).sendKeys(local);
});

When("o campo Endereço com {string}", async function (address) {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div:nth-child(3) > div > div > input');

    await driver.findElement(selector).sendKeys(address);
});

When("o campo Latitude com {int}", async function (lat) {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div:nth-child(4) > div:nth-child(1) > div > input');

    await driver.findElement(selector).clear();
    await driver.findElement(selector).sendKeys(lat);
});

When("o campo Longitude com {int}", async function (long) {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div:nth-child(4) > div:nth-child(2) > div > input');

    await driver.findElement(selector).clear();
    await driver.findElement(selector).sendKeys(long);
});

When("clicar no botão de evento PRÓXIMO", async function () {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-buttons > button:nth-child(2)');

    await driver.findElement(selector).click();
});

When("preencher o campo Classificação com Livre", async function () {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div > div:nth-child(1) > div.MuiFormControl-root.input > div > div');

    await driver.findElement(selector).click();

    const _selector = By.css('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(1)');

    await driver.wait(until.elementLocated(_selector), 30000);

    await driver.findElement(_selector).click();
});

When("o campo Data com uma data muito antiga", async function () {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div > div:nth-child(2) > div:nth-child(1) > div');

    await driver.findElement(selector).click();

    const _selector = By.css('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root.MuiPickersModal-dialog > div > div.MuiToolbar-root.MuiToolbar-regular.MuiPickersToolbar-toolbar.MuiPickersDatePickerRoot-toolbar.MuiToolbar-gutters > button:nth-child(1)');

    await driver.wait(until.elementLocated(_selector), 30000);

    await driver.findElement(_selector).click();

    const __selector = By.css('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root.MuiPickersModal-dialog > div > div.MuiPickersBasePicker-pickerView > div > div:nth-child(1)');

    await driver.wait(until.elementLocated(__selector), 30000);

    await driver.findElement(__selector).click();

    const ___selector = By.css('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button:nth-child(2)');

    await driver.wait(until.elementLocated(___selector), 30000);

    await driver.findElement(___selector).click();
});

When("o campo Duração com {int}", async function (duration) {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div > div:nth-child(2) > div:nth-child(2) > div > input');

    await driver.findElement(selector).sendKeys(duration);
});

When("o campo Horário de início com o horário atual", async function () {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div > div:nth-child(3) > div:nth-child(1) > div');

    await driver.findElement(selector).click();

    const _selector = By.css('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button:nth-child(2)');

    await driver.wait(until.elementLocated(_selector), 30000);
    
    await driver.findElement(_selector).click();
});

When("o campo Horário de término com o horário atual", async function () {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div > div:nth-child(3) > div:nth-child(2) > div');

    await driver.findElement(selector).click();

    const _selector = By.css('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button:nth-child(2)');

    await driver.findElement(_selector).click();
});

When("clicar no botão de evento PRÓXIMO denovo", async function () {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-buttons > button:nth-child(2) > span.MuiButton-label');

    await driver.findElement(selector).click();
});

When("preencher o campo Descrição com {string}", async function (description) {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-form > div > div > div > textarea');

    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).sendKeys(description);
});

When("clicar no botão de evento VISUALIZAR", async function () {
    const selector = By.css('#events > div > div.container-add-events > form > div.container-buttons > button:nth-child(2)');

    await driver.findElement(selector).click();
});

Then("o administrador deve pré-visualizar o Evento", async function () {
    const selector = By.css('#view-events > div > div.container-view');

    await driver.wait(until.elementLocated(selector), 30000);
});

Then("o card do Evento", async function () {
    const selector = By.css('#view-events > div > div.container-view-card');

    await driver.wait(until.elementLocated(selector), 30000);
});

When("o administrador clicar no botão ADICIONAR EVENTO", async function () {
    const selector = By.css('#view-events > div > div.container-view-card > div > div.container-buttons > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained');
    
    await driver.findElement(selector).click();
});

Then("o Evento deve ser publicado na tela {string} com o nome {string}", async function (url, nameMatch) {
    const selector = By.css('#container-card-events > main > div.header > p');

    await driver.wait(until.urlIs(url), 30000);
    await driver.wait(until.elementLocated(selector), 30000);

    await driver.findElement(selector).getText().then((name) => {
        expect(name).to.equal(nameMatch);
    });
});

Then("deve aparecer um pop-up de evento com o texto {string}", async function (textMatch) {
    const selector = By.css('#client-snackbar');

    await driver.findElement(selector).getText().then((text) => {
        expect(text).to.equal(textMatch);
    });
});