// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('linkchecker', (links, expectedCount, expectedlist) => {
    let validUrlCount = 0;
    let actualList = [];
    
    links.each(($link) => {
      if ($link.children().length === 0) {
        actualList.push($link.text().trim());
      } else {
        actualList.push($link.children().text().trim());
      }
    
      const href = $link.prop('href');
    
      if (href && href.startsWith('http')) {
        validUrlCount++;
        cy.request({
          url: href,
          failOnStatusCode: false
        }).its('status').should('be.lt', 400);
      }
    }).then(() => {
      if (expectedCount !== undefined) {
        expect(validUrlCount).to.equal(expectedCount);
      }
    
      if (expectedlist) {
        expect(actualList).to.deep.equal(expectedlist);
      }
    });
  });
  