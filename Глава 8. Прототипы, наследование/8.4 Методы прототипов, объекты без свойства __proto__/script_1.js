// Задача "Добавьте toString в словарь" 
'use strict';
alert ("Задача \"Добавьте toString в словарь\" ");

let dictionary = Object.create(null, {
	toString: {
		value() {
			return Object.keys(this).join();
		}
	}
});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

alert(dictionary); // "apple,__proto__"

