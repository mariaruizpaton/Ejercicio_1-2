'use strict'

const { backwardsLetters, palindrome } = require("./functions");

//const { letters, words } = require("./functions");

let cadena = prompt("Introduce una frase: ");

console.log('Frase: %s', cadena);
console.log('%s letras y %s palabras', letters(cadena), words(cadena));
console.log(upperString(cadena));
console.log(titleString(cadena));
console.log(backwardsLetters(cadena));
console.log(backwardsWords(cadena));

if (palindrome(cadena) == true) {
    console.log('Sí es un palíndromo');
} else {
    console.log('No es un palíndromo');
}