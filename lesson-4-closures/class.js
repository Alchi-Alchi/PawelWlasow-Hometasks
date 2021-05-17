var obj = {
  className: 'open menu blabla'
};
function removeClass(obj, cls) {
  obj.className = obj.className.split(' ').filter(i => i != cls).join(' ');
}
removeClass(obj, 'menu');
console.log(obj.className);