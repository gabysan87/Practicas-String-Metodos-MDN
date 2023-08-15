// El replace() 
// método de Stringvalores devuelve una nueva cadena con una, algunas o todas las coincidencias de un pattern reemplazadas por un replacement. puede patternser una cadena o un RegExp, y replacement puede ser una cadena o una función llamada para cada coincidencia. Si patternes una cadena, solo se reemplazará la primera aparición. La cadena original se deja sin cambios.

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));

// En el siguiente ejemplo, la expresión regular se define replace()e incluye el indicador de caso ignorado.


const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");

console.log(newstr);

// Resumen
// método busca en una cadena un valor o una expresión regula, devuelve una nueva cadena con los valores reemplazados.
