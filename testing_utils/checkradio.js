const { firefox } = require('playwright');

(async () => {
    const browser = await firefox.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

    // check second checkbox
    const checkboxes = await page.$$('#main div :nth-child(1) input[type="checkbox"]')
    await checkboxes[1].check()
    await checkboxes[0].uncheck()
    // select first radio button
    const radios = await page.$$('#main div :nth-child(1) input[type="radio"]')
    await radios[1].check()
    await radios[0].uncheck()
    // closing browser
    await browser.close();
})()