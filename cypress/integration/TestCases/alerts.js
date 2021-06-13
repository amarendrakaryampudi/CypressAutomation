/// <reference types="Cypress" />

describe ('Alerts test suite', function() {

    it('Alert test case', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.on('window:alert', (message) => {
            expect(message).to.contains('share this practice page');
        })

        cy.get('#alertbtn').click();
    })
})