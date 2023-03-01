// Задача "Перепишите функцию, используя оператор '?' или '||'" 
'use strict';
alert ("Задача \"Перепишите функцию, используя оператор \'?\' или \'||\'\" ");

function checkAge1(age) {

	return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {

	return (age > 18) || confirm('Родители разрешили?');
}

checkAge1(2);
checkAge2(12);