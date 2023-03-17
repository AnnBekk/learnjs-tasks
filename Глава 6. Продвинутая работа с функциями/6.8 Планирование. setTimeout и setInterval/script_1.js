// Задача "Вывод каждую секунду" 
'use strict';
alert ("Задача \"Вывод каждую секунду\" ");

function printNumbers_setInterval(from, to) {

	alert("Через setInterval");

	let number = from;
	let timerId = setInterval( function() {
		alert(number); 

		if (number == to) {
			clearInterval(timerId);
		}

		number++
	}, 1000);
	
}

function printNumbers_setTimeout(from, to) {

	alert("Через setTimeout");

	let number = from;
	let timerId = setTimeout(function tick() {
		alert(number);
		number++;

		if (number <= to) {
			timerId = setTimeout(tick, 1000);
		}
	}, 1000);
}


setTimeout(printNumbers_setTimeout, 7 * 1000, 9, 12);

printNumbers_setInterval(3, 7);


