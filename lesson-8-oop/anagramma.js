function anClean (arr) {
  var rewrittenValues = {};
  for (var i = 0; i < arr.length; i++) {
    var result = arr[i].toLowerCase().split ('').sort().join('');
    rewrittenValues[result] = arr[i];
  }
  return Object.values(rewrittenValues)
}
var arr = ['ВОЗ', 'зов', 'киборг', 'гробик', 'костер', 'сектор', 'корсет', 'ток', 'кот'];
console.log (anClean(arr));