describe('Login', () => {
  before(() => {
    cy.visit('/');
  });

  it('login', () => {
    cy.login('FlyingDog', '1234');
    
    cy.get('#nameofuser')
    .should('contain', 'Welcome FlyingDog')
  });
});
