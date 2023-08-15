// El String.raw()
// método estático es una función de etiqueta de literales de plantilla . Esto es similar al rprefijo en Python, o al @prefijo en C# para cadenas literales. Se utiliza para obtener la forma de cadena sin formato de los literales de plantilla, es decir, ${foo}se procesan las sustituciones (p. ej., ), pero \nno las secuencias de escape (p. ej.).

// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`);
// Expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"

// se usan para string de caracteres especiales