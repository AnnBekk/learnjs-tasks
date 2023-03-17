// Задача "Декоратор debounce" 
'use strict';

function debounce(f, ms) {

	let ready = true;

	return function() {

		if (!ready) return;

		f.apply(this, arguments);

		ready = false;

		setTimeout(() => ready = true, ms);

		};

}

let func = debounce(alert, 1000);

func(1); // выполняется немедленно
func(2); // проигнорирован

setTimeout( () => func(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => func(4), 1100); // выполняется
setTimeout( () => func(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)