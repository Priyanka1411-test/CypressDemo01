/// <reference types = "cypress"/>
describe('Automation Test Suite - Fixtures', function () {
    before(function () {
        cy.fixture('locators').then(function (data) {
          this.data = data;
        })
      })

it('big_basket-test',function(){
    cy.visit(this.data.URL)
    
     cy.get(this.data.SearchBarInputField).type('tea')
     cy.get(this.data.ItemNo2FromAutoSuggestion)
     .click()
     cy.get(this.data.QuantityText).clear().type('2')
     cy.get(this.data.AddToBasketButton).click()
})
})