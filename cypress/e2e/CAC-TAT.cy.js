describe('Form submission', () => {
  beforeEach(() => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('should submit the form successfully with mandatory fields filled', () => {
    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('#email').type('johndoe@example.com')
    cy.get('#open-text-area').type('This is a test message')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('should show an error when trying to submit an empty form', () => {
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('should show an error when trying to submit the form with mandatory phone field empty', () => {
    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('#email').type('johndoe@example.com')
    cy.get('#phone-checkbox').check()
    cy.get('button[type="submit"]').click()

    cy.get('#phone:invalid').should('be.visible')
    cy.get('.error').should('be.visible')
  })
})
