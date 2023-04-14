describe('Test navigating to different domains with cy.origin', () => {
  it('should navigate to Dev Community profile and then return to the main domain', () => {
    // Visit the main domain
    cy.visit('https://walmyr.dev')

    // Find and click the link to the Dev Community profile
    cy.get('a[href="https://dev.to/walmyrlimaesilv"]')
      .invoke('removeAttr', 'target')
      .click()

    // Use cy.origin to navigate to the Dev Community domain
    cy.origin('https://dev.to', () => {
      // Verify that we have landed on the Dev Community profile
      cy.url().should('include', 'https://dev.to/walmyrlimaesilv')

      // Find and click the link to return to the main domain
      cy.get('a[href="https://walmyr.dev"]')
        .invoke('removeAttr', 'target')
        .click()
    })

    // Verify that we have returned to the main domain
    cy.url().should('eq', 'https://walmyr.dev/')
  })
})
