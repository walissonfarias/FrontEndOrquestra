/* eslint-disable no-undef */
module.exports = {

  url: 'https://orquestra-frontend-staging.herokuapp.com/add-news',
  // url: 'http://localhost:3000/add-news',

  elements: {
    title: by.css('#news > div > form > input[type=text]'),
    briefTitle: by.css('#news > div > form > div > div.content-divider-text > input[type=text]:nth-child(1)'),
    description: by.css('#news > div > form > div > div.content-divider-text > input[type=text]:nth-child(2)'),
    image: by.css('#news > div > form > div > div.content-divider-file > input[type=file]'),
    text: by.css('#news > div > form > textarea'),
    view: by.css('#news > div > form > button'),
  },

  fillTitle(title) {
    const selector = page.noticia.elements.title;

    return driver.findElement(selector).sendKeys(title);
  },

  fillBriefTitle(briefTitle) {
    const selector = page.noticia.elements.briefTitle;

    return driver.findElement(selector).sendKeys(briefTitle);
  },

  fillDescription(description) {
    const selector = page.noticia.elements.description;

    return driver.findElement(selector).sendKeys(description);
  },

  fillImage(image) {
    const selector = page.noticia.elements.image;

    return driver.findElement(selector).sendKeys(image);
  },

  fillText(text) {
    driver.sleep(1000);
    const selector = page.noticia.elements.text;

    return driver.findElement(selector).sendKeys(text);
  },

  clickView() {
    const selector = page.noticia.elements.view;

    return driver.findElement(selector).click();
  },

  checkURL() {
    return driver.getCurrentUrl().then((url) => {
      expect(url).to.equal(page.noticia.url);
    });
  },
};
