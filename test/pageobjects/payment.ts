import * as paymentData from "../testData/paymentDetails.json"

class payment {
    get cardNumber() {
        return $("#cardNumber")
    }
    get carderrorMessage() {
        return $("#cardNumberError")
    }
    get cardHolderName() {
        return $("#cardName")
    }
    get cardHolderNameErrorMessage () {
        return $("#cardNameError")
    }
    get expiryDate() {
        return $("#expiryDate")
    }
    get CVV() {
        return $("#cvv")
    }
    get payNowBtn() {
        return $("#payNowBtn")
    }

    async makePaymentAndCompleteOrder() {
        await this.cardNumber.setValue(paymentData.cardNumber)
        await expect(this.cardNumber).toHaveValue(paymentData.cardNumber)
        await this.cardHolderName.setValue(paymentData.cardHolderName)
        await expect(this.cardHolderName).toHaveValue(paymentData.cardHolderName)
        await this.expiryDate.setValue(paymentData.expiryDate)
        await expect(this.expiryDate).toHaveValue(paymentData.expiryDate)
        await this.CVV.setValue(paymentData.cvv)
        await expect(this.CVV).toHaveValue(paymentData.cvv)
        await this.payNowBtn.click()
        await expect(browser).toHaveUrlContaining("/orderPlaced.html")
       

    }



};

export default new payment();