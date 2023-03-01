// Задача "Повторять цикл, пока ввод неверен" 
'use strict';
alert ("Задача \"Повторять цикл, пока ввод неверен\" ");

let EnteredNumber;
do {
	EnteredNumber = prompt("Введите число больше 100", 0);
} while (EnteredNumber <= 100 && EnteredNumber)

