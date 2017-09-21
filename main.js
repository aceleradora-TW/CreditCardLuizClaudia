//Função que válida os cartões em tamanho  e começo
function tipoDoCartao(numeroDoCartao){
  let tamanhoDoNumeroDoCartao = numeroDoCartao.length;
  if (eAmex(numeroDoCartao, tamanhoDoNumeroDoCartao)) {
    return 'Amex';
  } else if (eVisa(numeroDoCartao, tamanhoDoNumeroDoCartao)) {
    return 'Visa';
  } else if (eDiscover(numeroDoCartao, tamanhoDoNumeroDoCartao)) {
    return 'Discover';
  } else if (eMastercard(numeroDoCartao, tamanhoDoNumeroDoCartao)) {
    return 'Mastercard';
  } else {
    return false;
  }
}

//validação para o cartão Amex
function eAmex(numeroDoCartao, tamanhoDoNumeroDoCartao){
  return (tamanhoDoNumeroDoCartao === 15 &&
  (numeroDoCartao.slice(0,2) === '37') || (numeroDoCartao.slice(0,2) === '34')) ? true : false;
}

//Validação para o cartão Visa
function eVisa(numeroDoCartao, tamanhoDoNumeroDoCartao){
  return ((tamanhoDoNumeroDoCartao === 13  || tamanhoDoNumeroDoCartao === 16 ) &&
  (numeroDoCartao.slice(0,1) === '4')) ? true : false;
}

//Validação para o cartão Discover
function eDiscover(numeroDoCartao, tamanhoDoNumeroDoCartao){
  return ((tamanhoDoNumeroDoCartao === 16) &&
  numeroDoCartao.slice(0,4) === '6011') ? true : false;
}

//Validação para o cartão Mastercard
function eMastercard(numeroDoCartao, tamanhoDoNumeroDoCartao){
  return ((tamanhoDoNumeroDoCartao === 16) &&
  numeroDoCartao.slice(0,2) >= 51 && numeroDoCartao.slice(0,2) <= 55) ? true : false;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

//função que valida o algoritmo de Luhn
function validaCartao(numeroDoCartao){
  let numeroDoCartaoSemEspaco = numeroDoCartao.split(' ').join('');

  if (tipoDoCartao(numeroDoCartaoSemEspaco)) {
    let numeroCartaoInvertido = reverseString(numeroDoCartaoSemEspaco);

    let somaDosNumerosDoCartao = 0;
    let numeroDoCartaoDobrado = 0;
    for(let i = 0; i < numeroCartaoInvertido.length; i++){
      if(i % 2 !== 0){
        numeroDoCartaoDobrado = numeroCartaoInvertido.charAt(i) * 2;
        somaDosNumerosDoCartao += numeroDoCartaoDobrado;
        //verifica se o número dobrado é maior que 9
        if (numeroDoCartaoDobrado > 9) {
          somaDosNumerosDoCartao -= 9;
        }
      } else {
        somaDosNumerosDoCartao += parseInt(numeroCartaoInvertido.charAt(i));
      }
    }
    if (somaDosNumerosDoCartao % 10 === 0) {
      return(tipoDoCartao(numeroDoCartaoSemEspaco) + ", cartão válido.")
    }
  }
  return "Cartão inválido."
}



console.log(validaCartao('4408 0412 3456 7893')); //Visa
console.log(validaCartao('4417 1234 5678 9112')); //Cartão Inválido
