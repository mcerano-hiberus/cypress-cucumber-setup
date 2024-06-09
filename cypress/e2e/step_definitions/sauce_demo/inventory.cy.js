import { Then } from '@badeball/cypress-cucumber-preprocessor';
import inventoryPage from "../../../pages/saucedemo/inventory"

Then('the inventory page is displayed', function() {
    inventoryPage.getPageTitle().should('be.visible')
})
