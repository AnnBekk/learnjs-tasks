// Задача "Напишите "if", аналогичный "switch"" 
'use strict';
alert ("Задача \"Напишите \"if\", аналогичный \"switch\"\" ");

let browser = 'Safari';

if (browser == 'Edge') {
	alert( "You've got the Edge!" );
} else if (browser == 'Chrome' 
		|| browser == 'Firefox' 
		|| browser == 'Safari' 
		|| browser == 'Opera') {
	alert( 'Okay we support these browsers too' );
} else {
	alert( 'We hope that this page looks ok!' );
}
