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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


  cy.adminLogin = function (username, password) {
     //Enter username
     cy.get("input[placeholder='username']").type(username)
     //Enter password
     cy.get("input[placeholder='Your password']").type(password)
     // Click sign in
     cy.get('.m_811560b9').click()
     // Verify user is signed in
     cy.get("h1").should("contain", "Dashboard")

  };

  cy.facilityLogin = function (username, password) {
       //Enter code
      cy.get('input[name="facilityCode"]').type('7000')
      //Enter username
     cy.get("input[placeholder='username']").type(username)
     //Enter password
     cy.get("input[placeholder='Your password']").type(password)
     // Click sign in
     cy.get('.m_811560b9').click()
     // Verify user is signed in
     cy.get("h1").should("contain", "Dashboard")

  }


 // beforeEach(() => {
 //    //Visit site
 //    cy.visit(baseUrl)
 //    //Ignore minified react errors
 //    Cypress.on('uncaught:exception', (err, runnable) => {
 //      return false
 //    })
    // const username = 'fawzia'
    // const password = 'QATest@123'
    // cy.adminLogin (username, password)
    //})