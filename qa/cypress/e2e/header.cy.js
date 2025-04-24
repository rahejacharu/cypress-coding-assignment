import HomePage from '../../pages/homepage';

describe("Header Navigation", () => {
  beforeEach(() => {
    cy.fixture('itemDetails').as('data');
  });

  it("should validate all header links", () => {
    cy.visit("/");
    HomePage.header().should('be.visible');

    cy.get('@data').then((data) => {
      cy.log('Expected Header List:', data.expectedheaderlist);
      HomePage.checkHeaderLinks(data.expectedheadercount, data.expectedheaderlist);
    });
  });
});

