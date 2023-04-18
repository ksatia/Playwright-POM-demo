const { chromium } = require('playwright');

    (async () => {
        const browser = await chromium.launch({headless:false, slowMo: 100});
        const page = await browser.newPage();
        await page.goto('https://the-internet.herokuapp.com/key_presses');

        await page.click('input')
        await page.keyboard.type('better yourself by taking time to look inwards')
        await page.keyboard.down('Shift')
        for (let key in 'inwards') {
            await page.keyboard.press('ArrowLeft')
        }
        await page.keyboard.up('Shift')
        await page.keyboard.press('Backspace')
        await page.keyboard.type('at your surroundings')
        await browser.close();
    })()