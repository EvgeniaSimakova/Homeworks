//Task 1
function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  alert( sumTo(9) );

function sumTo(n) {
    return ((1 + n) * n) / 2;
  }
  
  alert( sumTo(9) );

function sumTo(n) {
    if (n == 1) return 1;
        else if (n < 1) {
            alert ('Enter the digit > 1');
        } else {
            return n + sumTo(n - 1);
        }
  }
  
  alert( sumTo(900) );

  // Самый быстрый способ через готовую функцию, меньше всего итераций требуется, самый медленный - через 
  // рекурсию, потому что рекурсия всегда тратит много памяти
  // Нельзя посчитать для 100000, поскольку движок JS ограничивает максимальную глубину рекурсии, 
  // для большинства интерпретаторов максимум это 10000


// Task 2
var arr = [
    5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
];

function treeSum(arr) {
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
			sum += arr[i];
		} else if (typeof arr[i] === 'object' && arr[i] !== null && arr.length !== undefined) {
      var elemRecursion = treeSum(arr[i]);
      sum += elemRecursion;
    }
	}
  return sum;
}

alert(treeSum(arr));



