import LoginPageCy from "./LoginPage.cy";

class UsersPageCy {

    clickUsersPage(){
        cy.contains('Users').click()
    }

    clickNewUser() {
        cy.contains('New User').click()
    }

    enterFirstName(value) {
        const field = cy.get('input[data-path="firstName"]')
        field.clear()
        field.type(value).type('{enter}')
    }

    enterLastName(value) {
        const field = cy.get('input[data-path="lastName"]')
        field.clear()
        field.type(value).type('{enter}')
    }

    enterUsername(value) {
        const field = cy.get('input[data-path="username"]')
        field.clear()
        field.type(value).type('{enter}')
    }

    selectRole(value) {
        cy.get('.dropdown-menu').select(value)
    }

    clickAddUser() {
        cy.contains('Add User').click()
    }

    searchFor(value) {
        const field = cy.get('.mantine-TextInput-input')
        field.clear()
        field.type(value).type('{enter}')
        return this
    }

    getResults() {
        cy.get('.mantine-datatable')
    }

    verifyResultsContain(value) {
        cy.get('.mantine-datatable')
            .should('contain.text', value);
    }

    verifyUserCreated(value) {
        cy.get('[data-testid="success-message"]').should('contain', value)
    }


}

export default UsersPageCy