const BasePage = require('./Base.page');

class LoginPage extends BasePage {
    // Calls parent constructor with page object so this.page refers to the same page for both of them   
    constructor(page) {
        super(page);
        // locators for login page
        this.usernameField = '#username';
        this.passwordField = '#password';
        this.loginButton = '#log-in';
    }

    async navigate () {
        // navigate to login page
        await super.navigate('index.html');
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;
