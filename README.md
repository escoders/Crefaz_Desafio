# Crefaz_Teste

Projeto contempla o Cypress na versão 10.7.0 e o plugin mochawesome-reporter na versão 3.6.0

Para instalar o projeto, rode o comando "npm install"
Para validar o arquivo de teste criado, rode o comando npm cypress run -spec cypress/e2e/coberturaCotacaoGratis.cy.js
Para visualizar os testes enquanto executam, rodar o comando npx cypress run -spec cypress/e2e/coberturaCotacaoGratis.cy.js  --headed
ou então manualmente abrindo o cypress com o comando "npx cypress open" e selecionando o arquivo de teste(neste formato não irá gerar o report).
Caso todos os testes passem, o relatório HTML gerado não contará com screenshots da tela, somente em caso de falha poderá ser visto o screenshot


Explicação da escolha da abordagem:

Foi abordado um projeto com uma adaptação de um "page objects" focado em criação de funções que executassem alguns procedimentos, como preenchimentos de CPF, celular e e-mail.
Também foi utilizado da criação de comandos novos para o cypress, afim de encurtar alguns fluxos repetitivos de tela
Foi criado uma listagem com o mapeamento dos componentes necessários para a execução do fluxo
também foi optado por manter todos testes gerados através dos casos de teste em um arquivo único, focando no teste especificado no arquivo