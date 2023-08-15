// Método `codePointAt`:

// El método codePointAt() devuelve un entero no negativo que equivale al valor Unicode code point del carácter.


// Enunciado: Crea una función que tome una cadena y un índice como entrada, y use el método `codePointAt` para obtener el valor del punto de código Unicode del carácter en la posición dada.
// Entrada: Una cadena de texto y un número entero no negativo que representa el índice.
// Salida: El valor del punto de código Unicode del carácter en la posición indicada o undefined si el índice está fuera del rango.

const icons = 'ABC';
console.log(icons.codePointAt(1));


const code = "\uD800\uDC00"
console.log(code.codePointAt(0))

const codigo = "Gaby"
console.log(codigo.codePointAt(0))


const unicode = (x) => {
    return x.codePointAt(0)
}

console.log(unicode("Gaby"))



// Este metodo comienza su indice en 0