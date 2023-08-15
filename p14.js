// El match() 
// método de String valores recupera el resultado de hacer coincidir esta cadena con una expresión regular .

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]