// El método indexOf() 
// devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.

let cualquierCadena = (w) => {
    return w.indexOf("new")

}

console.log(cualquierCadena("Brave new world"))




document.write(
  "<P>The index of the first w from the beginning is " +
    cualquierCadena.indexOf("w"),
); // Muestra 8

document.write(
  "<P>The index of the first w from the end is " +
    cualquierCadena.lastIndexOf("w"),
); // Muestra 10

document.write(
  "<P>The index of 'new' from the beginning is " +
    cualquierCadena.indexOf("new"),
); // Muestra 6

document.write(
  "<P>The index of 'new' from the end is " + cualquierCadena.lastIndexOf("new"),
); // Muestra 6