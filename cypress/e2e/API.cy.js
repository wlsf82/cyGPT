describe('Public API test', () => {
  it('should return expected data from a GET request', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('userId', 1)
        expect(response.body).to.have.property('id', 1)
        expect(response.body).to.have.property('title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        expect(response.body).to.have.property('body', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')
      })
  })

  it('should return expected data from a GET request', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .as('reqAlias')

    cy.get('@reqAlias')
      .its('status')
      .should('be.eq', 200)

    cy.get('@reqAlias')
      .its('body.userId')
      .should('eq', 1)

    cy.get('@reqAlias')
      .its('body.id')
      .should('eq', 1)

    cy.get('@reqAlias')
      .its('body.title')
      .should('eq', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')

    cy.get('@reqAlias')
      .its('body.body')
      .should('eq', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')
  })
})