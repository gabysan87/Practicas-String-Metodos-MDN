// 1. Método `at`:
// Enunciado: Escribe una función que tome una cadena y un índice como entrada, y utilice el método `at` para devolver el carácter en la posición dada.
// Entrada: Una cadena de texto y un número entero positivo representando el índice.
// Salida: El carácter en la posición indicada o undefined si el índice está fuera del rango.

const string = (a, num) => {
    
 return a.at(num)

}

console.log(string("roja", -2))
console.log(string("patilla, melon, fresa", 17))
console.log(string("casa, mesa, balon", 0 ))

// Interpretación
// Método `at`
// Este método permite números enteros positivos y negativos. Los enteros negativos cuentan hacia atrás desde el último carácter de cadena.
// proporciona una función que devuelve el último carácter encontrado en una cadena especificada.

// Este metodo comienza su indice en 0
