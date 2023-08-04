import * as  productData from "../testData/product.json"

class selectProductToBuy {

    get productItem() {
        return $("h3=Men Black Action Parkview Lifestyle Shoes")
    }
    get addproductIncart() {
        return $("#button button")
    }

    get productName() {
        return $("#productDetails h1")
    }

    get productDescription() {
        return $("#details p")
    }

    get productCount() {
        return $("#badge")
    }

    get placeOrderButton() {
        return $("#button a")
    }

    get productVerify() {
        return $("#box h3")
    }

    async selectProducts () {
        await this.productItem.click()
        await expect(this.productName).toHaveTextContaining(productData.productName)
        await expect(this.productDescription).toHaveTextContaining(productData.productdescription)
        await expect(this.productCount).toHaveText('0')
        await this.addproductIncart.click()
        await expect(this.productCount).toHaveText('1')
        await this.productCount.click()
        await expect(browser).toHaveUrlContaining("/cart.html")
        await expect(this.productVerify).toHaveTextContaining(productData.productName + " × 1")
        await this.placeOrderButton.click()
        await expect(browser).toHaveUrlContaining("/enter_details.html")
    }

}
export default new selectProductToBuy();