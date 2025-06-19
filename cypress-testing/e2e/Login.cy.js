import LoginPageCy from "../PageObjects/LoginPage.cy";

const login = new LoginPageCy();
describe('user can login', () => {


    it('Valid Login Test', () => {
        //Visit site
        login.visitSite();
        //Enter username credentials
        login.fillUsername('fawzia')
        //Enter password credentials
        login.fillPassword('Test@123')
        //Click submit
        login.submit()
    
    })


    it('Valid Log Out', () => {
        //Visit site
        login.visitAdmin();
        //Enter username credentials
        login.fillUsername('fawzia')
        //Enter password credentials
        login.fillPassword('Test@123')
        //Click submit
        login.submit()

        //Click icon
        login.getProfile()
        //Click Log out
        cy.get('.styles_footer__WQ2Eu').click()
        cy.get('.mantine-Menu-dropdown', {timeout: 10000})
            .contains('Log out').click()
        //Verify logged out
        cy.url().should('include', 'signin')
    })

    it('Login Error', () => {
        //Visit site
        login.visitAdmin();
        //Enter username credentials
        login.fillUsername('fawzia')
        //Enter password credentials
        login.fillPassword('asd')
        //Click submit
        login.submit()
        //Verify Error message
        cy.get('.mantine-Alert-wrapper').contains('Incorrect username or password')
    })


})

