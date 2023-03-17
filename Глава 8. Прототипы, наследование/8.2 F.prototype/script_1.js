// Задача "Создайте новый объект с помощью уже существующего" 
'use strict';
alert ("Задача \"Создайте новый объект с помощью уже существующего\" ");


// работающий пример:

function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");


// неработающий пример:

function Cat(name) {
  this.name = name;
  alert(name);
}

Cat.prototype = {
  jumps: true
};

let cat = new Cat("White Cat");
let cat2 = new cat.constructor("Black Cat");
alert(cat.constructor === Cat); // false
