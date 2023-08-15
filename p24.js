// El split()
// método de Stringvalores toma un patrón y divide esta cadena en una lista ordenada de subcadenas buscando el patrón, coloca estas subcadenas en una matriz y devuelve la matriz.

// es una función que permite dividir un string en varias partes utilizando un separador específico.

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// Resumen
// divide una cadena en una matriz de subcadenas,  devuelve la nueva matriz. Si (" ") se usa como separador, la cadena se divide entre palabras.