/* eslint-disable no-undef */
module.exports = {

  url: 'https://orquestra-frontend-staging.herokuapp.com/',
  // url: 'http://localhost:3000',

  newsSize: 0,

  elements: {
    lastNews: by.css('#home > div:nth-child(2) > div'),
    edit: by.css('#container-card-news > div > div > img:nth-child(1)'),
    remove: by.css('#container-card-news > div > div > img:nth-child(2)'),
    delete: by.css('#root > div > div > div > div > div:nth-child(4) > button.delete'),
    cancel: by.css('#root > div > div > div > div > div:nth-child(4) > button.cancel'),
    image: by.css('#container-card-news > img'),
    briefTitle: by.css('#container-card-news > p.card-news-brief-title'),
    description: by.css('#container-card-news > p.card-news-description'),
  },

  checkNews() {
  },

  clickEdit() {
    const selector = page.home.elements.edit;

    driver.wait(until.elementLocated(selector), 50000);

    driver.sleep(1000);

    return driver.findElement(selector).click();
  },

  clickRemove() {
    const selector = page.home.elements.remove;

    driver.wait(until.elementLocated(selector), 50000);

    driver.sleep(1000);

    page.home.newsSize = driver.findElement(page.home.elements.lastNews).length;

    return driver.findElement(selector).click();
  },

  clickDelete() {
    const selector = page.home.elements.delete;

    driver.wait(until.elementLocated(selector), 50000);

    return driver.findElement(selector).click();
  },

  clickCancel() {
    const selector = page.home.elements.cancel;

    driver.wait(until.elementLocated(selector), 50000);

    return driver.findElement(selector).click();
  },

  checkImage(imageMatch) {
    const selector = page.home.elements.image;

    driver.wait(until.elementLocated(selector), 50000);

    const { length } = imageMatch;

    return driver.findElement(selector).getAttribute('src').then((image) => {
      newImage = image.slice(0, length);
      expect(newImage).to.equal(imageMatch);
    });
  },

  checkBriefTitle(briefTitleMatch) {
    const selector = page.home.elements.briefTitle;

    return driver.findElement(selector).getText().then((briefTitle) => {
      expect(briefTitle).to.equal(briefTitleMatch);
    });
  },

  checkDescription(descriptionMatch) {
    const selector = page.home.elements.description;

    return driver.findElement(selector).getText().then((description) => {
      expect(description).to.equal(descriptionMatch);
    });
  },

  checkNewsSize(value) {
    const { newsSize } = page.home.elements;

    const size = driver.findElement(page.home.elements.lastNews).length;

    return expect(newsSize).to.equal(size);
  },
};
