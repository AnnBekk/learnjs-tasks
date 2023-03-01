// Задача "Случайное целое число от min до max" 
'use strict';
alert ("Задача \"Случайное целое число от min до max\" ");

function randomInteger(min, max) {

  let randomInt = min + Math.random() * (max + 1 - min);
  return Math.floor(randomInt);
}

alert(randomInteger(1, 3));
alert(randomInteger(1, 3));
alert(randomInteger(1, 3));