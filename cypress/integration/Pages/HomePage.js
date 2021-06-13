class HomePage {

    shopIcon(){
        return cy.get('.navbar').contains('Shop');
    }
}

export default HomePage;