class ItemDetailPage {
    elements = {
      addToCart: () => cy.get('button.product-form__submit'),
      itemName: () => cy.get('div .product__title h1'),
    };
  
    clickAddToCart() {
      this.elements.addToCart().click();
    }
  
    itemName() {
      return this.elements.itemName();
    }
  }
  
  module.exports = new ItemDetailPage();
  