// Задача "Создайте калькулятор при помощи конструктора, new Calculator" 
'use strict';
alert ("Задача \"Создайте калькулятор при помощи конструктора, new Calculator\" ");

function Calculator() {
  this.read = function() {
  	this.firstValue = +prompt("Первое значение: ", 0);
  	this.secondValue = +prompt("Второе значение: ", 0);
  };

  this.sum = function() {
  	return this.firstValue + this.secondValue;
  };

  this.mul = function() {
  	return this.firstValue * this.secondValue;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
