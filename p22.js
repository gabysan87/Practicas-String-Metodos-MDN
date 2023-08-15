// El search() 
// método de String valores ejecuta una búsqueda de una coincidencia entre una expresión regular y esta cadena, devolviendo el índice de la primera coincidencia en la cadena.

const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;

console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot))

// El search()método compara una cadena con una expresión regular, devuelve el índice (posición) de la primera coincidencia.