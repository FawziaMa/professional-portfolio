import StoragePageCy from "../PageObjects/StoragePage.cy";
import LoginPageCy from "../PageObjects/LoginPage.cy";

const storage = new StoragePageCy()
const login = new LoginPageCy()

const searchKeywordValid = 'Planter pots'
const searchKeywordInvalid = 'asdf'



describe('Storage Features', () => {
 
   context('Visit site', () => {
     beforeEach(function () {
       login.visitSite()
       login.fillUsername('fawzia')
       login.fillPassword('Test@123')
       login.submit()
     })


     it('Search storage for valid item', () => {
       storage.clickStoragePage()
       storage.clickMenu()
       storage.searchStorage(searchKeywordValid)
       storage.verifyValidSearchResults(searchKeywordValid)

     })

     it('Search storage for invalid item', () => {
       storage.clickStoragePage()
       storage.clickMenu()
       storage.searchStorage(searchKeywordInvalid)
       storage.verifyInvalidSearchResults(searchKeywordInvalid)


     })

   })


})