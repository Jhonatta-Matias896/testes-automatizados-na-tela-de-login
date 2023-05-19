const faker = require ('faker-br')
const name = faker.name.findName()


describe('Testes realizados na tela de cadastro', () =>{
    beforeEach(()=>{
           

        cy.visit('https://jgsl-systemcalling.netlify.app/')
    });

    it('Teste 32: Cadastro com dados aletórios', () =>{
        
        //cy.cadastroComands();
        cy.get('.buttonLinkHomeRegister').click()
        cy.get('h1').should('have.text', 'Vamos te cadastrar!')
        cy.get('[placeholder="Nome"]').type(name)
        cy.get('[placeholder="Telefone"]').type(faker.phone.phoneNumber())
        cy.get('[placeholder="Email"]').type(faker.internet.email(name))
        cy.get('[type="password"]').type('12457812', {log:false})
        cy.get('.buttonRegister').click()
        cy.get('.Toastify__toast-body > :nth-child(2)')
            .should('contain', 'Ops, algo deu errado.')
            cy.get('.Toastify__toast-body').should('be.visible')
    
        

        
        
    });

})