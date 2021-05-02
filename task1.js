var str = prompt ('Введите строку на русском языке:');
var vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

function numberOfVowels (str) {
  var count = 0;
  for (var symbol of str.toLowerCase()) {
    if (vowels.includes (symbol)) {
      count += 1;
    }
  }
  return count;
}

console.log(numberOfVowels(str));
alert ('Число гласных букв: ' + numberOfVowels(str));