/// <reference types="cypress" />

export function navigate() {
    cy.visit("/")
  }
export function set_session() {
  cy.preserveCookieOnce('connect.session')
  cy.viewport(1280, 720)
}
export function set_viewport() {
  cy.viewport(1280, 720)
}
export function set_fixtures() {
  cy.fixture('users').as('usersDataWithAlias')
}
export function logout() {
  
}
  
export function register_successful() {
  cy.get('@usersDataWithAlias').then((users) =>{
      cy.get('#loginPanel > :nth-child(3) > a').click()
      cy.get('[name="customer.firstName"]').type(users.firstname)
      cy.get('[name="customer.lastName"]').type(users.lastname)
      cy.get('[name="customer.address.street"]').type(users.address)
      cy.get('[name="customer.address.city"]').type(users.city)
      cy.get('[name="customer.address.state"]').type(users.state)
      cy.get('[name="customer.address.zipCode"]').type(users.zipcode)
      cy.get('[name="customer.phoneNumber"]').type(users.phone)
      cy.get('[name="customer.ssn"]').type(users.ssn)
      cy.get('[name="customer.username"]').type(users.username)
      cy.get('[name="customer.password"]').type(users.password)
      cy.get('[name="repeatedPassword"]').type(users.confirm)
      cy.get('[value="Register"]').click()  
      cy.get('.title').contains('Welcome')
      // to be added for test case 2
      // cy.get('#leftPanel > ul > :nth-child(1) > a').click();
})}

  
  export function username_already_exists() {
    cy.get('@usersDataWithAlias').then((users) =>{
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('[name="customer.firstName"]').type(users.firstname)
        cy.get('[name="customer.lastName"]').type(users.lastname)
        cy.get('[name="customer.address.street"]').type(users.address)
        cy.get('[name="customer.address.city"]').type(users.city)
        cy.get('[name="customer.address.state"]').type(users.state)
        cy.get('[name="customer.address.zipCode"]').type(users.zipcode)
        cy.get('[name="customer.phoneNumber"]').type(users.phone)
        cy.get('[name="customer.ssn"]').type(users.ssn)
        cy.get('[name="customer.username"]').type(users.username)
        cy.get('[name="customer.password"]').type(users.password)
        cy.get('[name="repeatedPassword"]').type(users.confirm)
        cy.get('[value="Register"]').click()  
        cy.get('.error').contains("This username already exists")
        })
  }
  
  export function unmatched_passwords() {
    cy.get('@usersDataWithAlias').then((users) =>{
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('[name="customer.firstName"]').type(users.firstname)
        cy.get('[name="customer.lastName"]').type(users.lastname)
        cy.get('[name="customer.address.street"]').type(users.address)
        cy.get('[name="customer.address.city"]').type(users.city)
        cy.get('[name="customer.address.state"]').type(users.state)
        cy.get('[name="customer.address.zipCode"]').type(users.zipcode)
        cy.get('[name="customer.phoneNumber"]').type(users.phone)
        cy.get('[name="customer.ssn"]').type(users.ssn)
        cy.get('[name="customer.username"]').type(users.username)
        cy.get('[name="customer.password"]').type(users.password)
        cy.get('[name="repeatedPassword"]').type(users.wrongpass)
        cy.get('[value="Register"]').click()  
        cy.get('[id="repeatedPassword.errors"]').contains("Passwords did not match.")
  })}
  
  export function open_account(name,password) {
    cy.get('#leftPanel > ul > :nth-child(1) > a').click();
    cy.get('div > [value="Open New Account"]').trigger('mouseover').click({ force: true })
    cy.get('div > [value="Open New Account"]').trigger('mouseover').click({ force: true })
    cy.get('div > [value="Open New Account"]').trigger('mouseover').click({ force: true })
    cy.get('div > [value="Open New Account"]').trigger('mouseover').click({ force: true })
    cy.wait(2000)
    cy.get('.ng-scope > :nth-child(2)').contains("Congratulations, your account is now open.")
  }
  export function login() {
    cy.get('@usersDataWithAlias').then((users) =>{
      cy.get('[name="username"]').type(users.logusername)
      cy.get('[name="password"]').type(users.password)
      cy.get('[value="Log In"]').click()
    })
  }
  export function transfer_funds() {
    cy.get('#leftPanel > ul > li:nth-child(3) > a').click()
    cy.wait(1000)
    cy.get('#amount').type("1000")
    cy.get('#toAccountId').select(1)
    cy.get("#rightPanel > div > div > form > div:nth-child(4) > input").click()
    cy.get('[ng-if="showResult"] > .title').contains('Transfer Complete!')

  }
  export function pay_bill() {
    cy.get('@usersDataWithAlias').then((users) =>{
      cy.get("#leftPanel > ul > li:nth-child(4) > a").click()
      cy.get('[name="payee.name"]').type(users.payeename)
      cy.get(' [name="payee.address.street"]').type(users.payeeaddress)
      cy.get(' [name="payee.address.city"]').type(users.payeecity)
      cy.get(' [name="payee.address.state"]').type(users.payeestate)
      cy.get(' [name="payee.address.zipCode"]').type(users.payeezipcode)
      cy.get(' [name="payee.phoneNumber"]').type(users.payeephone)
      cy.get(' [name="payee.accountNumber"]').type(users.payeeaccount)
      cy.get(' [name="verifyAccount"]').type(users.payeeaccount)
      cy.get(' [name="amount"]').type(users.amount)
      cy.get('[value="Send Payment"]').click()
      cy.get('[ng-show="showResult"] > .title').contains("Bill Payment Complete")
    
    })

  }
  export function find_transaction_by_id() {
    cy.get("#leftPanel > ul > li:nth-child(5) > a").click()
    cy.get('#accountId').select(1)
    cy.wait(1000)
    cy.get('[ng-model="criteria.transactionId"]').type("14254")
    cy.get("#rightPanel > div > div > form > div:nth-child(5) > button").click()
    cy.get("#transactionTable > tbody > tr > td:nth-child(2) > a").click()
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains("14254")
  }

