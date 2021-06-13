/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes("Python")) {

                cy.wrap($e1).next().then((price) => {
                    expect(price.text()).to.equal('25');
                })

                // cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                //     const priceText = price.text()
                //     expect(priceText).to.equal('26')
                // })
            }

        })

    })

})