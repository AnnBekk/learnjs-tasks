// Задача "Подмассив наибольшей суммы" 

'use strict';
alert ("Задача \"Подмассив наибольшей суммы\" ");

let arr = [2, -1, 2, 3, -9];

function getMaxSubSum(arr) {

	let maxSum = 0;
	let partialSum = 0;

	for (let item of arr) {
		partialSum += item;
		maxSum = Math.max(maxSum, partialSum);

		if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}

alert(getMaxSubSum(arr));