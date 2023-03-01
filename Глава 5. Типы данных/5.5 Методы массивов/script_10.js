// Задача "Перемешайте массив" 

'use strict';
alert ("Задача \"Перемешайте массив\" ");

let array = [1, 2, 3];

function shuffle(arr) {

	for (let i = arr.length - 1; i > 0; i--) {
	    let j = Math.floor(Math.random() * (i + 1));
	    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

shuffle(array);
alert(array);

shuffle(array);
alert(array);
