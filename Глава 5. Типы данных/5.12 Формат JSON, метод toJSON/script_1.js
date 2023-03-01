// Задача "Преобразуйте объект в JSON, а затем обратно в обычный объект" 

'use strict';
alert ("Задача \"Преобразуйте объект в JSON, а затем обратно в обычный объект\" ");

let user = {
	name: "Василий Иванович",
	age: 35
};

let parsedUser = JSON.parse(JSON.stringify(user));

alert(parsedUser.name);