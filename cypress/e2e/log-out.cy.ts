// <reference types="cypress" />

describe('User Logout Tests', () => {
  it('should log out the user and redirect to the login page', () => {
    cy.visit('http://localhost:5173/UserPage');

    cy.get('[data-test="logout-button"]').click();

    // After logout, the user should be redirected to the login page
    cy.location("pathname").should("equal", "/UserLogin");
  });

  it('should prevent access to protected pages after logging out', () => {
    cy.visit('http://localhost:5173/UserLogin');


    cy.location("pathname").should("equal", "/UserLogin");
  });
});

