// Задача "Фильтрация по диапазону" 

'use strict';
alert ("Задача \"Фильтрация по диапазону\" ");

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {

	return arr.filter(item => (item >= a && item <= b));;
}

alert(filtered );

alert(arr);