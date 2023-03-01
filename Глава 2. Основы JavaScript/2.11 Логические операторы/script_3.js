// Задача "Проверка логина" 

'use strict';
alert ("Задача \"Проверка логина\" ");

let login;

login = prompt("Кто там?", "");

if (login == "Админ") {

	let password;

	password = prompt("Пароль?", "");

	if (password == "Я главный") {
		alert("Здравствуйте!");
	} else if (password == "" || password == null) {
		alert("Отменено");
	} else {
		alert("Неверный пароль");
	}

} else if (login == "" || login == null) {
	alert("Отменено");
} else {
	alert("Я вас не знаю");
}