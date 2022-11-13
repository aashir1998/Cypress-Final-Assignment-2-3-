/// <reference types="cypress" />
import 'cypress-v10-preserve-cookie'
import {
  
  set_fixtures,set_session,set_viewport,navigate,login,verify_total,logout
}
from "/Users/aashirahmed/Desktop/Cypress_training_assignment2&3/aasignment2&3/cypress/e2e/page-objects/page-objects.js"




describe('Verify total appearing using dummy data', () => {
  
    beforeEach(()=>{
      set_viewport();
      set_session();
      set_fixtures();
      navigate();
      
    })
    after(()=> {
      logout();
   })

    
    it('Verify that the total appearing at the end is correct', () => {
      login();
      verify_total();
      
      })
      
    })
















