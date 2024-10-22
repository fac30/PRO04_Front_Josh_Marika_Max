/// <reference types="cypress" />

describe('User Authentication Tests', () => {

  // Check if the user exists and can successfully log in
  it('should log in an existing user and redirect to the user page', () => {
    cy.visit('http://localhost:5173/log-in');

    // Type the email and password for an existing user(this is just example placeholder)
    cy.get('[data-test="signin-email"]').type('existingUser@example.com');
    cy.get('[data-test="signin-password"]').type('validPassword');


    cy.get('[data-test="signin-submit"]').click();

    cy.location("pathname").should("equal", "/UserPage");
  });

  // Handle unsuccessful login and display an error message
  it('should display an error message for invalid credentials', () => {
    cy.visit('http://localhost:5173/log-in');

    cy.get('[data-test="signin-email"]').type('invalidUser@example.com');
    cy.get('[data-test="signin-password"]').type('wrongPassword');

    cy.get('[data-test="signin-submit"]').click();

    cy.get('[data-test="signin-error"]').should('be.visible')
      .and('contain', 'Email or password is incorrect');
  });

});





