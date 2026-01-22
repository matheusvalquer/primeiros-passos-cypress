import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passworldFiel: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialAlert: "[role='alert']"
  }

 

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passworldFiel).type(userData.userSuccess.passworld)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passworldFiel).type(userData.userFail.passworld)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)   
  })
})