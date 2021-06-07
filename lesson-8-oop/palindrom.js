function isPal (str) {
  var str1 = str.toLowerCase().replace(/\s/g, '').split ('').reverse().join('');
  var str2 = str.toLowerCase().replace(/\s/g, '').split ('').join('');
  if (str1 == str2) {
    console.log ('Это палиндром')
  } else {
    console.log ('Это не палиндром')
  }
};
isPal('А роза упала на лапу Азора');
isPal('Анна');
isPal('Окно');
isPal('12321');