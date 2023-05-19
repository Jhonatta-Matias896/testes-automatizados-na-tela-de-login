const faker = require ('faker-br')
describe('', () => {
    beforeEach(()=>{
        cy.visit('/')
        cy.loginComands('standard_user', 'secret_sauce')
        cy.get('.title').should('have.text', 'Products');
        
        
        });


it('Teste 01: validação do campo com first name obrigatorio', () =>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should('have.text', 'Your Cart')
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')
    cy.get('[data-test="firstName"]').type('Adolfo')
    cy.get('[data-test="continue"]').click()






});

it('Teste 02: validação do campo com last name obrigatorio', () =>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should('have.text', 'Your Cart')
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Adolfo')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('have.text', 'Error: Last Name is required')
    cy.get('[data-test="lastName"]').type('Epaminondas')
    cy.get('[data-test="continue"]').click()

    





});

it('Teste 03: Validação do campo com CEP obrigatorio', () =>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should('have.text', 'Your Cart')
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Adolfo')
    cy.get('[data-test="lastName"]').type('Epaminondas')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('have.text', 'Error: Postal Code is required')





});

it('Teste 04: Validação do campo com CEP obrigatorio', () =>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should('have.text', 'Your Cart')
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type(faker.name.firstName());
    cy.get('[data-test="lastName"]').type(faker.name.lastName());
    cy.get('[data-test="postalCode"]').type(faker.address.zipCodeByState());
   //cy.get('[data-test="continue"]').click()
    //cy.get('[data-test="error"]').should('have.text', 'Error: Postal Code is required')
});


it('Teste 04: Validação do campo com CEP obrigatorio', () =>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should('have.text', 'Your Cart')
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Adolfo')
    cy.get('[data-test="lastName"]').type('Epaminondas')
    cy.get('[data-test="postalCode"]').type('60000.123')
    cy.get('[data-test="continue"]').click()



});

it.only('Teste 05: Validação da página de resumo do pedido', () =>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should('have.text', 'Your Cart')
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Adolfo')
    cy.get('[data-test="lastName"]').type('Epaminondas')
    cy.get('[data-test="postalCode"]').type('60000.123')
    cy.get('[data-test="continue"]').click()
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.get('.inventory_item_price')
    .then($elementos => {
        const valores = [...$elementos].map(elemento => parseFloat(elemento.innerText.replace('$', '')));
        expect(valores).to.deep.equal([29.99]);
      });
      cy.get('.summary_info > :nth-child(2)').should('have.text', Cypress.env('cartao') );
      cy.get('.summary_info > :nth-child(4)').should('have.text', Cypress.env('entregador'));
      cy.get('.summary_subtotal_label').should('have.text', 'Item total: $29.99');
      cy.get('.summary_tax_label').should('have.text', 'Tax: $2.40')
      cy.get('.summary_total_label').should('have.text', 'Total: $32.39')
    

    });
    it('Teste 06: Finalização da compra', ()=>{

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should('have.text', 'Your Cart')
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Adolfo')
    cy.get('[data-test="lastName"]').type('Epaminondas')
    cy.get('[data-test="postalCode"]').type('60000.123')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')


    });

    it('Teste 07: Finalização da compra com dados aleatorios', ()=>{

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should('have.text', 'Your Cart')
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Adolfo')
    cy.get('[data-test="lastName"]').type('Epaminondas')
    cy.get('[data-test="postalCode"]').type('60000.123')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')


    })



})
