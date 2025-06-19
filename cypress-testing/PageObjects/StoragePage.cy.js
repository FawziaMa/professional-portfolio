import {values} from "lodash";

class StoragePageCy {

    visitSite() {
        cy.visit('/')
    }


    clickStoragePage() {
        cy.get('a[href="/storage"]').click({force: true})
        cy.url().should('include', '/storage')
    }

    clickMenu() {
        cy.contains('Menu').click({force: true})
        cy.url().should('include', 'menus')
    }

    VerifyMenu() {
        cy.get('.mantine-Card-root')
            .eq(1)
            .invoke('text')
            .then((menuTitle) => {

        cy.get('.mantine-Card-root').eq(1).click()
        cy.url().should('include', 'menus')

                cy.get('input[data-path="name"]')
                    .invoke('val')
                    .then((menuValue) => {
                        expect(menuTitle).to.include(menuValue)

                    })
            })
    }

     clickSubmit() {
        const btn = cy.get('button[type="submit"]')
        btn.click()
    }

    searchStorage(value) {
        const field = cy.get('input[placeholder="Search"]')
        field.clear()
        field.type(value).type('{enter}')
        return this
    }


    verifyValidSearchResults(value) {
        cy.get('.mantine-Table-td').eq(0).should('exist', 'include', value)

    }

     verifyInvalidSearchResults() {
        cy.get('.mantine-Table-td').eq(0).should('exist', 'include', 'No records')
    }


}

export default StoragePageCy