/// <reference types="cypress" />
import 'cypress-v10-preserve-cookie'
import {
  set_fixtures,set_session,set_viewport,navigate,login,get_loan,logout
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
    after(()=> {
      logout();
   })

    it('Test Case 6- Request a loan and verify that in Account Overview, the correct amount is reflected under Balance total.', () => {
      login();
      get_loan();
      })
    })