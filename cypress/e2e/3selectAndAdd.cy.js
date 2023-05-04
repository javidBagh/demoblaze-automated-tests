describe('Selects multiple items', () => {
  before(() => {

    cy.visit('/')
  })
  it('Selects multiple items', () => {

    cy.contains('[href="prod.html?idp_=1"]','Samsung galaxy s6').click();

    cy.get('[onclick="addToCart(1)"]').click;

    cy.get('#nava').click();

    cy.contains('[href="prod.html?idp_=2"]','Nokia lumia 1520').click();

    cy.get('[onclick="addToCart(2)"]').click();

    //cy.selectProducts('Nokia lumia 1520');


  })
})