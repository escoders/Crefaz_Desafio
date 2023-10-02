const elementos = {
    telaPrincipal:{
       divCotacao: ':nth-child(1) > :nth-child(1) > .def-p-normal',
       divTexto: '.def-ts-title',
       campoValor: '.slider--controls',
       valorNoCampo: '.slider--value > span',
       botaoSubtracao: '.fa-minus',
       botaoAdicao: '.fa-plus', 
       botaoAvancar: '.def-sf-secondary',
       subtitulo: 'legend',

    },
    renda:{
        botaoSim: '.def-mr-gutter > .def-sf-clickable',
        botaoNao: '.def-ml-gutter > .def-sf-clickable'
    },
    veiculoQuitado: {
        botaoSim: '.def-mr-gutter > .def-sf-clickable',
        botaoNao: '.def-ml-gutter > .def-sf-clickable',
    },
    pagamento: {
        periodo: '#loanPeriodInMonths',
        campoAtivo: 'bselector--item isActive',
    },
    pecaCotacaoGratis:{
        nomeCompleto: '#fullName',
        CPF: '#personalNumber',
        statusCivil: '#civilStatus',
        diaNascimento: '#DD_birthDate',
        mesNascimento: '#MM_birthDate',
        anoNascimento: '#YY_birthDate',
        ocupacao: '#workStatus',
        celular: '#telephoneNumber',
        email: '#email',
        botaoComparar: '#buttonCompare',
        titulo: '.form--title',
        alertaNome: ':nth-child(2) > :nth-child(1) > .form--group > .form--err > .validation-errors',
        alertaCpf: '.two-col > .isInvalid > .form--err > .validation-errors',
    },
    precisamosSaberMaisSobreVoce: {
        tituloDaPagina: '.form--title',
        sexoMasculino: '#gender > :nth-child(1)',
        sexoFeminino: '#gender > :nth-child(2)',
        temCarroQuitado: '#ownsVehicle > :nth-child(1)',
        naoTemCarroQuitado: '#ownsVehicle > :nth-child(2)',
        estudo: '#education',
        cep: '#zipCode',
        rendaMensal: '#monthlyIncome',
        comprovacaoReceita: '#incomeProofDocument',
        contaBancaria: '#bankName',
        tipoDeConta: '#accountType',
        motivoDoEmprestimo: '#loanReason',
        tenhoRestricaoCredito: '#hasCreditRestrictions > :nth-child(1)',
        naoTenhoRestricaoCredito: '#hasCreditRestrictions > :nth-child(2)',
        salvar: '#btn-with-message',
        mensagemDeAtencao: '.def-tc-danger',

    },
    maisAlgumasInformacoes: {
        tipoDocumento: '#RGDocType',
        documento: '#RG',
        orgaoEmissor: '#RGExpeditorOrganisation',
        estado: '#RGOriginState',
        diaEmissaoDocumento: '#DD_RGExpeditionDate',
        mesEmissaoDocumento: '#MM_RGExpeditionDate',
        anoEmissaoDocumento: '#YY_RGExpeditionDate',
        nacionalidade: '#nationality',
        estadoNascimento: '#stateOfBirth',
        cidadeNascimento: '#placeOfBirth',
        nomeDaMae: '#mothersName',
        numeroDaCasa: '#streetNumber',
        complemento: '#address2',
        tempoDeMoradia: '#housingTime',
        tipoDeCasa: '#housing',
        botaoSalvar: '#btn-with-message',
    }

}

export default elementos