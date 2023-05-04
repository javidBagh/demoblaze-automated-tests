// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('login', (username, password) => {
    cy.get('#login2').click();
  
    cy.get('#loginusername')
      .type(username, { force: true });
  
    cy.get('#loginpassword')
      .type(password, { force: true });
  
    cy.get('[onclick="logIn()"]').click();
  });

  Cypress.Commands.add("selectProducts", (productName) => {
    cy.get('.col-lg-4.col-md-6.mb-4').each(($el, index, $list) => {
        if($el.text().includes('productName'))
        {
            cy.get('.hrefch').eq(index).click();
            
            cy.get('[onclick="addToCart(1)"]').click;

            cy.get('#nava').click();

        }


    })
})
  
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




  