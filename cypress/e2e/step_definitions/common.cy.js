import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the user navigates to Sauce Demo', function() {
    cy.visit('/')
})

Then('the url should contain {string}', function(urlContained) {
    cy.url().should('contain', urlContained)
})