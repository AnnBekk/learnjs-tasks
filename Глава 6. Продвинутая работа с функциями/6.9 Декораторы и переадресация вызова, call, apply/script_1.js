// Задача "Декоратор-шпион" 
'use strict';
alert ("Задача \"Декоратор-шпион\" ");

function spy(func) {

	wrapper.calls = [];

	function wrapper(...args) {
		wrapper.calls.push(args);
		return func.apply(this, args);
	}

	return wrapper;
}

function work(a, b) {
  alert( a + b );
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

