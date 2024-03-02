const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const element = {
    fieldUsername: $('#user-name'),
    fieldPassword: $('#password'),
    buttonLogin: $('#login-button'),
    errorUser: (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)
}
    
class LoginPage extends Page {
    async login (username) {
        await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await element.fieldUsername.setValue(username);
        await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.buttonLogin.click();
    }

    async validateUserError (dynamicMessage) {
        await element.errorUser (dynamicMessage).waitForDisplayed({ timeout: 2500 });
        await expect(element.errorUser(dynamicMessage)).toBeDisplayed()
    }

    async loginProblemUser () {
        await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await element.fieldUsername.setValue(process.env.USERNAME_PROBLEM_USER);
        await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.buttonLogin.click();
    }

    // async validateInvalidUser (dynamicMessage) {
    //     await errorInvalidUser(dynamicMessage).waitForDisplayed({ timeout: 2500 });
    //     await expect(this.errorInvalidUser(dynamicMessage)).toBeDisplayed()
    // }

    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();
