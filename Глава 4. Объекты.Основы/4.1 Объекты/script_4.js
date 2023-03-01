// Задача "Умножаем все числовые свойства на 2" 
'use strict';
alert ("Задача \"Умножаем все числовые свойства на 2\" ");

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
 	
 	for (let prop in obj) {
 		if (typeof obj[prop] == "number") {
 			obj[prop] *= 2;	
 		}
 	}
 } 
