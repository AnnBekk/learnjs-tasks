// Задача "Деструктурирующее присваивание" 

'use strict';
alert ("Задача \"Деструктурирующее присваивание\" ");

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false