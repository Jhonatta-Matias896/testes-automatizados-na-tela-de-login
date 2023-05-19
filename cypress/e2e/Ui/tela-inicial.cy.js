//https://automationexercise.com/


describe('Validação de compras ', () => {
    beforeEach(() => {
        cy.visit('/')
        //cy.visit('https://www.saucedemo.com/')
        cy.loginComands('standard_user', 'secret_sauce');

    })

    it('Teste 01: tela inicial dos produtos validação dos botões de ADICIONAR e REMOVER do carrinho', () => {


        cy.adicionarUmProduto();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('contain', 'Add to cart')



    });

    it('Teste 02: válida se é possível remover algum produto diretamente da página do carrinho', () => {
        cy.adicionarUmProduto();

        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain', 'Remove')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
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
        cy.get('.social_facebook > a').click()
            .should('exist', 'https://www.facebook.com/saucelabs')


    });
    it('Teste 08: Válida se o ícone do Linkedin contém um link da página de Linkedin da Saucelabs', () => {
        cy.get('.social_linkedin > a').click()
            .should('exist', 'https://www.linkedin.com/company/sauce-labs/?original_referer=')



    });

    it('Teste 09: Válida se o ícone do Tweeter contém um link da página de Tweeter da Saucelabs', () => {
        cy.get('.social_twitter > a').click()
            .should('exist', 'https://twitter.com/saucelabs')



    });

    it('Teste 02 validação de itens adicionados no carrinho, ainda em tela inicial', ()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').should('have.text', '1')
    });

    it('validação de itens removidos  do carrinho', ()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('not.exist')

    });

    





})