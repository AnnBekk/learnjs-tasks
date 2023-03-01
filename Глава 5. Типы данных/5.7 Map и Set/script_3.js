// Задача "Перебираемые ключи" 

'use strict';
alert ("Задача \"Перебираемые ключи\" ");

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);