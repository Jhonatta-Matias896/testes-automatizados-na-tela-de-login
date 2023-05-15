describe('Validação na tela de login  ', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')

    });

    it('Teste 1: Verificar título do ambiente testado', () => {
        cy.title().should('be.equal', 'Swag Labs')

    });


    it('Teste 1.1: Verificar se a página contém a logomarca do ambiente testado', () => {
        cy.get('.login_logo').should('have.text', 'Swag Labs')
    });


    it('Teste 02: Verificar se a página contém um campo específico para inserir um usuário', () => {
        cy.get('input[type="text"][id="user-name"]').should('exist', 'Username')
        //cy.get('[data-test="username"]').should('exist', 'Username')
    });


    it('Teste 03: Verificar se ao acessar a página o campo de usuário está vazio', () => {
        cy.get('input[type="text"][id="user-name"]')
            .should('have.value', '')

    });


    it('Teste 04: Verificar se a página contém um campo específico para inserir a senha', () => {
        cy.get('input[type="password"][id="password"]').should('exist', 'Password')

    });


    it('Teste 05: Verificar se ao acessar a página o campo de e-mail está vazio', () => {
        cy.get('input[type="password"][id="password"]')
            .should('have.value', '')

    });

    it('Teste 06: Verificar se o ambiente testado contém um botão do tipo submit para a realização do login', () => {
        cy.get('input[type="submit"][id="login-button"]')
            .should('have.value', 'Login')

    });

    it('Teste 07: Verificação  de login com dados válidos teste com sucesso', () => {


        cy.loginComands('standard_user', 'secret_sauce');
        cy.get('.title').should('have.text', 'Products')


        // cy.get('[data-test="username"]').type('standard_user')
        // cy.get('[data-test="password"]').type('secret_sauce')
        // cy.get('[data-test="login-button"]').click()
        // cy.get('.app_logo').should('be.visible', 'Swag Labs')


    })

    it('Teste 08: Verificação de login usuário bloqueado', () => {
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
            .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')



    });

    it('Teste 09: Verificação de login usuário correto e campo de senha vazio', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('{insert}')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')



    });

    it('Teste 10: Verificação de login campo de usuário vazio e senha correta', () => {
        cy.get('[data-test="username"]').type('{insert}')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')

    });


























})