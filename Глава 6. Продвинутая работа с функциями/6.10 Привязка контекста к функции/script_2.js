// Задача "Использование частично применённой функции для логина" 
'use strict';
alert ("Задача \"Использование частично применённой функции для логина\" ");

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user2.login.bind(user2, true), user2.login.bind(user2, false));