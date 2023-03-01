// Задача "Сумма введённых чисел" 

'use strict';
alert ("Задача \"Сумма введённых чисел\" ");

function sumInput() {
	let arr = [];

	while (true) {

    let newArrayElem = prompt("Введите число", 0);

    if (!isFinite(newArrayElem) ||newArrayElem === "" || newArrayElem === null) break;

    arr.push(+newArrayElem);
	}

 	let sum = 0;
  	for (let elem of arr) {
    sum += elem;
  	}

  	return sum;
}

alert(sumInput());