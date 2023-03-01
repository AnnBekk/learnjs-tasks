// Задача "Скопировать и отсортировать массив" 

'use strict';
alert ("Задача \"Скопировать и отсортировать массив\" ");

let digitsArr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(digitsArr);

function copySorted(arr) {
  return arr.slice().sort();
}

alert(sorted); // CSS, HTML, JavaScript
alert(digitsArr); // HTML, JavaScript, CSS (без изменений)







