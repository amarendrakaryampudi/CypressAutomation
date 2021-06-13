/// <reference types = "Cypress" />

describe('secondTestSuite', function(){

    it('secondTestCase', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').as('searchBox').type("ca");
        cy.wait(500);
        cy.get('.products').contains('Cashew').nextAll('.product-action').find('button').click();
        cy.contains('Items').next().next().find('strong').should('have.text','1');
        cy.get('.cart-icon').click();
        cy.get('.cart-items .product-name').should('contain.text','Cashew');
        cy.get('.cart-preview').contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();

    })
})