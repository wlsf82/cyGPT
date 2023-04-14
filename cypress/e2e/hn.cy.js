describe('Search on hackernews', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/search**').as('searchRequest');
  });

  it('searches for a term from env file', () => {
    cy.visit('https://hackernews-seven.vercel.app/');
    cy.wait('@searchRequest');
    
    cy.get('[type="text"]').clear().type(Cypress.env('searchTerm'));
    cy.get('[type="submit"]').click();
    cy.wait('@searchRequest');
    
    cy.get('.table-row').should('be.visible');
  });
});
