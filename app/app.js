const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage();
    await page.goto('https://google.com'); // 表示したいURL

    /*（何か処理）*/
    await page.screenshot({path: `screenshot/puppeteer_${(new Date()).getTime()}.png`});

    browser.close();
})();

