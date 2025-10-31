describe("example-to-do app", () => {
  it("testing book block CSS", () => {
    const price_background = 'rgb(46, 204, 113)';
    const color_author = 'rgb(119, 119, 119)';
    const color_white = 'rgb(255, 255, 255)';

    cy.visit("index.html"); // make sure index.html path is correct
    cy.wait(500); // wait for CSS to fully load

    // ✅ select specific elements, not just <div>
    cy.get('.book').each(($book) => {
      cy.wrap($book).find('.price')
        .should('have.css', 'background-color', price_background)
        .and('have.css', 'border-radius', '5px')
        .and('have.css', 'color', color_white);

      cy.wrap($book).find('.author')
        .should('have.css', 'color', color_author);
    });
  });
});
