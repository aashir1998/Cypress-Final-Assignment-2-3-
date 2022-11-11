/// <reference types="cypress" />
import 'cypress-v10-preserve-cookie'
import {
  register_successful,unmatched_passwords,username_already_exists,navigate,login,open_account, transfer_funds,
  pay_bill, get_loan, find_transaction_by_id, find_transaction_by_date,
   find_transaction_by_amount, find_transaction_by_date_range, set_session,set_viewport,set_fixtures
}
from "/Users/aashirahmed/Desktop/Cypress_training_assignment2&3/aasignment2&3/cypress/e2e/page-objects/page-objects.js"



describe('Actions', () => {
  
    let user;
    beforeEach(()=>{
      set_viewport();
      set_session();
      set_fixtures();
      navigate();
      
    })

    it('Eventually, it successfully registers a user and verifies that the user is logged-in after the registration.', () => {
      
      register_successful();
      
      })
      
    it('Verifies that the user is not allowed to sign-up if they try to sign-up with already existing username', () => {
      
      username_already_exists();
    })
    it('Verifies that the user is not allowed to sign-up if they try to sign-up with unmatched passwords.', () => {
   
      unmatched_passwords();
      })
    it('Test Case 2- After logging in, with addition to an existing bank account, open a new bank account and verify that a new account has been created.', () => {
    
      login();
      open_account();
      })
    it('Test Case 3- Transfer funds between two accounts and verify that amount is deducted from Account A and added into Account B.', () => {
      
      login();
      transfer_funds()
      })
    it('Test Case 4- Pay a bill and verify that the bill is paid successfully and also the amount is credited from the correct account. ', () => {
    
      login();
      pay_bill()
      })
    it('Test Case 5- Perform 2-3 transactions and verify that you can find it in Find transaction. Use each finding method i.e. by transaction id, by date, by date range and amount. Verify that correct results appear in searches. ', () => {
      login();
      pay_bill() 
      pay_bill() 
      find_transaction_by_id();
      find_transaction_by_date();
      find_transaction_by_date_range();
      find_transaction_by_amount();
      })
      
    it.only('Test Case 6- Request a loan and verify that in Account Overview, the correct amount is reflected under Balance total.', () => {
      //register_successful();
      login();
      get_loan();
      })
    })
    
      
    
    

