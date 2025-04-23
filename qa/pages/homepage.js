class homepage {

    elements = {

        headerlinks: () => cy.get('a.header__menu-item') ,
        footerlinks: () => cy.get('.menu-blocks a') ,
        items: ()=> cy.get('h3.h5 a'),
        footer:()=> cy.get('footer'),
        header:()=> cy.get('header')
    }




    checkHeaderLinks() {

        cy.linkchecker(this.elements.headerlinks())

    }

    checkFooterLinks() {

        cy.linkchecker(this.elements.footerlinks())

    }

    clickFirstItem()
    {
      return this.elements.items().first()
    }

    footer()
    {
        return this.elements.footer()
    }

    header()
    {
        return this.elements.header();

    }

}


module.exports = new homepage();























