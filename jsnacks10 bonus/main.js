/*
let numero = parseInt(prompt("inserisci un numero di 4 cifre"));
console.log(numero);
let output = [];
sNumber = numero.toString()

let sommanumeri = somma(output);
console.log(sommanumeri);
console.log(output);
function somma(sNumber){
    let sum = 0;
    for(let i =0; i <sNumber.length; i++){
        output.push(+sNumber.charAt(i));
        sum += output[i];
        return sum;
    }
}*/


let num = parseInt(prompt("inserisci un numero di 4 cifre"));

 let digits = [];
 digits.reverse(); 
 alert(digits); 
 while (num > 0) { 
    digits[digits.length] = num % 10;
     num = parseInt(num / 10);
   } 

 let sommanumeri = somma(num);
 console.log(sommanumeri);


 function somma(numer){
     numer= num;
 
     
     let sum = 0;
    for(let i = 0; i < digits.length; i++) {
         sum += digits[i];
     return sum;
    }
}