function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}



function pow(x, n) {
    var result = x;
  
    for (var i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  var x = prompt('Введите, пожалуйста, число x');
  var n = prompt('Введите, пожалуйста, число n');
  
  if (n < 1 || n != parseInt(n)) {
    alert('Степень ' + n + 'не поддерживается, введите, пожалуйста, натуральное число');
  } else {
    alert( pow(x, n) );
  }