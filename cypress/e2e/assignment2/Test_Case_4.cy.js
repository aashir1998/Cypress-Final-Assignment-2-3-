/// <reference types="cypress" />
import 'cypress-v10-preserve-cookie'
import {
  set_fixtures,set_session,set_viewport,navigate,login,pay_bill,logout
}
from "/Users/aashirahmed/Desktop/Cypress_training_assignment2&3/aasignment2&3/cypress/e2e/page-objects/page-objects.js"

describe('Pay a Bill', () => {
  
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

    it('Test Case 4- Pay a bill and verify that the bill is paid successfully and also the amount is credited from the correct account. ', () => {
    
      login();
      pay_bill()
      })
    
    })