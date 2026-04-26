import userData from '../fixtures/user-data.json'


describe('OrangeHRM TESTS', () => {

    const selectorList = {  

        usernameField:"[name='username']",
        passwordField:"[name='password']",
        loginButton: "[type='submit']",
        sectionTitle: ".oxd-topbar-header-breadcrumb> .oxd-text",
        wrongCredentialAlert: ".oxd-alert"
    }

    it (" Login com sucess", () => {
        cy.visit('/auth/login')
        cy.get(selectorList.usernameField).type(userData.userSucess.username)
        cy.get(selectorList.passwordField).type(userData.userSucess.password)
        cy.get(selectorList.loginButton).click()
        cy.location("pathname", {timeout: 10000}).should("include", "/dashboard/index")
        cy.get(selectorList.sectionTitle).contains("Dashboard")
    })


    it (" Login - fail", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorList.usernameField).type(userData.userFail.username)
        cy.get(selectorList.passwordField).type(userData.userFail.password)
        cy.get(selectorList.loginButton).click()
        cy.get(selectorList.wrongCredentialAlert)
    })
})