export function find_transaction_by_date() {
    cy.get("#leftPanel > ul > li:nth-child(5) > a").click()
    cy.get('#accountId').select(1)
    cy.get('[ng-model="criteria.onDate"]').type("11-07-2022")
    cy.get(':nth-child(9) > .button').click()
    cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').contains("11-07-2022")
}
    
export function find_transaction_by_amount() {
    cy.get("#leftPanel > ul > li:nth-child(5) > a").click()
    cy.get('#accountId').select(1)
    cy.get('[ng-model="criteria.amount"]').type("100")
    cy.get(':nth-child(17) > .button').click()
    cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').click()
    cy.get(':nth-child(5) > :nth-child(2)').contains("100")
  }
export function find_transaction_by_date_range() {
  cy.get("#leftPanel > ul > li:nth-child(5) > a").click()
  cy.get('#accountId').select(1)
  cy.get('[ng-model="criteria.fromDate"]').type("11-01-2022")
  cy.get('[ng-model="criteria.toDate"]').type("11-11-2022")
  cy.get('#rightPanel > div > div > form > div:nth-child(13) > button').click()
  cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').click()
  cy.get('tbody > :nth-child(2) > :nth-child(2)').contains("11-11-2022")
}
export function get_loan(){
  cy.get('#leftPanel > ul > :nth-child(7) > a').click()
  cy.get('#amount').type("1000")
  cy.get('#downPayment').type("100")
  cy.get('[colspan="2"] > .button').click()
  cy.get("#newAccountId").then(($id) => {
    const id=$id.text()
    cy.get('#leftPanel > ul > :nth-child(2) > a').click()
    cy.wait(2000);
    cy.get('#accountTable >tbody >tr').find('td:nth-child(1)').contains(id).click()
    cy.get("#balance").contains('$1000.00')
  })
}