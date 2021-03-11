


describe('read write file demo',function(){

    beforeEach(function(){
        cy.fixture('example.json').as ('data')
    })
    it('read file using fixture',function(){
        cy.fixture('example.json')
        .its('name').should('eql','cypress')
        cy.log(this.data.name)
        cy.log(this.data.email)
    })
    it('read file using CMD',function(){
        cy.readFile('./cypress/fixtures/example.json')
        .its('name').should('eql','cypress')
    })
    it('write file demo',function(){
        cy.writeFile('sample.txt','hello i am learning cypress\n')
        cy.writeFile('sample.txt','\nhello i am learning cypress1', {flag: 'a+'})
    })
})



