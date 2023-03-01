// Задача "Переведите текст вида border-left-width в borderLeftWidth" 

'use strict';
alert ("Задача \"Переведите текст вида border-left-width в borderLeftWidth\" ");

function camelize(str) {
	return str.split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

alert(camelize("my-short-string-test"));