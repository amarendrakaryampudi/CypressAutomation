/// <reference types="Cypress" />
import HomePage from '../Pages/HomePage'

describe('Functions test suite', function() {

    before(function() {
        cy.fixture('functionsTestData').then(function(testData) {
            this.data = testData;
        })
    })

    it('Functions test case', function() {
        var homePage = new HomePage();
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.shopIcon().click();

        for (var product of this.data.products) {
            cy.selectProduct(product);
        }
        
    })

})