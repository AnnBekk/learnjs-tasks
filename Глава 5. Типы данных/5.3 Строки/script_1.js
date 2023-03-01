// Задача "Сделать первый символ заглавным" 

'use strict';
alert ("Задача \"Сделать первый символ заглавным\" ");

let str = "вася";

function ucFirst(str) {

	if (!str) return str;

	return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst(str));

