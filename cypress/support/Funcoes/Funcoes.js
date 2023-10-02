// Funcoes.js
import elementos from "../Componentes/Listagem_De_elementos";
// Função para validar o formato do valor exibido
export function validaValorFormato(valorCampo, valorEsperado) {
    cy.get(valorCampo).should(($campo) => {
      const valorAtual = $campo.text().trim();
      expect(valorAtual).to.equal(valorEsperado);
    });
  }
  
  // Função para alterar o valor
  export function alteraValor(botao, valorFinal) {
    let valorAtual = 'R$ 8.000'; // Valor inicial
    cy.get(botao).click();
      
    // Usamos uma função recursiva para continuar clicando até atingir o valor final ou mais
    function continuaClicando() {
      cy.get(elementos.telaPrincipal.valorNoCampo).invoke('text').then((texto) => {
        valorAtual = texto.trim();
        if (
          (valorFinal.includes('ou mais') && parseFloat(valorAtual.replace(/\D/g, '')) < parseFloat(valorFinal.replace(/\D/g, ''))) ||
          (!valorFinal.includes('ou mais') && parseFloat(valorAtual.replace(/\D/g, '')) !== parseFloat(valorFinal.replace(/\D/g, '')))
        ) {
          cy.get(botao).click();
          cy.wait(100); // Espera 1 segundo entre os cliques
          continuaClicando(); // Chama a função novamente para continuar clicando
        } else {
          // Quando atingir o valor final ou a condição desejada, valida o formato do valor
          validaValorFormato(elementos.telaPrincipal.valorNoCampo, valorAtual);
        }
      });
    }
  
    continuaClicando(); // Inicia a função recursiva
  }


//Função para gerar CFP
function geraCPF() {
    const n = 9; // Número de dígitos do CPF
    let numeros = '';
    
    // Gere os primeiros 9 dígitos aleatoriamente
    for (let i = 0; i < n; i++) {
      numeros += Math.floor(Math.random() * 10).toString();
    }
    
    // Calcule o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(numeros.charAt(i)) * (10 - i);
    }
    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito === 10 || primeiroDigito === 11) {
      primeiroDigito = 0;
    }
    numeros += primeiroDigito.toString();
    
    // Calcule o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(numeros.charAt(i)) * (11 - i);
    }
    let segundoDigito = 11 - (soma % 11);
    if (segundoDigito === 10 || segundoDigito === 11) {
      segundoDigito = 0;
    }
    numeros += segundoDigito.toString();
    
    return numeros;
  }
export {geraCPF}  

//Gera numero de celular aleatório
function geraNumeroCelular() {
    const ddd = '44'; // DDD da região (substitua pelo DDD desejado)
    const prefixo = '9'; // O primeiro dígito do número
    
    let numeros = '';
  
    // Gere os próximos 8 dígitos aleatoriamente
    for (let i = 0; i < 8; i++) {
      numeros += Math.floor(Math.random() * 10).toString();
    }
  
    return `${ddd}${prefixo}${numeros}`;
  }

  export {geraNumeroCelular}
  
  //Email aleatório
  function geraEmailAleatorio() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0';
    let email = '';
  
    // Gere uma parte aleatória do nome de usuário com 10 caracteres
    for (let i = 0; i < 10; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      email += caracteres.charAt(indiceAleatorio);
    }
  
    email += '@example.com'; 
  
    return email;
  }

  export {geraEmailAleatorio}
  
  function geraRGAleatorio() {
    const serie = Math.floor(Math.random() * 1000000000); // Gera um número de série de 9 dígitos
    return `${serie}`;
  }
  export {geraRGAleatorio}