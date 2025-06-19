import UsersPageCy from "../PageObjects/UsersPage.cy"

const users = new UsersPageCy()
const firstName = 'ryan'
const lastName = 'smith'
const username = 'smithryan'


describe('Manage users', () => {

  it("Creates a user", () => {
    users.clickUsersPage()
    users.clickNewUser()
    users.enterFirstName(firstName)
    users.enterLastName(lastName)
    users.enterUsername(username)
    users.selectRole('User')
    users.clickAddUser()
    users.verifyUserCreated(username)

  })

  it('Searches for username', () => {
    users.clickUsersPage()
    users.searchFor(username)
    users.getResults()
    users.verifyResultsContain(username)
  })


})


