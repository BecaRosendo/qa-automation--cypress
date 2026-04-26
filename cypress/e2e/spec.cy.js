
describe('OrangeHRM TESTS', () => {


    const selectorList = {  

        usernameField:"[name='username']",
        passwordField:"[name='password']",
        loginButton: "[type='submit']",
        sectionTitle: ".oxd-topbar-header-breadcrumb> .oxd-text",
        wrongCredentialAlert: ".oxd-alert"
    }
    it (" Login com sucess", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorList.usernameField).type("Admin")
        cy.get(selectorList.passwordField).type("admin123")
        cy.get(selectorList.loginButton).click()
        cy.location("pathname").should("include", "/dashboard")
        cy.get(selectorList.sectionTitle).contains("Dashboard")
    })


    it (" Login - fail", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorList.usernameField).type("test")
        cy.get(selectorList.passwordField).type("test")
        cy.get(selectorList.loginButton).click()
        cy.get(selectorList.wrongCredentialAlert)
    })
})