// sample.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />

describe('SanitasTest', () => {

	const email = 'sanitas@test.com';
	const password = '123456';


	// beforeEach(() => {
	// 	cy.visit('http://localhost:4200/login')
	// });
	it('tiene un título', () => {
		cy.contains('Prueba técnica');
		expect(2).to.equal(2);
	});

});
