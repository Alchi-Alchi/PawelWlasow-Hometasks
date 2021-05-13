function sumNumbers() {
  var massiveOfNumbers = [];
  while (true) {
    var numbers = prompt ('Введите слагаемое:');
    if (numbers === "" || numbers === null || !isFinite(numbers)) break;
    massiveOfNumbers.push (+numbers);
  }

  var sum = 0;
  for (var number of massiveOfNumbers) {
    sum += number;
  }
  return sum;
}

console.log (sumNumbers());

