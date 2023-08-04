import * as  loginData  from "../testData/login.json"
/**
 * sub page containing specific selectors and methods for a specific page
 */
class loginPage {
    /**
     * define selectors using getter methods
     */
    get landingToMainPage () {
        return browser.url('/login.html');
    }
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login');
    }

    get cancelBtn () {
        return $('#cancel')
    }

    get errorMsg() {
        return $('#error')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async loginWithInvalidCredential () {
        await this.landingToMainPage
        await this.inputUsername.setValue("test");
        await expect(this.inputUsername).toHaveValue("test")
        await this.inputPassword.setValue("Test123");
        await expect(this.inputPassword).toHaveValue("Test123")
        await this.btnSubmit.click();
        await expect(this.errorMsg).toHaveTextContaining(loginData.validationMessage)
    }

    async verifyfunctionalityOfCancelBtn () {
        await this.landingToMainPage
        await this.inputUsername.setValue(loginData.username);
        await expect(this.inputUsername).toHaveValue(loginData.username)
        await this.inputPassword.setValue(loginData.password);
        await expect(this.inputPassword).toHaveValue(loginData.password)
        await this.cancelBtn.click();
        await expect(this.inputUsername).not.toHaveValue(loginData.username)
        await expect(this.inputPassword).not.toHaveValue(loginData.password)
        await expect(browser).not.toHaveUrlContaining('/index.html')
    }

    async loginWithValidCredential () {
        await this.landingToMainPage
        await this.inputUsername.setValue(loginData.username);
        await expect(this.inputUsername).toHaveValue(loginData.username)
        await this.inputPassword.setValue(loginData.password);
        await expect(this.inputPassword).toHaveValue(loginData.password)
        await this.btnSubmit.click();
        await expect(browser).toHaveUrlContaining('/index.html')
    }
    
}

export default new loginPage();
