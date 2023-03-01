// Задача "Случайное число от min до max" 
'use strict';
alert ("Задача \"Случайное число от min до max\" ");

function random(min, max) {
  
  let randomNumber = min + Math.random() * (max - min);
  return randomNumber;
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );