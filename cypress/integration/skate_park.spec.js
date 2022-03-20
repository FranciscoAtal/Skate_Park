describe("Skate Park", () => {
    it("frontepage can be opened", () => {
        cy.visit("http://localhost:3000/iniciar-sesion");
        cy.contains("Iniciar Sesión");
    });

it("Click test ingresar", () => {
    cy.visit("http://localhost:3000/iniciar-sesion");
    cy.contains("Ingresar").click();
});

it("Click test input", () => {
    cy.visit("http://localhost:3000/iniciar-sesion");
    cy.get("input:first").type("mi_email")
})



});

