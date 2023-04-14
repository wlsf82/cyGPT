describe('Write fiction', () => {
  it('should log a small story', () => {
    cy.writeFiction('The Enchanted Forest', 'John Doe', 'Fantasy')
  })
})
