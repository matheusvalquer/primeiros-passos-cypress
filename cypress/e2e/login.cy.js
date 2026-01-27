import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passworldFiel: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
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

 

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passworldFiel).type(userData.userSuccess.passworld)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click({ force: true })
    cy.get(selectorsList.firstNameField).clear().type('Matheus')
    cy.get(selectorsList.middleNameField).clear().type('Fierce')
    cy.get(selectorsList.lastNameField).clear().type('Tester')
    cy.get(selectorsList.genericField).eq(3).clear().type("Employee")
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherId test")
    cy.get(selectorsList.genericField).eq(5).clear().type("Drivers test")
    cy.get(selectorsList.dateField).eq(0).clear().type("2026-22-01")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get(selectorsList.brazilianItem).click()
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.get(selectorsList.marriedItem).click()
    cy.get(selectorsList.dateField).eq(1).clear().type("2023-07-03")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    
  
    

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passworldFiel).type(userData.userFail.passworld)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)   
  })
})