

Cypress.Commands.add('loginComands' , (email, password) =>{
    cy.get('[data-test="username"]').type(email)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    //cy.get('.app_logo').should('have.text', 'Swag Labs')

});

Cypress.Commands.add('cadastroComands', () =>{
    cy.get('.buttonLinkHomeRegister').click()
    cy.get('h1').should('be.visible', 'have.text', 'Vamos trabalhar!')
    cy.get('[placeholder="Nome"]').type('Jhonatta Matias')
    cy.get('[placeholder="Telefone"]').type('73982245157')
    cy.get('[placeholder="Email"]').type('test.test@gmail.com')
    cy.get('[type="password"]').type('12457812', {log:false})
    cy.get('.buttonRegister').click()

});

Cypress.Commands.add('adicionarUmProduto', () =>{

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').should('be.visible')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain', 'Remove')
});


// Cypress.Commands.add('adicionarVariosProduto', () =>{

//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
//     cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
//     cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
//         cy.get('.shopping_cart_link').should('be.visible')
//         cy.get('[data-test="remove-sauce-labs-backpack"]').click()
//         cy.get('.shopping_cart_link').should('be.visible')
// })







// Cypress.Commands.add('randomDataV2', user =>{
//     cy.get('[placeholder="Nome"]').type(user.userName)
//     cy.get('[placeholder="Email"]').type(user.email)
//     cy.get('[type="password"]').type(user.passwod)



// })


// Cypress.Commands.add('randomData',()=>{
//     const faker = require ('@faker-js/faker');
//     faker.locale = 'pt_BR'

//     cy.writeFile('cypress/fixtures/stories.json', {
//         'hits':Cypress._.times(10, () => {
//           return {
            
            
//             'name':`${faker.name.firstName()} ${faker.name.lastName()}`,
//             'email': `${faker.internet.email(firstName)}`
            
            
            
//           }
//         })
//       })
    

// })


    
