// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import elementos from "./Componentes/Listagem_De_elementos";
import {geraRGAleatorio,geraEmailAleatorio ,geraCPF, validaValorFormato, alteraValor, geraNumeroCelular } from "../support/Funcoes/Funcoes";


Cypress.Commands.add('validaValorCampo', (campo) =>{
    cy.get(campo)
    // Obter o texto ou o valor do elemento
    .invoke('text') // ou .invoke('val')
    .then(($valor) => {
      // $valor é o texto ou o valor do elemento
      cy.log($valor); // imprime o valor no console
      // Usar o valor em uma asserção ou em outra ação
      cy.get(campo).should('have.text', $valor);
    });
})

Cypress.Commands.add('fluxoTelaPrincipal',(campo) =>{
        cy.get(elementos.telaPrincipal.divCotacao).should('be.visible')
        cy.get(elementos.telaPrincipal.campoValor).should('be.visible')
        cy.get(elementos.telaPrincipal.botaoAdicao).click()
        cy.get(elementos.telaPrincipal.botaoAvancar).click()
        cy.get(elementos.telaPrincipal.divTexto).should('have.text', 'Sua renda é maior que 3 mil reais?')
        cy.get(elementos.renda.botaoNao).should('be.visible').click()
        cy.get(elementos.telaPrincipal.divTexto).should('have.text', 'Sobre o pagamento')
        cy.get(elementos.pagamento.periodo).should('be.visible')
        cy.contains('12 meses').click()
        cy.get(elementos.telaPrincipal.botaoAvancar).click()

      })
  
Cypress.Commands.add('fluxoTelaCotacao',(campo) =>{
 // preenchimendo de dados pessoais
 cy.get(elementos.pecaCotacaoGratis.titulo).should('have.text', 'Peça uma cotação grátis!')
 cy.get(elementos.pecaCotacaoGratis.nomeCompleto).type('Gabriel Escodeiro').should('be.visible')
 cy.get(elementos.pecaCotacaoGratis.CPF).type(geraCPF()).should('be.visible')
 cy.get(elementos.pecaCotacaoGratis.statusCivil).select('Solteiro(a)').should('be.visible')
 cy.get(elementos.pecaCotacaoGratis.diaNascimento).select('26').should('be.visible')
 cy.get(elementos.pecaCotacaoGratis.mesNascimento).select('12').should('be.visible')
 cy.get(elementos.pecaCotacaoGratis.anoNascimento).select('1997').should('be.visible')
 cy.get(elementos.pecaCotacaoGratis.ocupacao).select('Assalariado (CLT)').should('be.visible')
 cy.get(elementos.pecaCotacaoGratis.celular).type(geraNumeroCelular()).should('be.visible')
 cy.get(elementos.pecaCotacaoGratis.email).type(geraEmailAleatorio()).should('be.visible')
 cy.get(elementos.pecaCotacaoGratis.botaoComparar).should('be.visible').click()


})
Cypress.Commands.add('fluxoTelaCotacaoInvalido',(campo) =>{
cy.get(elementos.pecaCotacaoGratis.titulo).should('have.text', 'Peça uma cotação grátis!')
cy.get(elementos.pecaCotacaoGratis.titulo).should('have.text', 'Peça uma cotação grátis!')
cy.get(elementos.pecaCotacaoGratis.nomeCompleto).type('Gabriel').should('be.visible')
cy.get(elementos.pecaCotacaoGratis.CPF).type('1233').should('be.visible')
cy.get(elementos.pecaCotacaoGratis.alertaNome).should('be.visible').and('have.text','Digite seu nome completo como está no RG.')
cy.get(elementos.pecaCotacaoGratis.statusCivil).select('Solteiro(a)').should('be.visible')
cy.get(elementos.pecaCotacaoGratis.alertaCpf).should('be.visible').and('have.text', 'Digite o número do seu CPF.')
cy.get(elementos.pecaCotacaoGratis.diaNascimento).select('26').should('be.visible')
cy.get(elementos.pecaCotacaoGratis.mesNascimento).select('12').should('be.visible')
cy.get(elementos.pecaCotacaoGratis.anoNascimento).select('1997').should('be.visible')
cy.get(elementos.pecaCotacaoGratis.ocupacao).select('Assalariado (CLT)').should('be.visible')
cy.get(elementos.pecaCotacaoGratis.celular).type(geraNumeroCelular()).should('be.visible')
cy.get(elementos.pecaCotacaoGratis.email).type(geraEmailAleatorio()).should('be.visible')
})

