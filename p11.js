// El isWellFormed()
// método de String valores devuelve un valor booleano que indica si esta cadena contiene sustitutos solitarios .

const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
  ];
  
  for (const str of strings) {
    console.log(str.isWellFormed());
  }
  // Logs:
  // false
  // false
  // false
  // false
  // true
  // true