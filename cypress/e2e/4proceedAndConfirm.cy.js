describe('Selects multiple items', () => {
  before(() => {

    cy.visit('/')
  })
  it('Proceed to checkout and confirm', () => {

    cy.get('#cartur').click();

    cy.contains('Place Order').click();

    cy.get('#name').type('Flying Dog', { force: true });

    cy.get('#country').type('Dogland', { force: true });

    cy.get('#city').type('Dogcity', { force: true });

    cy.get('#card').type('1234', { force: true });

    cy.get('#month').type('01', { force: true });

    cy.get('#year').type('2025', { force: true });

    cy.contains('Purchase').click();

    cy.contains('Thank you for your purchase!')
    .should('contain', 'Thank you for your purchase!');

    cy.contains('OK').click();

    cy.reload();
  
  })
})