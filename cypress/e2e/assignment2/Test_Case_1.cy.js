/// <reference types="cypress" />
import 'cypress-v10-preserve-cookie'
import {
  register_successful, unmatched_passwords,username_already_exists,navigate, set_session,set_viewport, set_fixtures, logout
}
from "/Users/aashirahmed/Desktop/Cypress_training_assignment2&3/aasignment2&3/cypress/e2e/page-objects/page-objects.js"


describe('Register Test Cases', () => {
    beforeEach(()=>{
      set_viewport();
      set_session();
      set_fixtures();
      navigate();
    })
    

   it('Eventually, it successfully registers a user and verifies that the user is logged-in after the registration.', () => {
    
    register_successful();
    logout();
    
    })

    it('Verifies that the user is not allowed to sign-up if they try to sign-up with already existing username', () => {
      
      username_already_exists();
    })
    it('Verifies that the user is not allowed to sign-up if they try to sign-up with unmatched passwords.', () => {
   
      unmatched_passwords();
      })
    
    })