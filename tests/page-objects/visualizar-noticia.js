/* eslint-disable no-undef */
module.exports = {

  url: 'https://orquestra-frontend-staging.herokuapp.com/view-news',
  // url: 'http://localhost:3000/view-news',

  elements: {
    image: by.css('#view-news > div > div.container-view > div > img'),
    title: by.css('#view-news > div > div.container-view > div > div > p.view-news-title'),
    description: by.css('#view-news > div > div.container-view > div > div > p.view-news-description'),
    text: by.css('#view-news > div > div.container-view > div > div > p.view-news-text'),
    briefTitle: by.css('#container-card-news > p.card-news-brief-title'),
    date: by.css('#container-card-news > p.card-news-date'),
    add: by.css('#view-news > div > div.container-view-card > div > div.container-buttons > button:nth-child(1)'),
    edit: by.css('#view-news > div > div.container-view-card > div > div.container-buttons > button:nth-child(2)'),
  },

  previewImage(imageMatch) {
    const selector = page.visualizarNoticia.elements.image;

    driver.wait(until.elementLocated(selector), 50000);

    const { length } = imageMatch;

    return driver.findElement(selector).getAttribute('src').then((image) => {
      newImage = image.slice(0, length);
      expect(newImage).to.equal(imageMatch);
    });
  },

  previewTitle(titleMatch) {
    const selector = page.visualizarNoticia.elements.title;

    return driver.findElement(selector).getText().then((title) => {
      expect(title).to.equal(titleMatch);
    });
  },

  previewDescription(descriptionMatch) {
    const selector = page.visualizarNoticia.elements.description;

    return driver.findElement(selector).getText().then((description) => {
      expect(description).to.equal(descriptionMatch);
    });
  },

  previewText(textMatch) {
    const selector = page.visualizarNoticia.elements.text;

    return driver.findElement(selector).getText().then((text) => {
      expect(text).to.equal(textMatch);
    });
  },

  previewBriefTitle(briefTitleMatch) {
    const selector = page.visualizarNoticia.elements.briefTitle;

    return driver.findElement(selector).getText().then((briefTitle) => {
      expect(briefTitle).to.equal(briefTitleMatch);
    });
  },

  clickAdd() {
    const selector = page.visualizarNoticia.elements.add;

    driver.wait(until.elementLocated(selector), 50000);

    driver.sleep(1000);

    return driver.findElement(selector).click();
  },
};
