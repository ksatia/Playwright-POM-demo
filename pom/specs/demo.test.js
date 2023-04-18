const {chromium} = require ('playwright');
const HomePage = require('../models/Home.page');
const LoginPage = require('../models/Login.page');

describe ('Applitools demo page test', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage = null;
    let loginPage = null;

    beforeAll(async () => {
        browser = await chromium.launch({headless: false, slowMo:300});
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    })

    afterAll(async () => {
        await context.close();
        await browser.close();
    })

    it('should log in', async () => {
        await loginPage.login('username', 'password');
        expect(await page.title()).not.toBeNull();
    })

    it('should be logged in as Jack Gomez', async () => {
        expect(await homePage.getUserName()).toBe('Jack Gomez')
    })

    it('should have total balance of $350', async () => {
        expect (await homePage.getBalance('total')).toBe('$350')
    })

    it('should have a remaining credit of $17,800', async () => {
        expect (await homePage.getBalance('credit')).toBe('$17,800')
    })

    it('should have a balance due of $180', async () => {
        expect (await homePage.getBalance('due')).toBe('$180')
    })
})