import HomePage from '../../pages/homepage';
import Search from '../../pages/searchpage';

describe('Search Hoodie Products', () => {
    beforeEach( function() {
        cy.fixture('example').then((data) => {
          this.data = data;
        });
      });
  it("should fail - incorrect assertion on hoodie search", function()  {
    cy.visit("/")
    Search.clickSearchIcon()
    Search.enterTextInSearchField(this.data.hoodie);
    cy.contains('No results found').should('be.visible');
    

  })

  it('should pass - all hoodie search results contain "hoodie"', () => {
    cy.visit("/")
    Search.clickSearchIcon()
    Search.enterTextInSearchField();
    Search.checkSearchResult().each(($el) => {
        const title = $el.text().trim().toLowerCase();
        expect(
            title.includes('hoodie') || title.includes('crewneck'),
            `Title "${title}" should include "hoodie" or "crewneck"`
          ).to.be.true;
        });
    

  })




})
