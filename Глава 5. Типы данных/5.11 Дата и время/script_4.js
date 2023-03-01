// Задача "Какой день месяца был много дней назад?" 

'use strict';
alert ("Задача \"Какой день месяца был много дней назад?\" ");

let date2015 = new Date(2015, 0, 2);

function getDateAgo(date, days) {

	let dateCopy = new Date(date);

	dateCopy.setDate(date.getDate() - days);

	return dateCopy.getDate();
}

alert(getDateAgo(date2015, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date2015, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date2015, 366)); // 1, (1 Jan 2014)