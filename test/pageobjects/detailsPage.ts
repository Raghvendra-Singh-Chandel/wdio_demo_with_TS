import  * as detailData  from "../testData/details.json"
import * as path from "path"

class detailPage {

    get fullName() {
        return $("#fullName")
    }

    get FullNameError() {
        return $('#fullNameError')
    }
    get Email() {
        return $("#email")
    }
    get phoneNumber () {
        return $("#phone")
    }
    get DOB() {
        return $("#dateOfBirth")
    }

    get sexMale() {
        return $("input[value='male']")
    }

    get country() {
        return $("#country")
    }
    get city() {
        return $("#city")
    }
    get zipCode() {
        return $("#zipCode")
    }

    get uploadImage() {
        return $("#profileImage")
    }

    get confirmCheckBox() {
        return $("#confirmCheckbox")
    }
    get paymentPageButton() {
        return $("#submit-details")
    }

    async fillALlDetailsAndProcessedToPaymentPage() {
        await this.fullName.setValue(detailData.fullName)
        await expect(this.fullName).toHaveValue(detailData.fullName)
        await this.Email.setValue(detailData.email)
        await expect(this.Email).toHaveValue(detailData.email)
        await this.phoneNumber.setValue(detailData.phone)
        await expect(this.phoneNumber).toHaveValue(detailData.phone)
        await this.DOB.setValue(detailData.DOB)
        await this.sexMale.click()
        await this.country.selectByVisibleText(detailData.country)
        await this.city.setValue(detailData.city)
        await expect(this.city).toHaveValue(detailData.city)
        await this.zipCode.setValue(detailData.zipCode)
        await expect(this.zipCode).toHaveValue(detailData.zipCode)
        const filePath = path.join(__dirname, "../ImageData/profile.png" )
        await this.uploadImage.setValue(filePath)
        await this.confirmCheckBox.click()
        await this.paymentPageButton.click()
        await expect(browser).toHaveUrlContaining("/payment.html")


    }


}
export default new detailPage();