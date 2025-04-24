import HomePage from '../../pages/homepage';
import Item from '../../pages/itemdetailpage';
import Cart from '../../pages/cartpage';

describe('Shopping Cart', () => {
  it('should add a product to the cart and verify the correct product is added', () => {
    cy.visit('/');

    HomePage.clickFirstItem().then(($itemName) => {
      const actualItem = $itemName.text().trim();
      cy.log(`Selected Item: ${actualItem}`);
      cy.wrap($itemName).click();

      Item.clickAddToCart();

      Cart.checkAddedItemText().then(($addedItemName) => {
        const expectedItem = $addedItemName.text().trim();
        expect(expectedItem).to.equal(actualItem);
      });
    });
  });
});
