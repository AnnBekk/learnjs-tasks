// Задача "Проверка на спам" 

'use strict';
alert ("Задача \"Проверка на спам\" ");

function checkSpam(str) {

	let strToLowerCase = str.toLowerCase(); 
	return strToLowerCase.includes("viagra") || strToLowerCase.includes("xxx"); 
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));