/// <reference types="cypress" />
import 'cypress-v10-preserve-cookie'
import {
  set_fixtures,set_session,set_viewport,navigate,login,open_account
}
from "/Users/aashirahmed/Desktop/Cypress_training_assignment2&3/aasignment2&3/cypress/e2e/page-objects/page-objects.js"




describe('Open a Bank Account', () => {
  
  
    beforeEach(()=>{
      set_viewport();
      set_session();
      set_fixtures();
      navigate();
      
    })

    
    it('Test Case 2- After logging in, with addition to an existing bank account, open a new bank account and verify that a new account has been created.', () => {
    
      login();
      open_account();
      })
    
    })