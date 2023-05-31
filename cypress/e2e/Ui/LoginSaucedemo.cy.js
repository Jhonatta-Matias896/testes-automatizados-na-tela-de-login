const elementosL= require ('../../support/loginElements').ELEMENTS


describe('testes realizados na tela de login', () => {
    beforeEach(function () {

        cy.visit('/')
    })

    it('Teste 01 login com dados validos teste com sucesso', () => {


        cy.loginComands(Cypress.env('usuario01'), Cypress.env('senha'));
        cy.get(elementosL.logoSwagLabs).should('have.text', 'Swag Labs')


        // cy.get('[data-test="username"]').type('standard_user')
        // cy.get('[data-test="password"]').type('secret_sauce')
        // cy.get('[data-test="login-button"]').click()
        // cy.get('.app_logo').should('be.visible', 'Swag Labs')


    })

    it('Teste 02 usuário bloqueado', () => {
        cy.get(elementosL.campoUserName).type('locked_out_user')
        cy.get(elementosL.campoPassWord).type(Cypress.env('senha'))
        cy.get(elementosL.btnLogin).click()
        cy.get(elementosL.menssagemDeErro).should('be.visible').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')



    });

    it('Teste 03 usuário correto e campo de senha vazio', () => {
        cy.get(elementosL.campoUserName).type('standard_user')
        cy.get(elementosL.campoPassWord).type('{insert}')
        cy.get(elementosL.btnLogin).click()
        cy.get(elementosL.menssagemDeErro).should('be.visible')
        cy.get(elementosL.menssagemDeErro).should('have.text', 'Epic sadface: Password is required')



    });

    it('Teste 04 campo de usuário vazio e senha correta', () => {
        cy.get(elementosL.campoUserName).type('{insert}')
        cy.get(elementosL.campoPassWord).type(Cypress.env('senha'))
        cy.get(elementosL.btnLogin).click()
        cy.get(elementosL.menssagemDeErro).should('be.visible')
        cy.get(elementosL.menssagemDeErro).should('have.text', 'Epic sadface: Username is required')

    })

    it('Teste 05 validação da imagem do item vendido', () => {
        const mochila = "/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg"
        

        cy.get(elementosL.campoUserName).type(Cypress.env('usuario01'))
        cy.get(elementosL.campoPassWord).type(Cypress.env('senha'))
        cy.get(elementosL.btnLogin).click()
        cy.get(elementosL.imgMochila).invoke('attr', 'src').then((imagemExibida) => {
            expect(imagemExibida).to.eq(mochila)
        });





    })
     //CORRIGIR O ULTIMO GET

    it('Teste 06 validação da imagem do item vendido', () => {
        const onesie = "/static/media/red-onesie-1200x1500.2ec615b2.jpg"
        

        cy.get(elementosL.campoUserName).type(Cypress.env('usuario01'))
        cy.get(elementosL.campoPassWord).type(Cypress.env('senha'))
        cy.get(elementosL.btnLogin).click()     
        cy.get(elementosL.roupaDeBebe).invoke('attr', 'src').then((imagemExibida) => {
            expect(imagemExibida).to.equal(onesie)
        });



    });


   

})