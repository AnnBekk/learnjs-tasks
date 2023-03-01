// Задача "Создайте калькулятор" 
'use strict';
alert ("Задача \"Создайте калькулятор\" ");

let calculator = {
  read() {
  	this.firstValue = +prompt("Первое значение: ", 0);
  	this.secondValue = +prompt("Второе значение: ", 0);
  },
  sum() {
  	return this.firstValue + this.secondValue;
  },
  mul() {
  	return this.firstValue * this.secondValue;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );