let parola1 = prompt("inserisci la prima parola");
let parola2 = prompt("inserisci la seconda parola");

console.log(parola1);
console.log(parola2);

if(parola1.length > parola2.length){
    alert("la prima parola è piu lunga");
    console.log("la prima parola è piu lunga");
}else if(parola1.length < parola2.length){
    alert("la seconda parola è piu lunga");
    console.log("la seconda parola è piu lunga");
}else{
    alert("pareggio");
    console.log("pareggio");
}