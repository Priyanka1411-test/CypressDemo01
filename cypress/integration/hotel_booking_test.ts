/// <reference types = "cypress"/>
it('hotel-test',function(){
cy.visit('http://hotel-test.equalexperts.io/')
cy.get('#firstname').type('demo11')
cy.get('#lastname').type('demo22')
cy.get('#totalprice').type('1000')
cy.get('#depositpaid').select('true')
cy.get('#checkin').click().type('2021-03-19')
 cy.get('#checkout').click().type('2021-03-20')

 cy.get('#form > .row > :nth-child(7) > input').click()


})