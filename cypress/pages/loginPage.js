class LoginPage {

    selectorsList () {
        const selectors = {
            usernameField: '[name="username"]',
            passworldFiel: '[name="password"]',
            loginButton: '.oxd-button',
            wrongCredentialAlert: "[role='alert']",
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passworldFiel).type(password)
        cy.get(this.selectorsList().loginButton).click()

    }
}

export default LoginPage