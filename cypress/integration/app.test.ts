import "cypress-file-upload";

describe("E2E TESTS", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Front page opens and there is header, file input and submit button elements", () => {
    cy.contains("file parser");
    cy.get("#submit").should("exist");
    cy.get("#file").should("exist");
  });

  it("File input renders packages", () => {
    cy.fixture("poetry.lock").then((file) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: file.toString(),
        fileName: "poetry.lock",
        mimeType: "application/toml",
      });
    });

    cy.get("#submit").click();

    cy.get("#package-list").should("exist");
    cy.get("#zipp").should("have.text", "zipp");
    cy.get("#atomicwrites").should("have.text", "atomicwrites");
  });
  it("Clicking package goes to package info", () => {
    cy.fixture("poetry.lock").then((file) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: file.toString(),
        fileName: "poetry.lock",
        mimeType: "application/toml",
      });
    });

    cy.get("#submit").click();

    cy.get("#atomicwrites").click();

    cy.contains("Package info");
    cy.contains("Atomic file writes");
    cy.contains("No dependencies");
    cy.contains("pytest");
  });
});
