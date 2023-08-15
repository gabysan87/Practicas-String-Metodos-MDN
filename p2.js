// Método `charAt`:

// El método charAt() de String devuelve en un nuevo String el carácter UTF-16 de una cadena.


const element = (n,x) => {

    return n.charAt(x)
}

console.log(element("Brave new world", 6))

const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);

// Este metodo comienza su indice en 0