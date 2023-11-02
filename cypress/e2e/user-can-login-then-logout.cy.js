describe("User can login to system", () => {
  //positive test case
  it('user can login with valid username and password', () => {
    //arrange
    cy.visit("http://127.0.0.1:8000/")

    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  })
})