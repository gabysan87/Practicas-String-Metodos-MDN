// El método estatico String.fromCodePoint() 
// devuelve una cadena creada por una secuencia de puntos de codigo.

const charcod = (x) => {
    return String.fromCodePoint(65, 90)
}

// console.log(charcod(65, 90))
// console.log(charcod(66))
// console.log(charcod(67))

const unicode = (x, b) => {
    return String.fromCodePoint(x, b)
}

console.log(unicode(65, 90))
console.log(unicode(42, 70))