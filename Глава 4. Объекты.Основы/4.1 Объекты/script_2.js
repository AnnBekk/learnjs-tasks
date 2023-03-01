// Задача "Проверка на пустоту" 
'use strict';
alert ("Задача \"Проверка на пустоту\" ");

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
 	
 	for (let prop in obj) {
 		return false;
 	}

 	return true;
 } 