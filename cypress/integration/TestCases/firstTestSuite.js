/// <reference types="Cypress" />

describe('First test suite', function(){

    it('First test case', function(){
        cy.visit("https://www.amazon.in")
        cy.get("#twotabsearchtextbox").type("Laptop")
        cy.get('#nav-search-submit-button').click()
        cy.get('[cel_widget_id*="MAIN-SEARCH_RESULTS"]:visible').should('have.length',22)
        cy.get('#reviewsRefinements').find('a').should('have.length',4)
        cy.log()
        cy.get('#reviewsRefinements').find('a').each((ele, index, array) => {
            var starText = ele.find('span.a-icon-alt').text()
            if(starText.includes('3 Stars')){
                cy.log(starText + ' is in position '+ index + ' from top')
                cy.wrap(ele).click()
            }
        })

    })
})