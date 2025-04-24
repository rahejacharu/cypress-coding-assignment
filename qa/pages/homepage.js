class HomePage {
    elements = {
      headerLinks: () => cy.get('a.header__menu-item'),
      footerLinks: () => cy.get('.menu-blocks a'),
      items: () => cy.get('h3.h5 a'),
      footer: () => cy.get('footer'),
      header: () => cy.get('header'),
    };
  
    checkHeaderLinks(expectedcount, expectedheaderlist) {
      cy.linkchecker(this.elements.headerLinks(), expectedcount, expectedheaderlist);
    }
  
    checkFooterLinks(expectedcount, expectedfooterlist) {
      cy.linkchecker(this.elements.footerLinks(), expectedcount, expectedfooterlist);
    }
  
    clickFirstItem() {
      return this.elements.items().first();
    }
  
    footer() {
      return this.elements.footer();
    }
  
    header() {
      return this.elements.header();
    }
  }
  
  module.exports = new HomePage();
  