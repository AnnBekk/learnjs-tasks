// Задача "Вывести простые числа" 
'use strict';
alert ("Задача \"Вывести простые числа\" ");

let number = 11;

NextStep:
for (let i = 2; i <= number; i++) {
	for (var j = 2; j < i; j++) {
		
		if (i%j == 0) continue NextStep;
	}

	alert (i);
}