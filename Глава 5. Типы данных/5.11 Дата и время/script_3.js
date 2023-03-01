// Задача "День недели в европейской нумерации" 

'use strict';
alert ("Задача \"День недели в европейской нумерации\" ");

let date2012 = new Date(2012, 0, 3);  // 3 января 2012 года

function getLocalDay(date) {

	let weekDay = date.getDay();

	if (weekDay == 0) {
		weekDay = 7;
	}

	return weekDay;
}

alert(getLocalDay(date)); // 2 (вторник)