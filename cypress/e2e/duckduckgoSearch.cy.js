describe('DuckDuckGo search', () => {
  it('should return results for a search term', () => {
    cy.visit('https://duckduckgo.com/')
    cy.get('#search_form_input_homepage').type('cypress.io')
    cy.get('#search_button_homepage').click()
    cy.get('#links .result').should('have.length.gt', 0)
  })
})
