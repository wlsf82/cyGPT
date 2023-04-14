describe('cy.task test', () => {
  it('makes an HTTP GET request', () => {
    cy.task('makeHttpRequest', 'https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('userId');
        expect(response.body).to.have.property('title');
        expect(response.body).to.have.property('completed');
      });
  });
});
