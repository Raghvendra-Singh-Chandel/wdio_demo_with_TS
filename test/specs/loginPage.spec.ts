import loginPage from '../pageobjects/loginPage'

describe('My Login application', () => {
    // afterEach(async () => {
    //     await browser.execute(() => {
    //       window.localStorage.clear();
    //     });
    //   });
      

    /**
     * Should not login with Invalid Credential
     */
    it('should not login with invalid credentials', async () => {
        await loginPage.loginWithInvalidCredential()
    })

    /**
     * Verify functionality of login button
     */
    it('verify functionality of cancel button', async()=> {
        await loginPage.verifyfunctionalityOfCancelBtn()
    })

    /**
     * Should  login with Valid Credential
     */
    it('should login with Valid credentials', async () => {
        await loginPage.loginWithValidCredential()
    })
})

