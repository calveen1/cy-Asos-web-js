describe('Asos web automation', () => {
  it('Should search for a product and add it to the cart', () => {

    cy.fixture('elements').then((loc) => {
      cy.visit('/');
      // Handling the cookies prompt
      cy.wait(5000);
      cy.acceptCookies();
      // Handling the search bar
      cy.searchForAnItem(loc.dress);
      cy.get(loc.searchResult).click();``
      // Handling the add to filter component
      cy.get(loc.sortBtn).should('contain.text', 'Sort').click();
      cy.wait(5000);
      cy.get(loc.whatsNewBtn).should('be.visible').as('whatsNew');
      cy.get('@whatsNew').click({ force: true });
      //cy.get('@whatsNew').click();
      cy.wait(5000);
      // Selecting the product
      cy.get(loc.selectDress).should('be.visible').click();
      cy.wait(5000);
      // Proceed with other actions
      cy.get(loc.selectSizeBtn).should('be.visible').select(loc.size);
      //cy.get('[data-testid="size-0"]').contains('UK18 L30').click({force: true});
      cy.get(loc.addToBag).should('contain.text', 'Add to bag').should('be.visible').click({ force: true });
      cy.wait(5000);
      cy.get(loc.cart).scrollIntoView().should('be.visible').click();
      cy.get(loc.checkOut).should('be.visible').click();
    });
  });
});
