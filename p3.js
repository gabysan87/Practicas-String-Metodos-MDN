// Método `charCodeAt`:
// El charCodeAt() método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.

// Enunciado: Escribe una función que tome una cadena y un índice como entrada, y utilice el método `charCodeAt` para obtener el valor del código ASCII del carácter en la posición dada.
// Entrada: Una cadena de texto y un número entero no negativo que representa el índice.
// Salida: El valor del código ASCII del carácter en la posición indicada o NaN si el índice está fuera del rango.


const metod = (x) => {

    return x.charCodeAt("3")
}

console.log(metod("Nab"))
console.log(metod("AaSdas"))

// El charCodeAt()método de Stringvalores devuelve un número entero entre 0y 65535que representa la unidad de código UTF-16 en el índice dado.

// Este metodo comienza su indice en 0
