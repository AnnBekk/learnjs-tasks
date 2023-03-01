// Задача "Фильтрация уникальных элементов массива" 

'use strict';
alert ("Задача \"Фильтрация уникальных элементов массива\" ");

function unique(arr) {
	return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O