// Задача "Подсчёт количества свойств объекта" 

'use strict';
alert ("Задача \"Подсчёт количества свойств объекта\" ");

let user = {
  name: 'John',
  surname: 'Wick',
  age: 30
};

function count(obj) {
	return Object.keys(obj).length;
}

alert(count(user)); // 3