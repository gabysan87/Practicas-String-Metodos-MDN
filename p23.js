// El slice()
// método de String valores extrae una sección de esta cadena y la devuelve como una nueva cadena, sin modificar la cadena original.

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(29));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -3));
// Expected output: "lazy"

// Resumen
// extrae una parte de una cadena, devuelve la parte extraída en una nueva cadena.