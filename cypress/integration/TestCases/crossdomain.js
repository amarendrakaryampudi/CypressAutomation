/// <reference types="Cypress" />

describe('Cross domain test suite', () => {

    it('Cross domain test case', () => {
        cy.visit('https://www.google.co.in/');
        cy.contains('Jeg accept').click();
        cy.get('input[title="Søg"]').type('Yahoo');
        cy.get('input[value^="Google-søg"]:visible').click();

        cy.get('div#search a > h3').eq(0).click();
        cy.contains('Acceptér alle').click();
    })
})