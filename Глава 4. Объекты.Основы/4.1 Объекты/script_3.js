// Задача "Сумма свойств объектау" 
'use strict';
alert ("Задача \"Сумма свойств объекта\" ");

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for (let prop in salaries) {
	sum += salaries[prop];
}

alert (sum);