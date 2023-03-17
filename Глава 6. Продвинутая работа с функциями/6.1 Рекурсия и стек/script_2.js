// Задача "Вычислить факториал" 
'use strict';
alert ("Задача \"Вычислить факториал\" ");

function factorial(n) {
	
	if (n == 1) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}

alert(`${3}! = ${factorial(3)}`);

alert(`${7}! = ${factorial(7)}`);
