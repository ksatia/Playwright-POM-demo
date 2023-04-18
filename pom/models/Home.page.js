const BasePage = require('./Base.page');

class HomePage extends BasePage {
    constructor(page) {
        super(page);

        // locators to validate name and balances
        this.name = '.logged-user-name';
        this.balances = '.balance-value';
    }

    async getUserName() {
        let user = await this.page.$(this.name);
        return (await user.innerText());
    }

    async getBalance(balanceType) {
        let balArray = await this.page.$$(this.balances);
        console.log(balArray);
        if (balanceType === 'total') {
            return (await balArray[0].$('span')).innerText();
        } else if (balanceType === 'credit') {
            return (await balArray[1]).innerText();
        } else if (balanceType === 'due') {
            return (await balArray[2]).innerText();
        }
    }

    async navigate() {
        await super.navigate('app.html');
    }
}

module.exports = HomePage;