// Задача "Получить средний возраст" 

'use strict';
alert ("Задача \"Получить средний возраст\" ");

let kolya = { name: "Коля", age: 25 };
let misha = { name: "Миша", age: 30 };
let katya = { name: "Катя", age: 29 };

let namesArr = [kolya, misha, katya];

function getAverageAge(arr) {
	let result = arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
	return result;
}

alert(getAverageAge(namesArr)); // (25 + 30 + 29) / 3 = 28