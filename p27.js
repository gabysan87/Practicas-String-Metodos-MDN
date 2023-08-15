// El toLocaleLowerCase() 
// método de String valores devuelve esta cadena convertida a minúsculas, de acuerdo con las asignaciones de casos específicas de la configuración regional.

const dotted = 'İStanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// Expected output: "istanbul"
