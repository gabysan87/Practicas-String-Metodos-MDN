// El lastIndexOf()
// método de String valores busca esta cadena y devuelve el índice de la última aparición de la subcadena especificada. Toma una posición de inicio opcional y devuelve la última aparición de la subcadena especificada en un índice menor o igual que el número especificado.

// Las cadenas tienen un índice cero: el índice del primer carácter de una cadena es 0 y el índice del último carácter de una cadena es la longitud de la cadena menos 1.

const anyString = "Brave, TBrave New World";

console.log(anyString.indexOf("Brave")); // 0
console.log(anyString.lastIndexOf("Brave")); // 7

