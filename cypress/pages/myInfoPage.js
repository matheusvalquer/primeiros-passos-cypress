class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            genericComboBox: ".oxd-select-text--arrow",
            brazilianItem: ':nth-child(27) > span',
            marriedItem: '.oxd-select-dropdown > :nth-child(3)',
            submitButton: "button.oxd-button"
        }

        return selectors
    }
    
    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }    

    fillEmployeeDetails(employeeId, otherId, driversLicenseDate, licenseExpiryDate){  
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }    

    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().brazilianItem).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().marriedItem).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type("2023-07-03")
        cy.get(this.selectorsList().dateCloseButton).click()
    }
        
    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')

    }    
    }


export default MyInfoPage