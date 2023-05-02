// for
function sumMix(x) {
    let suma = 0;
    for (let i = 0; i < x.length; i++) {
      suma += parseInt(x[i]);
    }
    return suma;
  }
  console.log(sumMix([9, 3, "7", "3"])); // 22
  console.log(sumMix(["5", "0", 9, 3, 2, 1.2, "9", 6, 7])); // 42
  console.log(sumMix(["3"])); // 3
  console.log(sumMix([])); // 0
  
  // forEach
  function sumMix(x) {
    let suma = 0;
    x.forEach(function(numero) {
      suma += parseInt(numero);
    });
    return suma;
  }
  console.log(sumMix([9, 3, "7", "3"])); // 22
  console.log(sumMix(["5", "0", 9, 3, 2, 1.2, "9", 6, 7])); // 42
  console.log(sumMix(["3"])); // 3
  console.log(sumMix([])); // 0
  
  // for in
  function sumMix(x) {
    let suma = 0;
    for (let indice in x) {
      suma += parseInt(x[indice]);
    }
    return suma;
  }
  console.log(sumMix([9, 3, "7", "3"])); // 22
  console.log(sumMix(["5", "0", 9, 3, 2, 1.2, "9", 6, 7])); // 42
  console.log(sumMix(["3"])); // 3
  console.log(sumMix([])); // 0
  
  // for of
  function sumMix(x) {
    let suma = 0;
    for (let elemento of x) {
      suma += parseInt(elemento);
    }
    return suma;
  }
  console.log(sumMix([9, 3, "7", "3"])); // 22
  console.log(sumMix(["5", "0", 9, 3, 2, 1.2, "9", 6, 7])); // 42
  console.log(sumMix(["3"])); // 3
  console.log(sumMix([])); // 0
  
  /*
  forEach é usado para iterar sobre os elementos de um array,
  for...in é usado para iterar sobre as chaves de um objeto,
  for...of é usado para iterar sobre os valores de um objeto iterável.
  */
