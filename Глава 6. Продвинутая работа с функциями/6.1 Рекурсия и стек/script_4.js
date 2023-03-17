// Задача "Вывод односвязного списка" 
'use strict';
alert ("Задача \"Вывод односвязного списка\" ");

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList_cycle(list) {
	
	let item = list;
	while(item != null) {
		alert(item.value);
		item = item.next;
	}
}

function printList_recursion(list) {
	if (list != null) {
		alert (list.value);
		printList_recursion(list.next);
	}
}

alert("Вывод через цикл");
printList_cycle(list);

alert("Вывод через рекурсию");
printList_recursion(list);

