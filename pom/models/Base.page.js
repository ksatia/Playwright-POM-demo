class BasePage {
    // initialize BasePage with a page object
    constructor (page) {
        this.page = page
    }

    async navigate(path) {
        // use a path so that we have a base URL and can pass in a path in our specs
        await this.page.goto(`https://demo.applitools.com/${path}`)
    }
}

module.exports = BasePage