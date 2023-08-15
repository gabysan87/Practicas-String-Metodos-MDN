// El replaceAll()
// método de String valores devuelve una nueva cadena con todas las coincidencias de un pattern reemplazadas por un replacement. puede patternser una cadena o un RegExp, y replacementpuede ser una cadena o una función que se llamará para cada coincidencia. La cadena original se deja sin cambios.

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(p.replaceAll(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

// Resumen
// El replaceAll()método busca en una cadena un valor o una expresión regular, devuelve una nueva cadena con todos los valores reemplazados, no cambia la cadena original.

// El replaceAll()método se introdujo en JavaScript 2021.

// El replaceAll()método no funciona en Internet Explorer.