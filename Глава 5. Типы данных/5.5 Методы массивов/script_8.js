// Задача "Трансформировать в объекты" 

'use strict';
alert ("Задача \"Трансформировать в объекты\" ");

let kolya = { name: "Коля", surname: "Пупкин", id: 1 };
let misha = { name: "Миша", surname: "Иванов", id: 2 };
let katya = { name: "Катя", surname: "Петрова", id: 3 };

let users = [kolya, misha, katya];

let usersMapped = users.map(item => ({
	fullName: item.name + " " + item.surname,
	id: item.id
}));

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Коля Пупкин