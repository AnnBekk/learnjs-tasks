// Задача "Сортировать по полю" 
'use strict';
alert ("Задача \"Сортировать по полю\" ");

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
	return function(a, b) {
		return a[field] > b[field] ? 1 : -1;
	} 
}

users.sort(byField('name'));
alert("По имени");
users.forEach(user => alert(user.name)); // Ann, John, Pete

users.sort(byField('age'));
alert("По возрасту");
users.forEach(user => alert(user.name)); // Pete, Ann, John