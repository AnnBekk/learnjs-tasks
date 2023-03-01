// Задача "Трансформировать в массив имён" 

'use strict';
alert ("Задача \"Трансформировать в массив имён\" ");

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let usersName = [vasya, petya, masha];

let names = usersName.map(item => item.name);

alert(names);