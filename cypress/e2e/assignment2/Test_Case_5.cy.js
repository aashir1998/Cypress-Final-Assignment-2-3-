/// <reference types="cypress" />
import 'cypress-v10-preserve-cookie'
import {
  
  set_fixtures,set_session,set_viewport,navigate,login,pay_bill,find_transaction_by_amount,find_transaction_by_date,
  find_transaction_by_date_range,find_transaction_by_id,logout
}
from "/Users/aashirahmed/Desktop/Cypress_training_assignment2&3/aasignment2&3/cypress/e2e/page-objects/page-objects.js"




describe('Find Transaction', () => {
  
    beforeEach(()=>{
      set_viewport();
      set_session();
      set_fixtures();
      navigate();
      
    })
    after(()=> {
      logout();
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
      
    })