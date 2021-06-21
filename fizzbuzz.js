//  divisivel por 3=> Fizz
// divisivel por 5 =>5
// divisivel por 3 e 5 =>
// não divisivel por 3 ou 5 => entrada
// não é um número => 'não é um numero'


const resultado = fizzBuzz(30);
console.log(resultado);

function fizzBuzz(entrada){
    if ( typeof entrada !== 'number' )
        return 'não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;
}

