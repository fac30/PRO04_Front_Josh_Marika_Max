/// <reference types="cypress" />

import { link } from "fs";

type navLinksProps = {
  selector: string;
  expectedUrl: string;
};

describe('first test in Navbar', () => {

  const navLinks: navLinksProps[] = [
    { selector: '[data-test="link-to-vinyl-section"]', expectedUrl: '/vinyls' },
    { selector: '[data-test="link-to-genre-section"]', expectedUrl: '/genres' },
    { selector: '[data-test="link-to-artists-section"]', expectedUrl: '/artists' },
    { selector: '[data-test="link-to-labels-section"]', expectedUrl: '/labels' },
    { selector: '[data-test="link-to-new-releases-section"]', expectedUrl: '/new-releases' },
    { selector: '[data-test="link-to-on-sale"-section"]', expectedUrl: '/on-sale"' },
    { selector: '[data-test="link-to-shipping-section"]', expectedUrl: '/shipping' }
  ]
  beforeEach(() => {
    cy.visit('http://localhost:5173/')

  });


  
    it('clicks the links to direct you to correct section', () => {
      navLinks.forEach((navLink) => {
        cy.get(navLink.selector).click();

        cy.url().should('include', navLink.expectedUrl); 

      })
     
  })
})