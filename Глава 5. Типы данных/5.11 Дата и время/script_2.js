// Задача "Покажите день недели" 

'use strict';
alert ("Задача \"Покажите день недели\" ");

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(date) {

	let weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

	return weekDays[date.getDay()];
}

alert(getWeekDay(date)); // "ВТ"