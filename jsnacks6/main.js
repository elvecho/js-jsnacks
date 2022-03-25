let utentehavinto= false;

while(utentehavinto == false){
let numerocomputer = Math.floor(Math.random()*10);
console.log("numerocomputer:" + numerocomputer);

let numerogiocatore = prompt("inserisci un numero");
console.log("numerogiocatore:" + numerogiocatore);

if (numerocomputer==numerogiocatore){
    
    
    utentehavinto= true;
    console.log("hai vinto");
}
}