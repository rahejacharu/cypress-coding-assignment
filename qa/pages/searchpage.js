class searchpage {

    elements = {

       searchicon:()=>cy.get('summary.header__icon--search'),
       inputsearch:()=>cy.get('input.search__input'),
       searchresult:()=>cy.get('.card__information .h5 a')
        
    }

    clickSearchIcon()
    {
       return this.elements.searchicon().click()
    }

    enterTextInSearchField()
    {
        return this.elements.inputsearch().type('hoodie{enter}')
    }

    checkSearchResult()
    {
        return this.elements.searchresult()
    }





}
module.exports = new searchpage();