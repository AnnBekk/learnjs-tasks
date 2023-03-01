// Задача "Выделить число" 

'use strict';
alert ("Задача \"Выделить число\" ");

function extractCurrencyValue(str) {

	return +str.slice(1);
}

alert(extractCurrencyValue("$120"));