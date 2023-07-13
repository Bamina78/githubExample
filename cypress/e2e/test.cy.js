describe("Nopcommerce", () => {
  beforeEach("", () => {
    cy.visit("demo.nopcommerce.com");
  });
  it("Assure Homepage Loads properly", () => {
    cy.get("#homePage").should("exist");
  });
});
