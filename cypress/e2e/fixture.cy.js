describe('Read value from JSON fixture file', () => {
  it('logs the value to the console', () => {
    cy.fixture('example.json').then((json) => {
      const message = json.message;
      cy.log(message);
    });
  });
});
