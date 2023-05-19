

describe('Testes referentes ao carrinho de compras ', () => {
    beforeEach(() => {
        cy.visit('/')
        //cy.visit('https://www.saucedemo.com/')
        cy.loginComands('standard_user', 'secret_sauce');
    });



    it('Teste 01: Validação de 01 item adicionado ao carrinho ', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.title').should('have.text', 'Your Cart')
        //cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
        cy.contains('Sauce Labs Backpack').should('be.visible');
    });


    it('Teste 02: Remoção do item do carrinho ', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.title').should('have.text', 'Your Cart')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        //cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
        cy.contains('Sauce Labs Backpack').should('not.exist');
    });
    it('Teste 03: Validação de 01 item adicionado ', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.title').should('have.text', 'Your Cart')
        //cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
    });

    it.only('Teste 04: Validação da remoção de 02 itens do carrinho ', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.title').should('have.text', 'Your Cart')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        //cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
        cy.contains('Sauce Labs Backpack').should('not.exist')
        cy.contains('Sauce Labs Bolt T-Shirt').should('not.exist')
    });






});