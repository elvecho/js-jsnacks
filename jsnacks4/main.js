let tuoNome = prompt("inserisci il tuo nome");
let invitati = ["paolo","giovanni","marco","luca","luigi","mario"];
console.log(tuoNome);
console.log(invitati);

let trovato = false;


for(let i = 0; i < invitati.length; i++){
    if(tuoNome === invitati[i]){
        trovato = true;
    }
}
if (trovato==true){
    console.log("il tuo nome è in lista");
}else{
    console.log("il tuo nome non è in lista");
   

}