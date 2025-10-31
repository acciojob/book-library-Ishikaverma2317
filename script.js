describe("example-to-do app", () => {
  it("testing book block CSS", () => {
    const price_background = 'rgb(46, 204, 113)';
    const color_author = 'rgb(119, 119, 119)';
    const color_white = 'rgb(255, 255, 255)';

    // Load the correct file (adjust if path differs)
    cy.visit("index.html");

    // Wait for elements and CSS to load before checking
    cy.get('.book').should('exist');
    cy.wait(500); // ensures CSS loaded fully

    cy.get('.book').within(() => {
      cy.get('.price')
        .should('have.css', 'background-color', price_background)
        .and('have.css', 'border-radius', '5px');
      cy.get('.price')
        .should('have.css', 'color', color_white);
      cy.get('.author')
        .should('have.css', 'color', color_author);
    });
  });
});
