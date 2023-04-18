const { chromium } = require('playwright');

    (async () => {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('http://applitools.com');

        // take a screenshot of viewport 
        await page.screenshot({path: './screenshot.png'})

        // take a screenshot of a specific element
        const logo = await page.$('.logo')
        await logo.screenshot({path: './logo.png'})

        // take screenshot of a full page
        await page.screenshot({path: './fullPage.png', fullPage: true})

        await browser.close();
    })()