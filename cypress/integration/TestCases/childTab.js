/// <reference types="Cypress" />

describe('Child tab test suite', function() {

    before(function() {
        cy.fixture('childTab').then(function(testData) {
            this.data = testData;
        })
    })

    it('Child tab test case', function() {

        cy.visit(Cypress.env('amazonURL'));
        cy.get("#twotabsearchtextbox").type(this.data.searchTerm)
        cy.get('#nav-search-submit-button').click()

        //All search results in current page
        //cy.get('div[data-cel-widget *= "search_result"] [cel_widget_id *= "MAIN-SEARCH_RESULTS"]').should('have.length',22);

        //First search result
        cy.get('div[data-cel-widget *= "search_result"] [cel_widget_id *= "MAIN-SEARCH_RESULTS"]').eq(0)
        .find('h2 > a').as('firstSearchResult')//.should('have.length',1);

        //Remove attribute and click on the link
        cy.get('@firstSearchResult').invoke('removeAttr','target').click();

        var laptopPrice=0;
        cy.get('#priceblock_ourprice').invoke('text').then(text => {
            cy.log(`The price of the laptop is ${text}`)
            text = text.slice(2);
            cy.log(`Price in rupees : ${text}`);
            text = text.replace(',', '');
            text = parseFloat(text);
            cy.log(`Float value: ${text}`);
            laptopPrice = text;
            expect(text).to.greaterThan(10000);
        }).then(()=>{
            cy.log(`Price outside the block: ${laptopPrice}`);
        })
        cy.log(`Price outside the block: ${laptopPrice}`);
   })
})