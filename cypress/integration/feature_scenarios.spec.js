describe('astro_boy Feature Scenarios', function () {
  it('Validate that the astro_boy feature is not enabled with no query parameter', function () {
    // Visit app
    cy.visit('/')

    // Validate feature is disabled
    cy.get('#astronaut')
      .should('not.exist')
  })

  it('Validate that the astro_boy feature is not enabled with incorrect query parameter', function () {
    // Visit app
    cy.visit('/?cypress=off')

    // Validate feature is disabled
    cy.get('#astronaut')
      .should('not.exist')
  })

  it('Validate that the astro_boy feature is enabled', function () {
    // Visit app with audience query parameter
    cy.visit('/?cypress=on')

    // Validate feature is enabled
    cy.get('#astronaut')
      .should('exist')
  })

  it('Validate button is clickable', function () {
    // Visit app with audience query parameter
    cy.visit('/?cypress=on')

    // Validate feature is enabled
    cy.get('button')
      .click()
  })
})
