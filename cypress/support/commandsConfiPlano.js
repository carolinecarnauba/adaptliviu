

import seletores from "./seletores"


Cypress.Commands.add('ValidarConfigPlano', ()=>{
    cy.get(seletores.ConfiraPlano).click();
    cy.wait(3000)
    cy.get(seletores.AdiquirirPlano).click();
    cy.wait(2000)
    cy.get(seletores.CampoNome).click().type('José')
    cy.wait(2000)
    cy.get(seletores.CampoEmail).click().type('teste')
    cy.wait(2000)
    cy.ValidaCampoEmail();
    cy.wait(2000)
    cy.get(seletores.CampoEmail).click().type('teste@teste.com')
    cy.wait(2000)
    cy.get(seletores.CampoEmpresa).click().type('adapt')
    cy.wait(2000)
    cy.get(seletores.CampoProduto).select('Liviu LMS').should('have.value', 'Liviu LMS')
    cy.wait(2000)
    cy.get(seletores.Campotelefone).click().type('(61) 98548-7227')
    cy.wait(2000)
    cy.ValidaCampoTelefone();
    cy.get(seletores.CampoMensagem).click().type('Gostaria de adquirir um plano')
    cy.wait(2000)
    cy.get(seletores.Checkbox).check();
    cy.get(seletores.Checkbox).should('be.checked');
    cy.wait(2000)
    cy.get(seletores.BotãoEntrarContato).click()
    cy.wait(2000)
    cy.get(seletores.MensagemInscriçao).should('be.visible').invoke('text').then((valor)=>{
        expect(valor).to.be.oneOf(['Inscrição realizada com sucesso! Em breve nosso time entrará em contato','Your submission failed because of a server error.Falha ao enviar sua inscrição devido a um erro. Tente novamente mais tarde.'])
    })
    

})

Cypress.Commands.add('ValidaCampoEmail',()=>{

    cy.get(seletores.CampoEmail).then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        expect($input[0].validationMessage).to.exist; 
      });
    cy.get(seletores.BotãoEntrarContato).click()

})

Cypress.Commands.add('ValidaCampoTelefone', ()=>{
    cy.get(seletores.Campotelefone).should(($input)=>{
        const telefone = $input.val();
        const regex = /^\(\d{2}\) \d{5}-\d{4}$|^\(\d{2}\) \d{4}-\d{4}$/;
        expect(telefone).to.match(regex);
    })
})