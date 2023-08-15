// El padEnd()
// método de Stringvalores rellena esta cadena con una cadena dada (repetida, si es necesario) para que la cadena resultante alcance una longitud determinada. El relleno se aplica desde el final de esta cadena.

const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(26, '-'));
// Expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(3));
// Expected output: "200  "


