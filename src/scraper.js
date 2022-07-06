const { chromium } = require('playwright');

const getTitle = async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.screenshot({ path: 'google.png' });
    const pageTitle = await page.title();
    await browser.close();
    return pageTitle;
};

getTitle();