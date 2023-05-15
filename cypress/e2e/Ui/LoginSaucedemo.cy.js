


describe('testes realizados na tela de login', () => {
    beforeEach(function () {

        cy.visit('https://www.saucedemo.com/')
    })

    it('Teste 01 login com dados validos teste com sucesso', () => {


        cy.loginComands('standard_user', 'secret_sauce');
        cy.get('.app_logo').should('have.text', 'Swag Labs')


        // cy.get('[data-test="username"]').type('standard_user')
        // cy.get('[data-test="password"]').type('secret_sauce')
        // cy.get('[data-test="login-button"]').click()
        // cy.get('.app_logo').should('be.visible', 'Swag Labs')


    })

    it('Teste 02 usuário bloqueado', () => {
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')



    });

    it('Teste 03 usuário correto e campo de senha vazio', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('{insert}')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')



    });

    it('Teste 04 campo de usuário vazio e senha correta', () => {
        cy.get('[data-test="username"]').type('{insert}')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')

    })

    it('Teste 05 validação da imagem do item vendido', () => {
        const mochila = "/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg"
        

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()     
        cy.get('#item_4_img_link > .inventory_item_img').invoke('attr', 'src').then((imagemExibida) => {
            expect(imagemExibida).to.eq(mochila)
        });





    })
     //CORRIGIR O ULTIMO GET

    it('Teste 06 validação da imagem do item vendido', () => {
        const onesie = "/static/media/red-onesie-1200x1500.2ec615b2.jpg"
        

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()     
        cy.get('#item_2_img_link > .inventory_item_img').invoke('attr', 'src').then((imagemExibida) => {
            expect(imagemExibida).to.equal(onesie)
        });



    });


   

})