class CartPage {
    elements = {
      cartItem: () => cy.get('a.upcart-product-title-link'),
    };
  
    checkAddedItemText() {
      return this.elements.cartItem();
    }
  }
  
  module.exports = new CartPage();
  
  