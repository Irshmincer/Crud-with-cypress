import { eq } from 'cypress/types/lodash';

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/list');

    cy.get('.add-new').click();

    cy.wait(2000);
    cy.get('#name').type('Automation');
    cy.get('#mobile').type('1234567890');
    cy.get('#email').type('xxx@gmail.com');
    cy.get('#dropdown').select('Male');
    cy.get('.mat-focus-indicator').click();
    cy.contains('24').click();
    cy.get('[value="User"]').first().check();
    cy.get('[type="checkbox"]').check();
    cy.get('.save').click();

    cy.wait(2000);
    cy.get('.add-new').click();

    cy.get('#name').type('Testing');
    cy.get('#mobile').type('0987456120');
    cy.get('#email').type('yyy@gmail.com');
    cy.get('#dropdown').select('Female');
    cy.get('.mat-focus-indicator').click();
    cy.contains('15').click();
    cy.get('[value="Admin"]').check();
    cy.get('[type="checkbox"]').check();
    cy.get('.save').click();

    cy.wait(2000);
    cy.get('.add-new').click();
    cy.get('#name').type('Sample');
    cy.get('#mobile').type('6549873210');
    cy.get('#email').type('zzz@gmail.com');
    cy.get('#dropdown').select('Female');
    cy.get('.mat-focus-indicator').click();
    cy.contains('15').click();
    cy.get('[value="User"]').check();
    cy.get('[type="checkbox"]').check();
    cy.get('.save').click();

    cy.wait(2000);

    cy.get('.edit').eq(1).click({ multiple: true });
    cy.wait(1500);
    cy.get('#name').clear();
    cy.wait(1000);
    cy.get('#name').type('Updated Automation');

    cy.get('.save').click();

    cy.wait(2000);

    cy.get('.delete').eq(1).click();
    cy.get('.delete').eq(2).click();
    cy.get('.delete').eq(0).click();
    cy.get('.delete').click();
  });
});
