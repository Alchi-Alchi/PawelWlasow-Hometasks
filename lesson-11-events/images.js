var container = document.getElementById('container')
var images = container.querySelectorAll('img');
var displacementImgX = 0;
var displacementImgY = 0;
var elemWithEvent;
window.addEventListener('load', setPosition);
function getElementPosition(elem) {
  var borderBox = elem.getBoundingClientRect();
  return {
    left: borderBox.left + window.pageXOffset,
    top: borderBox.top + window.pageYOffset
  };
}
function setPosition() {
  for (var elem of images) {
    var position = getElementPosition(elem);
    elem.style.left = position.left + 'px';
    elem.style.top = position.top + 'px';
    elem.addEventListener('mousedown', mousedown);
    elem.addEventListener('mouseup', mouseup);
    elem.addEventListener('mouseover', mouseover);
  }
  for (var elem of images) {
     elem.style.position = 'absolute';
  }
}
function mouseover (EO) {
  EO = EO || window.event;
  EO.preventDefault();
  elemWithEvent = EO.target;
  elemWithEvent.style.cursor = 'move';
}
function mousedown (EO) {
  EO = EO || window.event;
  EO.preventDefault();
  elemWithEvent = EO.target;
  var position = getElementPosition(elemWithEvent);
  displacementImgX = EO.pageX - position.left;
  displacementImgY = EO.pageY - position.top;
  container.appendChild(elemWithEvent);
  elemWithEvent.style.cursor = 'pointer';
  window.addEventListener('mousemove', mousemove);
}
function mousemove (EO) {
  EO = EO || window.event;
  EO.preventDefault();
  elemWithEvent.style.left = (EO.pageX - displacementImgX) + 'px';
  elemWithEvent.style.top = (EO.pageY - displacementImgY) + 'px';
}
function mouseup (EO) {
  EO = EO || window.event;
  EO.preventDefault();
  window.removeEventListener('mousemove', mousemove);
  elemWithEvent.style.cursor = 'default';
}