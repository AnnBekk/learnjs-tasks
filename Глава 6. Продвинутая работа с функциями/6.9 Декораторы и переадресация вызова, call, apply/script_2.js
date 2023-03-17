// Задача "Задерживающий декоратор" 
'use strict';
alert ("Задача \"Задерживающий декоратор\" ");

function delay(f, ms) {

	return function() {
		setTimeout(() => f.apply(this, arguments), ms);
	};

}

function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f4000 = delay(f, 4000);

f1000("test"); // показывает "test" после 1000 мс
f4000("test"); // показывает "test" после 4000 мс