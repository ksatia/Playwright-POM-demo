const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = await page.$('#dropdown')
    // use value
    await dropdown.selectOption({ value: '1' })
    // use label
    await dropdown.selectOption({ label: 'Option 2' })
    // use index
    await dropdown.selectOption({ index: 1 })

    // grab values using "option" html element
    const availableOptions = await dropdown.$$('option')
    for (values in availableOptions) {
        console.log(await availableOptions[values].innerText())
    }
    await browser.close();
})()