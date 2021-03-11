import { LoginPage } from '../pages/login_page'


beforeEach(function(){
        
    cy.log('i am outside describe block')

})
describe('allLoginTest', function () {
    let loginpage = new LoginPage()

    beforeEach(function(){
        
        loginpage.navigate('https://trytestingthis.netlify.app/')
        

    })
    it('login test-valid cred', () => {

         loginpage.loginWithValidCredentials('test', 'test')
         cy.url().should('include', '/login')
         cy.get('').select('').should('have.value','')
         cy.contains('').trigger('mouseover')
         cy.contains('').check().parent().should('have.class','checked')
    })

    it('login test-invalid cred', () => {

        loginpage.loginWithInvalidCredentials('test1', '123')

    })
})





    // loginpage.enterUserName('test')
    // loginpage.enterPassword('test')
    // loginpage.clickLogin()

// cy.visit('https://trytestingthis.netlify.app/')

// cy.get('#uname').type('test')

// cy.get('#pwd').type('test')

// cy.get('[type="submit"]').click()

// cy.contains('Login Successful')
