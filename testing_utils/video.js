const { chromium } = require('playwright');

    (async () => {
        const browser = await chromium.launch({headless:false, slowMo: 100});
        // create a browser context with a location for recording
        const context = await browser.newContext({
            recordVideo: {
                dir:'./recordings'
            }
        })

        // create page within context
        const page = await context.newPage();
        
        // record and navigate to page
        await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
        // click button to generate animation
        await page.click('button')

        // this waits for selector loading to be hidden before closing browser
        await page.waitForSelector('#loading', {state: 'hidden'})


        await browser.close();
    })()