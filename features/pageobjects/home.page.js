const { $, expect } = require('@wdio/globals')
const Page = require('./page');


const element = {
    iconCart: $('.shopping_cart_link'),
    ButtonaddToCartBackpack: $('#add-to-cart-sauce-labs-backpack')
}

class HomePage extends Page {
    async validateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(element.iconCart).toBeDisplayed()
    }
    
    async addBackpackToCart() {
        await element.ButtonaddToCartBackpack.click()
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();