import payment from "../pageobjects/payment"
import selectProductToBuy from "../pageobjects/selectProduct"

import loginPage from "../pageobjects/loginPage"
import detailPage from "../pageobjects/detailsPage"

describe("create order end to end scenario",()=> {
    // before(async ()=> {
    //     await loginPage.landingToMainPage
    // });

    it("create order",async()=> {
        await loginPage.loginWithValidCredential()
        await selectProductToBuy.selectProducts()
        await  detailPage.fillALlDetailsAndProcessedToPaymentPage()
        await payment.makePaymentAndCompleteOrder()

    })
    
})
