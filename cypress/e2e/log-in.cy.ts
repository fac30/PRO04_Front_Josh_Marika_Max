/// <reference types="cypress" />

describe('User Authentication Tests', () => {

  // Check if the user exists and can successfully log in
  it('should log in an existing user and redirect to the user page', () => {
    cy.visit('http://localhost:5173/UserLogin');

    // Type the email and password for an existing user(this is just example placeholder)
    cy.get('[name="username"]').type('existingUser');
    cy.get('[name="password"]').type('validPassword');


    cy.get('button[type="submit"]').click();

    cy.location("pathname").should("equal", "/UserPage");
  });

  // Handle unsuccessful login and display an error message
  it('should display an error message for invalid credentials', () => {
    cy.visit('http://localhost:5173/UserLogin');

    cy.get('[name="username"]').type('existingUser');
    cy.get('[name="password"]').type('validPassword');

    cy.get('button[type="submit"]').click();

    // error message after login atempt
    cy.get('[class=.error-message]').should('be.visible')
      .and('contain', 'Email or password is incorrect');
  });

});





