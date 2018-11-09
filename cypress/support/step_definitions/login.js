/* global Given, When, Then */
const username = ('USER_USERNAME')
const userpassword = ('USER_PASSWORD')
const url = ('https://alphafx-tech-demo.herokuapp.com/')
// setup base URL

Given('I open home page', () => {
  cy.visit(url);
  // visit base `URL
})

When('I login using valid credentials', () => {
    cy.get('#username__input').type(username);
    cy.get('#password__input').type(userpassword);
    cy.get('button[type="submit"]').click();
    // find elements and submit form
})

Then('I can see dashboard', ()=>{
    cy.get();
    // verify dashboard
})