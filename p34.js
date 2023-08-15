// El trimStart() 
// método de Stringvalores elimina los espacios en blanco desde el principio de esta cadena y devuelve una nueva cadena, sin modificar la cadena original. trimLeft()es un alias de este método.

const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
