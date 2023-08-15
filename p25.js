// El startsWith()
// método de String los valores determina si esta cadena comienza con los caracteres de una cadena específica, retornando trueo false según corresponda.

const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false

// Resumen: 
// devuelve true si una cadena comienza con una cadena especificada de lo contrario vuelve false.

// El startsWith()método distingue entre mayúsculas y minúsculas.