// Cypress.Commands.add('getAdressByCep', (cep) => {
//     cy.request({
//         method: 'GET',
//         url: `https://brasilapi.com.br/api/cep/v1/${cep}`,
//     }).then(response => {
//         expect(response.status).to.eq(200)
//         const req = response.body
//         cy.writeFile('cypress/fixtures/data.json', req)
//     })
// })