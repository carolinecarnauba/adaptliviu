
import CommandsConfiPlano from "../../support/commandsConfiPlano"



describe('Confira-Plano', () => {
  beforeEach('',() => {
      cy.visit("https://adaptliviu.com.br/")
  })

  it('ConferirPLanos', () => {
    cy.ValidarConfigPlano();

  })

})