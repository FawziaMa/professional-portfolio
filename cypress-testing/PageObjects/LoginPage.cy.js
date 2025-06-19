
class LoginPageCy {

    visitSite(){
        cy.visit('/')
        cy.on('uncaught:exception', (err, runnable) => {
      return false

    })
         cy.wait(3000)

    }


    fillUsername(username){
        const field = cy.get("input[placeholder='Email']")
        field.clear()
        field.type(username);
        return this
    }

    fillPassword(password){
        const field = cy.get("input[placeholder='Password']")
        field.clear();
        field.type(password);
        return this
    }

    submit(){
        const button = cy.get('.Submit');
        button.click()
    }

    getProfile() {
        const username = cy.get('.mantine-UnstyledButton-root .mantine-Text-root').eq(1)
        username.click()
    }
}

export default LoginPageCy


