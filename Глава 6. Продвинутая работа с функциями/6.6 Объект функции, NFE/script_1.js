// Задача "Установка и уменьшение значения счётчика" 
'use strict';
alert ("Задача \"Установка и уменьшение значения счётчика\" ");

function makeCounter() {

    function counter() {
    	return counter.count++;
	};

  	counter.count = 0;

  	counter.set = (value) => counter.count = value;
  	counter.decrease = () => counter.count--;

  	return counter;
}
  
let counter = makeCounter();
  
alert( counter() ); // 0
alert( counter() ); // 1
  
counter.set(10); // установить новое значение счётчика
alert( counter() ); // 10
  
counter.decrease(); // уменьшить значение счётчика на 1 
alert( counter() ); // 10 (вместо 11)