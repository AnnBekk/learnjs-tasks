// Задача "Максимальная зарплата" 

'use strict';
alert ("Задача \"Максимальная зарплата\" ");

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {

	let maxSalary = 0;
	let maxSalaryName = null;

	for (let [name, salary] of Object.entries(salaries)) {
		if (salary > maxSalary) {

			maxSalary = salary;
			maxSalaryName = name;
		}
	}

	return maxSalaryName;
}

alert(topSalary(salaries));