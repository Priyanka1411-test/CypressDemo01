export class LoginPage {

loginpage_username = '#uname'
loginpage_password = '#pwd'
loginpage_submitButton = '[type="submit"]'


loginWithValidCredentials(username:string,password:string){
    cy.get(this.loginpage_username).type(username)
    cy.get(this.loginpage_password).type(password)
    cy.get(this.loginpage_submitButton).click()
    cy.contains('Login Successful')
    cy.clickLink('here')

}
loginWithInvalidCredentials(username:string,password:string){
    cy.get(this.loginpage_username).type(username)
    cy.get(this.loginpage_password).type(password)
    cy.get(this.loginpage_submitButton).click()
   // cy.contains('Login unsuccessful')
   cy.wait(3000)
    cy.on('window:alert',(txt)=>{
        expect(txt).to.be.equal('Wrong Credentials! Try again!')
    })

}
    navigate(url: string) {
        cy.visit(url,{failOnStatusCode: false})

    }
    enterUserName(username : string) {
        cy.get(this.loginpage_username).type(username)

    }
    enterPassword(password : string) {
        cy.get(this.loginpage_password).type(password)

    }
    clickLogin() {
        cy.get(this.loginpage_submitButton).click()

    }
}