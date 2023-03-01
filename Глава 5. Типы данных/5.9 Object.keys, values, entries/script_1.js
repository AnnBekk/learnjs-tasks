// Задача "Сумма свойств объекта" 

'use strict';
alert ("Задача \"Сумма свойств объекта\" ");

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {

	let sum = 0;

	for (let salary of Object.values(salaries)) {
		sum += salary;
	}

	return sum;
}

alert( sumSalaries(salaries) ); // 650