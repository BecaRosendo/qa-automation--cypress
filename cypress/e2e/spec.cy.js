describe('OrangeHRM TESTS', () => {
    it (" Login com sucess", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type("Admin")
        cy.get('[name="password"]').type("admin123")
        cy.get('.oxd-button').click()
        cy.location("pathname").should("include", "/dashboard")
        cy.get(".oxd-topbar-header-breadcrumb> .oxd-text").contains("Dashboard")
    })
})

    it (" Login - fail", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type("test")
        cy.get('[name="password"]').type("test")
        cy.get('.oxd-button').click()
      cy.get('.oxd-alert')
    })