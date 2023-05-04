describe('End to end test', () => {
  before(() => {
    cy.visit('/');
  });

  it('Sign up', async () => {
    await import('./1signUp.cy.js');
  });

  it('Login', async () => {
    await import('./2login.cy.js');
  });

  it('Select multiple elements and add to cart', async () => {
    await import('./3selectAndAdd.cy.js');
  });

  it('Proceed to checkout and confirm', async () => {
    await import('./4proceedAndConfirm.cy.js');
  });
  debugger
  after(() => {
    cy.task('cleanup');
  });

});
