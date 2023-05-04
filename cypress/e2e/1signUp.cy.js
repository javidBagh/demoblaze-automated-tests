describe('Signing up', () => {
  before(() => {
    cy.visit('/');
  });

  it('signs up', () => {
    cy.get('#signin2')
      .should('contain', 'Sign up')
      .click();

    cy.get('#sign-username').type('FlyingDog', { force: true });
    cy.get('#sign-password').type('1234', { force: true });
    cy.contains('[type="button"]', 'Sign up').click();

    // Assert the alert message
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('This user already exist.');
    });
  });
});
