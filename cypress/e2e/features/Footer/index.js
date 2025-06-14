import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que visito la página principal', () => {
  cy.visit('/');
});

Then('el footer debe mostrar la lista de nombres:', (dataTable) => {
  dataTable.hashes()).forEach(({nombre}) => {
    cy.get('footer').contains(nombre).should('be.visible');
  });
});