Cypress.Commands.add('fluxoTelaSaberMaisSobreVoce', (campo) => {
  cy.get(elementos.precisamosSaberMaisSobreVoce.tituloDaPagina).should('have.text', 'Precisamos saber mais um pouquinho sobre você')
  cy.get(elementos.precisamosSaberMaisSobreVoce.sexoMasculino).click()
  cy.get(elementos.precisamosSaberMaisSobreVoce.naoTemCarroQuitado).click()
  cy.get(elementos.precisamosSaberMaisSobreVoce.estudo).select('Superior completo')
  cy.get(elementos.precisamosSaberMaisSobreVoce.cep).type(87040100)
  cy.get(elementos.precisamosSaberMaisSobreVoce.rendaMensal).type('2000')
  cy.get(elementos.precisamosSaberMaisSobreVoce.comprovacaoReceita).select('Holerite/contracheque')
  cy.get(elementos.precisamosSaberMaisSobreVoce.contaBancaria).select('Banco Inter')
  cy.get(elementos.precisamosSaberMaisSobreVoce.tipoDeConta).select('Conta corrente comum')
  cy.get(elementos.precisamosSaberMaisSobreVoce.motivoDoEmprestimo).select('Casamento ou outras festas')
  cy.get(elementos.precisamosSaberMaisSobreVoce.naoTenhoRestricaoCredito).click()
  cy.get(elementos.precisamosSaberMaisSobreVoce.salvar).click()
})
Cypress.Commands.add('fluxoTelaSaberMaisSobreVoceInvalido', (campo) => {
  cy.get(elementos.precisamosSaberMaisSobreVoce.tituloDaPagina).should('have.text', 'Precisamos saber mais um pouquinho sobre você')
  cy.get(elementos.precisamosSaberMaisSobreVoce.sexoMasculino).click()
  cy.get(elementos.precisamosSaberMaisSobreVoce.naoTemCarroQuitado).click()
  cy.get(elementos.precisamosSaberMaisSobreVoce.estudo).select('Superior completo')
  cy.get(elementos.precisamosSaberMaisSobreVoce.cep).type(870-100)
  cy.get(elementos.precisamosSaberMaisSobreVoce.rendaMensal).type('2000')
  cy.get(elementos.precisamosSaberMaisSobreVoce.mensagemDeAtencao).should('have.text', 'Digite um CEP válido.')
  cy.get(elementos.precisamosSaberMaisSobreVoce.comprovacaoReceita).select('Holerite/contracheque')
  cy.get(elementos.precisamosSaberMaisSobreVoce.contaBancaria).select('Banco Inter')
  cy.get(elementos.precisamosSaberMaisSobreVoce.tipoDeConta).select('Conta corrente comum')
  cy.get(elementos.precisamosSaberMaisSobreVoce.motivoDoEmprestimo).select('Casamento ou outras festas')
  cy.get(elementos.precisamosSaberMaisSobreVoce.naoTenhoRestricaoCredito).click()
})
      
Cypress.Commands.add('fluxoMaisAlgumasInformacoes', (campo) => {
  cy.get(elementos.maisAlgumasInformacoes.tipoDocumento).select('RG').type('{enter}')
  cy.get(elementos.maisAlgumasInformacoes.documento).wait(1000).focus().type(geraRGAleatorio())
  cy.get(elementos.maisAlgumasInformacoes.estado).focus().select('Paraná')
  cy.get(elementos.maisAlgumasInformacoes.diaEmissaoDocumento).focus().select('10')
  cy.get(elementos.maisAlgumasInformacoes.mesEmissaoDocumento).focus().select('10')
  cy.get(elementos.maisAlgumasInformacoes.anoEmissaoDocumento).focus().select('2010')
  cy.get(elementos.maisAlgumasInformacoes.nacionalidade).focus().select('Brasileiro(a)')
  cy.get(elementos.maisAlgumasInformacoes.estadoNascimento).focus().select('Paraná')
  cy.get(elementos.maisAlgumasInformacoes.cidadeNascimento).focus().type('Maringá')
  cy.get(elementos.maisAlgumasInformacoes.nomeDaMae).focus().type('Cleide Escodeiro')
})  