// Задача "Добавить функциям метод "f.defer(ms)"" 
'use strict';
alert ("Задача \"Добавить функциям метод \"f.defer(ms)\"\" ");

Function.prototype.defer = function(ms) {
	setTimeout(this, ms);
};

function f() {
  alert("Hello!");
}

f.defer(1000);
f.defer(3000); 

