const { webkit } = require('playwright');

(async () => {
    const browser = await webkit.launch({ headless: false, slowMo: 300 });
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');
    // click button for alert, but add event listener for the dialog popup
    // page.once('dialog', async dialog => {
    //     console.log(dialog.message())
    //     await dialog.accept()
    // })
    // await page.click('#confirmButton')
    
    page.once('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.accept('sample text')
    })

    await page.click('#promptButton')

    await browser.close();
})()