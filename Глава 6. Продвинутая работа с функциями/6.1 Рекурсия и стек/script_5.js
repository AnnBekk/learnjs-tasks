// Задача "Вывод односвязного списка в обратном порядке" 
'use strict';
alert ("Задача \"Вывод односвязного списка в обратном порядке\" ");

let list_2 = {
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

function printrReverseList_cycle(list) {
	let arr = [];
	let item = list;
	while(item != null) {
		arr.push(item.value);
		item = item.next;
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		alert(arr[i]);
	}
}

function printReverseList_recursion(list) {
	if (list != null) {
		printReverseList_recursion(list.next);
		alert (list.value);
	}
}

alert("Вывод через цикл");
printrReverseList_cycle(list_2);

alert("Вывод через рекурсию");
printReverseList_recursion(list_2);

