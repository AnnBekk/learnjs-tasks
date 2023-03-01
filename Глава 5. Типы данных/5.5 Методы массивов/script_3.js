// Задача "Фильтрация по диапазону "на месте"" 

'use strict';
alert ("Задача \"Фильтрация по диапазону \"на месте\"\" ");

let array = [5, 3, 8, 1, -2];

filterRangeInPlace(array, 1, 4);

function filterRangeInPlace(arr, a, b) {

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < a || arr[i] > b) {
			arr.splice(i, 1);
			i--;
		}
	}
}

alert(array); // [3, 1]