const { webkit } = require('playwright');

    (async () => {
        const browser = await webkit.launch({headless:false, slowMo: 100});
        const page = await browser.newPage();
        await page.goto('https://demoqa.com/frames');
        // get iframe contents
        const frame1 = await page.frame({url: /\/sample/})
        const heading1 = await frame1.$('h1')
        console.log(await heading1.innerText())
        await browser.close();
    })()