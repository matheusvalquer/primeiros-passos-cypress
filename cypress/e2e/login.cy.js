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
    dateCloseButton: ".--close"

  }

 

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passworldFiel).type(userData.userSuccess.passworld)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Name test')
    cy.get(selectorsList.middleNameField).clear().type('MiddleName test')
    cy.get(selectorsList.lastNameField).clear().type('LastName test')
    cy.get(selectorsList.genericField).eq(3).clear().type("Employee")
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherId test")
    cy.get(selectorsList.genericField).eq(5).clear().type("Drivers test")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type("2026-22-01")
    cy.get(selectorsList.dateCloseButton).click()    
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    cy.get('.oxd-toast')


  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passworldFiel).type(userData.userFail.passworld)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)   
  })
})