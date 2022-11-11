/// <reference types="cypress" />
import 'cypress-v10-preserve-cookie'
import {
  set_fixtures,set_session,set_viewport,navigate,login,transfer_funds
}
from "/Users/aashirahmed/Desktop/Cypress_training_assignment2&3/aasignment2&3/cypress/e2e/page-objects/page-objects.js"




describe('Transfer Funds', () => {
    beforeEach(()=>{
      set_viewport();
      set_session();
      set_fixtures();
      navigate();
      
    })

   
    it('Test Case 3- Transfer funds between two accounts and verify that amount is deducted from Account A and added into Account B.', () => {
      
      login();
      transfer_funds()
      })
    
    })