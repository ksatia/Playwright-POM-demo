const { webkit } = require('playwright');

describe('UI tests for bookstore using playwright', () => {
    jest.setTimeout(10000)
    let browser = null
    let page = null
    let context = null
    let firstRowBooks = null

    beforeAll(async () => {
        browser = await webkit.launch({ headless: false })
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto('https://demoqa.com/books')
    })

    afterAll(async () => {
        await browser.close();
    })

    test('Should load page', async () => {
        expect(page).not.toBeNull()
        expect(await page.title()).not.toBeNull()
    })

    test('Should be able to search for eloquentJS', async () => {
        await page.fill('#searchBox', 'eloquent')
    })

    test('Should check if book image is okay', async () => {
        firstRowBooks = await page.$$('.ReactTable .rt-tr-group:nth-child(1) .rt-td')
        console.log(firstRowBooks)
        let imageURL = await firstRowBooks[0].$('img')
        expect(await imageURL.getAttribute('src')).not.toBeNull()
    })

    // test('Should check if book title is okay', async () => {
    //     let bookTitle = await firstRowBooks[1].innerText()
    //     console.log(bookTitle)
    //     expect(bookTitle).toBe('Eloquent JavaScript, Second Edition');
    // })

    test('Should check if book author is okay', async () => {
        expect(await firstRowBooks[2].innerText()).toBe('Marijn Haverbeke')
    })

    test('Should check if book publisher is okay', async () => {
        expect(await firstRowBooks[3].innerText()).toBe('No Starch Press')
    })

})