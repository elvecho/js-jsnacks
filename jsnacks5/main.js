let arrayVuoto = [];

let arrayNumeriDispari =[];


let numero1 = parseInt(prompt("inserisci un numero"));
console.log(numero1);
arrayVuoto.push(numero1);
let numero2 = parseInt(prompt("inserisci un numero"));
console.log(numero2);
arrayVuoto.push(numero2);
let numero3 = parseInt(prompt("inserisci un numero"));
console.log(numero3);
arrayVuoto.push(numero3);
let numero4 = parseInt(prompt("inserisci un numero"));
console.log(numero4);
arrayVuoto.push(numero4);
let numero5 = parseInt(prompt("inserisci un numero"));
console.log(numero5);
arrayVuoto.push(numero5);
let numero6 = parseInt(prompt("inserisci un numero"));
console.log(numero6);
arrayVuoto.push(numero6);



for(let i = 0; i < arrayVuoto.length; i++){
    if(arrayVuoto[i]%2==1){
        
        arrayNumeriDispari.push(arrayVuoto[i]);
}
}
console.log("i numeri dispari sono:"+ arrayNumeriDispari);


