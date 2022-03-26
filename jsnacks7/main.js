let numeroUtente = parseInt(prompt("inserisci un numero"));
console.log(numeroUtente);

let numeroUtenteAlCubo = cubodeinumeri(numeroUtente);
console.log(numeroUtenteAlCubo);

 function cubodeinumeri(num1) {
   let risultato= num1**4;
     return risultato;
 }