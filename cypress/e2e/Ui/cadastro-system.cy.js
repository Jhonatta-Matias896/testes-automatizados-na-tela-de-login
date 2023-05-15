



describe('Testes realizados na tela de cadastro', () =>{
    beforeEach(()=>{
        
    

        cy.visit('https://jgsl-systemcalling.netlify.app/')
    })

    it('Teste 01 válida se é possível se cadastrar no site', () =>{
        
        cy.cadastroComands()
        

        
        // cy.get('.buttonLinkHomeRegister').click()
        // cy.get('h1').should('be.visible', 'have.text', 'Vamos trabalhar!')
        // cy.get('[placeholder="Nome"]').type()
        // cy.get('[placeholder="Telefone"]').type('73982245157')
        // cy.get('[placeholder="Email"]').type()
        // cy.get('[type="password"]').type()
        // cy.get('.buttonRegister').click()
        // cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Ops, algo deu errado.')
    })

})