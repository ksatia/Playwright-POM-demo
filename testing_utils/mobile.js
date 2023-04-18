const { chromium, devices } = require('playwright');
const iPhone = devices['iPhone 11'];

    (async () => {
        const browser = await chromium.launch({ headless: false, slowMo: 100 });
        const context = await browser.newContext({
            ...iPhone,
            permissions: ['geolocation'],
            geolocation: { latitude: 40.6782, longitude: 73.9442 },
            locale: 'es-ES'
        })

        const page = await context.newPage()
        await page.goto('http://maps.google.com');
        await page.waitForTimeout(5000)
        await browser.close();
    })()