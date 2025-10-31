//your JS code here. If required.
cy.get('.book .price', { timeout: 8000 })
  .should('have.css', 'background-color', 'rgb(46, 204, 113)');
