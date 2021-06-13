/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import "cypress-iframe";

describe('Frames Test suite', () => {

    it('Frames test case', () => {
        cy.visit('https://www.w3schools.com/');
        cy.get('iframe[src*="howto"]').eq(0).as('frame');

        cy.frameLoaded('@frame');

        cy.iframe('@frame').contains('About').click();
    })
})