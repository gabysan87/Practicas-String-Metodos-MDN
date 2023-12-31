// El localeCompare()
// método de Stringvalores devuelve un número que indica si esta cadena viene antes, después o es la misma que la cadena dada en el orden de clasificación. En implementaciones con soporte Intl.Collatorde API , este método simplemente llama a Intl.Collator.

const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0


// Ordenar una matriz
// localeCompare() habilita la ordenación que no distingue entre mayúsculas y minúsculas para una matriz.

const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];

return items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']


// Descripción
// Devuelve un número entero que indica si reference Str viene antes, después o es equivalente a compareString.

// -1 si la cadena se ordena antes de compareString
//  0 si las dos cadenas son iguales
//  1 si la cadena se ordena después de compareString