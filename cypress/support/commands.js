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

Cypress.Commands.add('acceptCookies', (cookies) => {
    cy.fixture('elements').then((loc) => {
        cy.get(loc.promptMsg).scrollIntoView().should('be.visible').then(($cookiesPrompt) => {
            if ($cookiesPrompt.length > 0) {
                // Handle the cookies prompt if it appears
                cy.get(loc.acceptBtn).should('contain.text', 'ok').click();
            }
        });
    });
})

Cypress.Commands.add('searchForAnItem', (item) => {
    cy.fixture('elements').then((loc) => {
        cy.get(loc.searchBar).type(item);
        //cy.get(loc.searchResult).click();
    });
});    