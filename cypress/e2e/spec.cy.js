const login = () => {
  cy.session("1", () => {
    cy.setCookie("testCookie", "12345");
  });
};

describe("test", { testIsolation: "legacy" }, () => {
  before(() => {
    login();
    cy.visit("cypress/fixtures/test.html");
  });

  it("page is loaded and session exists", () => {
    expect(Cypress.config("testIsolation")).to.be.eq("legacy");
    cy.location("pathname").should("eq", "/cypress/fixtures/test.html");
    cy.getCookie("testCookie").should(
      "have.property",
      "value",
      "12345"
    );
  });

  it("page is still loaded and session exists", () => {
    cy.location("pathname").should("eq", "/cypress/fixtures/test.html");
    cy.getCookie("testCookie").should(
      "have.property",
      "value",
      "12345"
    );
  });
});
