var lattice = '#';
var space = ' ';
var result = '';
var str = true;
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    if ((j + str) % 2 == 0) {
      result += space;
    } else {
      result += lattice;
    }
  }
  console.log(result);
  result = '';
  str = !str;
}