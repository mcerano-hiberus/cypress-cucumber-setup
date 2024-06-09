import { When } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from "../../../pages/saucedemo/login"

When('the user types the username {string}', function(username) {
    loginPage.typeUsername(username)
})

When('the user types the password {string}', function(password) {
    loginPage.typePassword(password)
})

When('the user clicks on the login button', function(){
    loginPage.clickLogin()
})
