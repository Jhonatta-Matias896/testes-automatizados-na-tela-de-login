//https://automationexercise.com/
const telaInicial = require('../../support/loginElements').ELEMENTS
const elemento = require('../../support/Elementos/telaInicialElements').elementsInit

describe('Validação de compras ', () => {
    beforeEach(() => {
        cy.visit('/')
        //cy.visit('https://www.saucedemo.com/')
        cy.loginComands(Cypress.env('usuario01'), Cypress.env('senha'));

    })

    it('Teste 01: tela inicial dos produtos validação dos botões de ADICIONAR e REMOVER do carrinho', () => {

        cy.get(telaInicial.addMochiladoCarrinho).click()
        cy.get(telaInicial.rmMochiladoCarrinho).should('contain', 'Remove')
        cy.get(telaInicial.rmMochiladoCarrinho).click()
        cy.get(telaInicial.addMochiladoCarrinho).should('contain', 'Add to cart')



    });

    it('Teste 02: válida se é possível remover algum produto diretamente da página do carrinho', () => {
        cy.adicionarUmProduto();

        cy.get('.shopping_cart_link').click()
        cy.get(telaInicial.rmMochiladoCarrinho).should('contain', 'Remove')
        cy.get(telaInicial.rmMochiladoCarrinho).click()
        cy.get('.shopping_cart_link').should('be.visible')
    });

    it('Teste 03: Válida se é possível alterar o filtro de pesquisa de A a Z para Z a A', () => {

        cy.get('[data-test="product_sort_container"]')
            .select('Name (Z to A)')
        cy.get('.select_container')
            .should('contain', 'Name (Z to A)')



    });

    it('Teste 04: Válida se é possível alterar o filtro de pesquisa do MENOR para o MAIOR', () => {

        cy.get('[data-test="product_sort_container"]')
            .select('Price (low to high)')
        cy.get('.select_container')
            .should('contain', 'Price (low to high)')


    });

    it('Teste 05: Válida se é possível alterar o filtro de pesquisa do MAIOR para o MENOR', () => {

        cy.get('[data-test="product_sort_container"]')
            .select('Price (high to low)')
        cy.get('.select_container')
            .should('contain', 'Price (high to low)')
    });

    it('Teste 07: Válida se o ícone do facebook contém um link da página de facebook da Saucelabs', () => {
        cy.get('.social_facebook > a').should('have.attr', 'target', '_blank')
        cy.get('.social_facebook > a').invoke('removeAttr', 'target').click()
        cy.contains('Facebook').should('be.visible')

            


    });
    //CODIGO QUEBRADO
    it.only('Teste 08: Válida se o ícone do Linkedin contém um link da página de Linkedin da Saucelabs', () => {
        cy.get('.social_linkedin > a').should('have.attr', 'target', '_blank')
        cy.get('.social_linkedin > a').invoke('removeAttr', 'target').click()
        cy.contains('Serviços e consultoria de TI').should('to.be.visible')
            



    });

    it('Teste 09: Válida se o ícone do Tweeter contém um link da página de Tweeter da Saucelabs', () => {
        cy.get('.social_twitter > a').should('have.attr', 'target', '_blank')
        cy.get('.social_twitter > a').invoke('removeAttr', 'target').click()
        cy.contains('@saucelabs').should('be.visible')


            



    });

    // it('Teste 02 validação de itens adicionados no carrinho, ainda em tela inicial', ()=>{
    //     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    //     cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    //     cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    //     cy.get('.shopping_cart_link').should('have.text', '1')
    // });

    // it('validação de itens removidos  do carrinho', ()=>{
    //     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    //     cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    //     cy.get('.shopping_cart_badge').should('not.exist')

    // });

    





})