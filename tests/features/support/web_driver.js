require('chromedriver');
require('geckodriver');
//require('iedriver'); //add this package if you want to use it.
const webDriver = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

//create WebDriver instance based on your browser config;
function createDriver() {
    let browserConfig = process.env.BROWSER || 'firefox';
    let browser = browserConfig.toLowerCase();
    if (['chrome', 'firefox', 'ie'].indexOf(browser) < 0) browser = 'firefox';
    // const binary = new firefox.Binary(firefox.Channel.RELEASE);
    // binary.addArguments('-headless');
    const options = new firefox.Options();
    options.addArguments('-headless');
    return new webDriver.Builder()
        .forBrowser(browser)
        .setFirefoxOptions(options)
        .build();   
}

exports.driver = createDriver();