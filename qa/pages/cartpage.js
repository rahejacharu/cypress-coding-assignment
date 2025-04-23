class cartpage {

    elements = {

        cartitem:()=>cy.get('a.upcart-product-title-link'),
     
        
    }




    checkAddedItemText()
    {
       return this.elements.cartitem()
    }

   






}
module.exports = new cartpage();