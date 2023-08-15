// El padStart()
// método de Stringvalores rellena esta cadena con otra cadena (varias veces, si es necesario) hasta que la cadena resultante alcanza la longitud dada. El relleno se aplica desde el principio de esta cadena.

const str1 = '5';

console.log(str1.padStart(4, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-5);
const maskedNumber = last4Digits.padStart(fullNumber.length, '-');

console.log(maskedNumber);
// Expected output: "************5581"

// rellena una cadena desde el principio, hasta que alcanza una longitud determinada.