// El String.fromCharCode() 
// método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.

// Debido a que fromCharCode es un método estático de String, usted siempre lo usará como String.fromCharCode(), en vez de un método de un objeto String creado por usted.

const charcod = (ABC) => {
    return String.fromCharCode(ABC)
}

console.log(charcod(65,66))
console.log(charcod(66))
console.log(charcod(67))

// Este metodo convierte valores unicode en caracteres 