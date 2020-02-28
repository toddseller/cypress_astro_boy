describe('Astro Boy Web A/B Scenarios', function () {
  it('Button text changes when in Variation', function () {
    cy.visit('/?cypress=on&optimizely_x=17655910623')

    cy.get('button')
      .should('have.text', 'Learn More!')
  })

  it('Button text does not change when in Original', function () {
    cy.visit('/?cypress=on&optimizely_x=17626770937')

    cy.get('button')
      .should('have.text', 'Blast Off!')
  })
})