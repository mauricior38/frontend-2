var numeros = [1, 2, 3, 4];
let auxb = 0;

for (let i = 0; i < numeros.length; i++) {
  let auxa = numeros[i];
  let soma = auxa + auxb;
  console.log(`A soma de ${auxa} + ${auxb} = ${soma}`);
  
  auxb = soma;
}
