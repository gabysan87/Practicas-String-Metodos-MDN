// El método includes() 
// determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.
// El método includes() es "case sensitive" (tiene en cuenta mayúsculas y minúsculas). Por ejemplo, la siguiente expresión devolverá false:
// "Ballena azul".includes("ballena"); // devuelve false

const str = ("To be, or not to be, that is the question.");


console.log(str.includes("To be")); // true
console.log(str.includes("question"))
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1))
console.log(str.includes("TO BE")) 
console.log(str.includes(""))

// Este método permite determinar si una cadena de texto se encuentra incluida dentro de la otra.