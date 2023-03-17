// Задача "Вычислить сумму чисел до данного" 
'use strict';
alert ("Задача \"Вычислить сумму чисел до данного\" ");

function sumTo_cycle(n) {
	let result = 0;
	for(let i = 1; i <= n; i++) {
		result += i;
	}
	return result;
}

function sumTo_recursion(n) {
	
	if (n == 1) {
		return n;
	} else {
		return n + sumTo_recursion(n - 1);
	}
}

function sumTo_progression(n) {
  return n * (n + 1) / 2;
}

alert( `С использованием цикла: ${sumTo_cycle(100)}`);

alert( `Через рекурсию: ${sumTo_recursion(100)}`);

alert( `С использованием формулы арифметической прогрессии: ${sumTo_progression(100)}`);