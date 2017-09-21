//Função que válida os cartões em tamanho e começo
function tipoDoCartao(numeroDoCartao){
  let tamanho = numeroDoCartao.length;
  if (eAmex(numeroDoCartao, tamanho)) {
    return 'Amex';
  } else if (eVisa(numeroDoCartao, tamanho)) {
    return 'Visa';
  } else if (eDiscover(numeroDoCartao, tamanho)) {
    return 'Discover';
  } else if (eMastercard(numeroDoCartao, tamanho)) {
    return 'Mastercard';
  } else {
    return false;
  }
}

//validação para o cartão Amex
function eAmex(numeroDoCartao, tamanho){
  if(tamanho === 15 && (numeroDoCartao.slice(0,2) === '37') || (numeroDoCartao.slice(0,2) === '34')){
    return true;
  }
}

//Validação para o cartão Visa
function eVisa(numeroDoCartao, tamanho){
  if((tamanho === 13  || tamanho === 16 ) && (numeroDoCartao.slice(0,1) === '4')){
    return true;
  }
}

//Validação para o cartão Discover
function eDiscover(numeroDoCartao, tamanho){
  if((tamanho === 16) && numeroDoCartao.slice(0,4) === '6011'){
    return true;
  }
}

//Validação para o cartão Mastercard
function eMastercard(numeroDoCartao, tamanho){
  if((tamanho === 16) && numeroDoCartao.slice(0,2) >= 51 && numeroDoCartao.slice(0,2) <= 55){
    return true;
  }
}

//
function reverseNumeroDoCartao(numeroDoCartao) {
    return numeroDoCartao.split("").reverse().join("");
}

//função que valida o algoritmo de Luhn
function validaCartao(numeroDoCartao){
  numeroDoCartao = numeroDoCartao.split(' ').join('');
  numeroDoCartao = reverseNumeroDoCartao(numeroDoCartao);
  console.log(numeroDoCartao);
  if (tipoDoCartao(numeroDoCartao)) {
    let soma = 0;
    let dobra = 0;
    for(let i = 0; i<numeroDoCartao.length; i++){
      if(i % 2 === 0){
        dobra = numeroDoCartao.charAt(i) * 2;
        soma += dobra;
        //verifica se o número dobrado é maior que 9
        if (dobra > 9) {
          soma -= 9;
        }
      } else {
        soma += parseInt(numeroDoCartao.charAt(i));
      }
    }
    if (soma % 10 === 0) {
      return(tipoDoCartao(numeroDoCartao) + ", cartão válido.")
    }
  }
  return "Cartão inválido."
}



console.log(validaCartao('4408 0412 3456 7893')); //Visa
console.log(validaCartao('4408 0412 3436 7893')); //Cartão Inválido
console.log(validaCartao('6011 4600 0000 0000')); //Discover
console.log(validaCartao('5207 0000 0000 0000'));//Mastercard
console.log(validaCartao('3707 0000 0000 000'));//Amex
console.log(validaCartao('3707 0000 0000 0000'));//Cartão Inválido
