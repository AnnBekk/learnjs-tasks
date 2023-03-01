// Задача "Сколько секунд осталось до завтра?" 

'use strict';
alert ("Задача \"Сколько секунд осталось до завтра?\" ");

function getSecondsToTomorrow() {

	let currentDate = new Date();

	let tomorrowDate = new Date(currentDate.getFullYear(), 
								currentDate.getMonth(), 
								currentDate.getDate()+1);

	let diff = tomorrowDate - currentDate;
	
	return Math.round(diff / 1000);
}

alert(getSecondsToTomorrow());
alert(getSecondsToTomorrow());
alert(getSecondsToTomorrow());