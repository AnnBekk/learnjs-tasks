// Задача "Функция pow(x,n)" 
'use strict';
alert ("Задача \"Функция pow(x,n)\" ");

function pow(x,n) {

	let answer = x;

	for (let i = 2; i <= n; i++) {
		answer *= x;
	}
	return answer;
}

let x = prompt ("Введите x", "");
let n = prompt ("Введите натуральное n", "");

if (n<1) {
	alert ("Это число не подходит для n", "");
} else {
	alert (pow(x,n));
}

