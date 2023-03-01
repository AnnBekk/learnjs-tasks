// Задача "Сколько сегодня прошло секунд?" 

'use strict';
alert ("Задача \"Сколько сегодня прошло секунд?\" ");

function getSecondsToday() {
	let currentDate = new Date();
	return currentDate.getHours() * 3600 + currentDate.getMinutes() * 60 + currentDate.getSeconds();
}

alert(getSecondsToday());
alert(getSecondsToday());
alert(getSecondsToday());