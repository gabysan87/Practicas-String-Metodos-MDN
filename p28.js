// El toLocaleUpperCase() 
// método de Stringvalores devuelve esta cadena convertida a mayúsculas, de acuerdo con las asignaciones de casos específicas de la configuración regional.

const city = 'istanbul';

console.log(city.toLocaleUpperCase('en-US'));
// Expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase('TR'));
// Expected output: "İSTANBUL"

// toLocaleUpperCase()método convierte una cadena en letras mayúsculas, utilizando la configuración regional actual