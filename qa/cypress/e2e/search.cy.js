import Search from '../../pages/searchpage';

describe('Search Hoodie Products', () => {
  beforeEach(() => {
    cy.fixture('itemDetails').as('data');
  });

  it('should fail - incorrect assertion on hoodie search', function () {
    cy.visit('/');
    Search.clickSearchIcon();
    cy.get('@data').then((data) => {
      Search.enterTextInSearchField(data.searchitem1);
      cy.contains('No results found').should('be.visible');
    });
  });

  it('should pass - all hoodie search results contain "hoodie" or "crewneck"', function () {
    cy.visit('/');
    Search.clickSearchIcon();
    cy.get('@data').then((data) => {
      Search.enterTextInSearchField(data.searchitem1);
      Search.checkSearchResult().each(($el) => {
        const title = $el.text().trim().toLowerCase();
        expect(
          title.includes(data.searchitem1) || title.includes(data.searchitem2),
          `Title "${title}" should include "${data.searchitem1}" or "${data.searchitem2}"`
        ).to.be.true;
      });
    });
  });
});
