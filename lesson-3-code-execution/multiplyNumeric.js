var image = {
  width: 100,
  height: 400,
  title: 'Cool image'
};
function multiplyNumeric(object) {
  for (var key in object) {
    if (typeof object [key] == 'number') {
      object [key] *=2;
    }
  }
  return object;
}
console.log (multiplyNumeric(image));