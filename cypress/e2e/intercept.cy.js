describe('Testing server failure', () => {
  it('displays error message when server fails', () => {
    cy.intercept(
      'GET',
      '**/search**',
      { statusCode: 500 }
    ).as('getServerFailure')

    cy.visit('https://wlsf82-hacker-stories.web.app/')
    cy.wait('@getServerFailure')

    cy.contains('p', 'Something went wrong').should('be.visible')
  })
})

describe('Network failure test', () => {
  it('should handle network failure', () => {
    cy.intercept(
      'GET',
      '**/search**',
      { forceNetworkError: true }
    ).as('getNetworkFailure')

    cy.visit('https://wlsf82-hacker-stories.web.app/')

    cy.contains('p', 'Something went wrong').should('be.visible')
  })
})
