// El método indexOf() 
// devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indice Desde; o -1 si no se encuentra dicho valor.

let cualquierCadena = (w) => {
    return w.indexOf("new")
}

console.log(cualquierCadena("Brave new world"))

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, indexOfFirst + 1)}`);
// Expected output: "The index of the 2nd "dog" is 52"


// devuelve la posición de la primera aparición de un valor en una cadena.