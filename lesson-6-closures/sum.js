function sum (a) {
  function term (b) {
    return a + b;
  }
  return term
}
console.log (sum (3) (9));