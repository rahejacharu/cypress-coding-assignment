import HomePage from '../../pages/homepage';

describe("Header Navigation", () => {
  it("Should validate all header links", () => {
    cy.visit("/")
    HomePage.header().should('be.visible');
    HomePage.checkHeaderLinks()

  })



})
