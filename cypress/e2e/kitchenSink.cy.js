describe('Drawing a house on a canvas', () => {
  it('should draw a house', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('#action-canvas')
      .scrollIntoView()
      .click(80, 75)
      .click(80, 125)
      .click(130, 125)
      .click(130, 75)
      .click(80, 75)
      .click(105, 50)
      .click(130, 75)
  })
})
