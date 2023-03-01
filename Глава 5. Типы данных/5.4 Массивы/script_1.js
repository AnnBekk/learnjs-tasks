// Задача "Операции с массивами" 

'use strict';
alert ("Задача \"Операции с массивами\" ");

let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

let arrMiddle = Math.floor((styles.length - 1) / 2);
styles[arrMiddle] = "Классика";

alert(styles.shift());

styles.unshift("Рэп", "Регги");
