describe('header', () => {
  it('should render', () => {
    cy.visit('http://127.0.0.1:8081/');

    cy.contains('Salário mínimo - Histórico e projeções')
  })
})