import HomePage from '../../pages/homepage';

describe("Footer Navigation", () => {
  beforeEach(() => {
    cy.fixture('itemDetails').as('data');
  });

  it("should validate all footer internal links", () => {
    cy.visit("/");
    HomePage.footer().should('be.visible');

    cy.get('@data').then((data) => {
      cy.log('Expected Footer List:', data.expectedfooterlist);
      HomePage.checkFooterLinks(data.expectedfootercount, data.expectedfooterlist);
    });
  });
});
