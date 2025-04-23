class itemdeatilpage {

    elements = {

        addtocart: () => cy.get('button.product-form__submit'),
        footerlinks: () => cy.get('.footer a'),
        items: () => cy.get('ul.product-grid h3.h5 a'),
        itemname:()=>cy.get(' div .product__title h1')
    }




    clickAddToCart() {

        this.elements.addtocart().click();

    }

    itemName()
    {
        return this.elements.itemname();
    }



}


module.exports = new itemdeatilpage();























