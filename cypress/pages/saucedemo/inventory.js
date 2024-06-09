class InventoryPage {
    elements = {
        title: () => cy.get('.app_logo')
    }

    getPageTitle() {
        return this.elements.title()
    }

}

module.exports = new InventoryPage();