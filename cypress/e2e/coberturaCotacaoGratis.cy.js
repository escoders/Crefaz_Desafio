import elementos from "../support/Componentes/Listagem_De_elementos";
import {
  geraRGAleatorio,
  geraEmailAleatorio,
  geraCPF,
  validaValorFormato,
  alteraValor,
  geraNumeroCelular,
  geraCEPAleatorio
} from "../support/Funcoes/Funcoes";


describe('', () => {
  before(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    }) //Foi adicionado por conta de um problema ao carregar o jquery no site, para evitar a falha não proposital

    cy.visit('/')
  })

  beforeEach(function () {
    cy.visit('/')
  })

  it('Caso de Teste 1: Solicitar uma cotação grátis', () => {
    cy.get(elementos.telaPrincipal.divCotacao).should('be.visible')
    cy.get(elementos.telaPrincipal.divTexto).should('have.text', 'Peça uma cotação grátis!')
    cy.get(elementos.telaPrincipal.campoValor).should('be.visible')

  })




  context('Caso de Teste 2: Informar o valor do empréstimo', () => {
    it('Valida que o valor do empréstimo pode ser aumentado até R$ 40.000 ou mais', () => {
      cy.validaValorCampo(elementos.telaPrincipal.valorNoCampo, 'R$ 8.000');
      alteraValor(elementos.telaPrincipal.botaoAdicao, 'R$ 40.000 ou mais');
    });


    it('Valida que o valor do empréstimo pode ser reduzido até R$ 500', () => {
      cy.validaValorCampo(elementos.telaPrincipal.valorNoCampo, 'R$ 40.000 ou mais');
      alteraValor(elementos.telaPrincipal.botaoSubtracao, 'R$ 500');
    });
  })




  it('Caso de Teste 3: Avançar para a próxima etapa ', () => {
    cy.get(elementos.telaPrincipal.divCotacao).should('be.visible')
    cy.get(elementos.telaPrincipal.campoValor).should('be.visible')
    cy.get(elementos.telaPrincipal.botaoAdicao).click()
    cy.get(elementos.telaPrincipal.botaoAvancar).click()
    cy.get(elementos.telaPrincipal.divTexto).should('have.text', 'Sua renda é maior que 3 mil reais?')
    cy.get(elementos.renda.botaoSim).should('be.visible')
    cy.get(elementos.renda.botaoNao).should('be.visible')

  })



  it('Caso de Teste 4: Avançar para a próxima etapa com renda maior que 3 mil reais', () => {
    cy.get(elementos.telaPrincipal.divCotacao).should('be.visible')
    cy.get(elementos.telaPrincipal.campoValor).should('be.visible')
    cy.get(elementos.telaPrincipal.botaoAdicao).click()
    cy.get(elementos.telaPrincipal.botaoAvancar).click()
    cy.get(elementos.telaPrincipal.divTexto).should('have.text', 'Sua renda é maior que 3 mil reais?')
    cy.get(elementos.renda.botaoSim).should('be.visible').click()
    cy.get(elementos.telaPrincipal.divTexto).should('have.text', 'Você possui veículo quitado em seu nome?')
    cy.get(elementos.renda.botaoNao).should('be.visible')
    cy.get(elementos.renda.botaoSim).should('be.visible')


  })



  it('Caso de Teste 5: Avançar para a próxima etapa com renda menor que 3 mil reais', () => {
    cy.get(elementos.telaPrincipal.divCotacao).should('be.visible')
    cy.get(elementos.telaPrincipal.campoValor).should('be.visible')
    cy.get(elementos.telaPrincipal.botaoAdicao).click()
    cy.get(elementos.telaPrincipal.botaoAvancar).click()
    cy.get(elementos.telaPrincipal.divTexto).should('have.text', 'Sua renda é maior que 3 mil reais?')
    cy.get(elementos.renda.botaoNao).should('be.visible').click()
    cy.get(elementos.telaPrincipal.divTexto).should('have.text', 'Sobre o pagamento')


  })

  it('Caso de Teste 6: Escolher o plano de pagamento', () => {
    cy.get(elementos.telaPrincipal.divCotacao).should('be.visible')
    cy.get(elementos.telaPrincipal.campoValor).should('be.visible')
    cy.get(elementos.telaPrincipal.botaoAdicao).click()
    cy.get(elementos.telaPrincipal.botaoAvancar).click()
    cy.get(elementos.telaPrincipal.divTexto).should('have.text', 'Sua renda é maior que 3 mil reais?')
    cy.get(elementos.renda.botaoNao).should('be.visible').click()
    cy.get(elementos.telaPrincipal.divTexto).should('have.text', 'Sobre o pagamento')
    cy.get(elementos.telaPrincipal.subtitulo).should('have.text', 'Quer pagar em quantas parcelas?')
    cy.get(elementos.pagamento.periodo).should('be.visible')





  })

  it('Caso de Teste 7 Avançar para a próxima etapa com o plano de pagamento escolhido', () => {
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

  context('Caso de Teste 8 Preencher os dados pessoais', () => {
    it('Caso de Teste 8 Preencher os dados pessoais validos', () => {
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
  
  
      // preenchimendo de dados pessoais e validação de tela
      cy.get(elementos.pecaCotacaoGratis.titulo).should('have.text', 'Peça uma cotação grátis!')
      cy.get(elementos.pecaCotacaoGratis.titulo).should('have.text', 'Peça uma cotação grátis!')
      cy.get(elementos.pecaCotacaoGratis.nomeCompleto).type('Gabriel Escodeiro').should('be.visible')
      cy.get(elementos.pecaCotacaoGratis.CPF).type('1233').should('be.visible')
      cy.get(elementos.pecaCotacaoGratis.statusCivil).select('Solteiro(a)').should('be.visible')
      cy.get(elementos.pecaCotacaoGratis.diaNascimento).select('26').should('be.visible')
      cy.get(elementos.pecaCotacaoGratis.mesNascimento).select('12').should('be.visible')
      cy.get(elementos.pecaCotacaoGratis.anoNascimento).select('1997').should('be.visible')
      cy.get(elementos.pecaCotacaoGratis.ocupacao).select('Assalariado (CLT)').should('be.visible')
      cy.get(elementos.pecaCotacaoGratis.celular).type(geraNumeroCelular()).should('be.visible')
      cy.get(elementos.pecaCotacaoGratis.email).type(geraEmailAleatorio()).should('be.visible')
  
  
    })

    it('Caso de Teste 8 Preencher os dados pessoais invalidos', () => {
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
  
  
      // preenchimendo de dados pessoais e validação de tela
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
})
 
  it('Caso de Teste 9: Preencher os dados pessoais e avançar para a próxima etapa', () => {
    cy.fluxoTelaPrincipal()
    cy.fluxoTelaCotacao()
    cy.get(elementos.precisamosSaberMaisSobreVoce.tituloDaPagina).should('have.text', 'Precisamos saber mais um pouquinho sobre você')

  })



  it('Caso de Teste 10: Preencher os dados complementares', () => {
    cy.fluxoTelaPrincipal()
    cy.fluxoTelaCotacao()
    cy.get(elementos.precisamosSaberMaisSobreVoce.tituloDaPagina).should('have.text', 'Precisamos saber mais um pouquinho sobre você')
    cy.get(elementos.precisamosSaberMaisSobreVoce.sexoMasculino).click()
    cy.get(elementos.precisamosSaberMaisSobreVoce.naoTemCarroQuitado).click()
    cy.get(elementos.precisamosSaberMaisSobreVoce.estudo).select('Superior completo')
    cy.get(elementos.precisamosSaberMaisSobreVoce.cep).focus().type(87040100)
    cy.get(elementos.precisamosSaberMaisSobreVoce.rendaMensal).type('2000')
    cy.get(elementos.precisamosSaberMaisSobreVoce.comprovacaoReceita).select('Holerite/contracheque')
    cy.get(elementos.precisamosSaberMaisSobreVoce.contaBancaria).select('Banco Inter')
    cy.get(elementos.precisamosSaberMaisSobreVoce.tipoDeConta).select('Conta corrente comum')
    cy.get(elementos.precisamosSaberMaisSobreVoce.motivoDoEmprestimo).select('Casamento ou outras festas')
    cy.get(elementos.precisamosSaberMaisSobreVoce.naoTenhoRestricaoCredito).click()
  })



  context('Caso de Teste 11: Preencher os dados complementares e salvar com os campos preenchidos', () => {
    it('Caso de Teste 11: Preencher os dados complementares e salvar com um ou mais campos invalidos', () => {
      cy.fluxoTelaPrincipal()
      cy.fluxoTelaCotacao()
      cy.fluxoTelaSaberMaisSobreVoceInvalido()

    })


    it('Caso de Teste 11: Preencher os dados complementares e salvar com todos os campos validos', () => {
      cy.fluxoTelaPrincipal()
      cy.fluxoTelaCotacao()
      cy.fluxoTelaSaberMaisSobreVoce()
    })
  })
  it('Caso de Teste 12: Preencher os dados dos documentos de identificação', () => {
    cy.fluxoTelaPrincipal()
    cy.fluxoTelaCotacao()
    cy.fluxoTelaSaberMaisSobreVoce()
    cy.fluxoMaisAlgumasInformacoes()
  })
})