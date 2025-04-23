import HomePage from '../../pages/homepage';
import Item from '../../pages/itemdetailpage';
import Cart from '../../pages/cartpage';


describe("Shopping cart", () => {
  it("add product to cart and verify correct product is added", () => {
    cy.visit("/")
    let actualitem;
    HomePage.clickFirstItem().then(($itemname)=>{
         actualitem= $itemname.text().trim()
       cy.log(actualitem)
       cy.wrap($itemname).click()

    })

    Item.clickAddToCart()
    Cart.checkAddedItemText().then(($itemname)=>{

        let expecteditem= $itemname.text().trim()
        expect(expecteditem).to.equal(actualitem)
    })



    

  })



})
