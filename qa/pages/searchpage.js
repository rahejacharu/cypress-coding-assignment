class SearchPage {
    elements = {
      searchIcon: () => cy.get('summary.header__icon--search'),
      inputSearch: () => cy.get('input.search__input'),
      searchResult: () => cy.get('.card__information .h5 a'),
    };
  
    clickSearchIcon() {
      return this.elements.searchIcon().click();
    }
  
    enterTextInSearchField(itemname) {
      return this.elements.inputSearch().type(`${itemname}{enter}`);
    }
  
    checkSearchResult() {
      return this.elements.searchResult();
    }
  }
  
  module.exports = new SearchPage();
  