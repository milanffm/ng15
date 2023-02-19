describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('load page', () => {
    cy.get('a').should('have.length', 2)
    cy.get('a').first().should('have.text', 'home')
    cy.get('a').last().should('have.text', 'todo')
  })
})
