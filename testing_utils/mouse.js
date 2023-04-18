const { chromium } = require('playwright');

    (async () => {
        const browser = await chromium.launch({headless:false, slowMo: 100});
        const page = await browser.newPage();
        await page.goto('https://paint.js.org/');
        // get into the canvas
        await page.mouse.move(200, 200)
        await page.mouse.down()
        await page.mouse.move(400,200)
        await page.mouse.move(400, 400)
        await page.mouse.move(200, 400)
        await page.mouse.move(200, 200)
        await page.mouse.up()
const { chromium } = require('playwright');

    (async () => {
        const browser = await chromium.launch({headless:false, slowMo: 100});
        const page = await browser.newPage();
        await page.goto('http://google.com');
        await browser.close();
    })()
        await browser.close();
    })()