import HomePage from '../../pages/homepage';

describe("Footer Navigation", () => {
  it("Should validate all footer links", () => {
    cy.visit("/")
    HomePage.footer().should('be.visible');
    HomePage.checkFooterLinks();

  })



})
