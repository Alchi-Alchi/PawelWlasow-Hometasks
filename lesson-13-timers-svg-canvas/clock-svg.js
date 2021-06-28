var wrapper = document.querySelector('.clock-wrapper');
var body = document.querySelector('body');
body.style.background = 'black';
var sizeClockFace = 420;
var degBetweenHours = 30;
var degValue = 0;
var CurrTime = new Date();
var xmlns = 'http://www.w3.org/2000/svg';
wrapper.style.width = sizeClockFace + 4;
wrapper.style.height = sizeClockFace + 4;
var centerX = wrapper.getBoundingClientRect().width / 2;
var centerY = wrapper.getBoundingClientRect().height / 2;
var radius = 180;
var clockFaceCX = sizeClockFace / 2;
var clockFaceCY = sizeClockFace / 2;
var clockFaceR = sizeClockFace / 2;
var clockFaceColor = '#131417';
var clockFace = document.createElementNS (xmlns, 'circle');
clockFace.setAttribute ('cx', clockFaceCX);
clockFace.setAttribute ('cy', clockFaceCY);
clockFace.setAttribute ('r', clockFaceR);
clockFace.setAttribute ('fill', clockFaceColor);
clockFace.setAttribute ('stroke', 'white');
clockFace.setAttribute ('stroke-width', '4');
wrapper.appendChild (clockFace);
wrapper.style.xmlns = xmlns;
// Расставление цифр
window.onload = function () {
  var i;
  var count = 1;
  for (i = 1; i <= 12; i++) {
    var svgNumber = document.createElementNS(xmlns, 'text');
    degValue += degBetweenHours;
    var deg = degValue / 180 * Math.PI;
    svgNumberX = Math.round(centerX + radius * Math.sin(deg) - svgNumber.getBoundingClientRect().left);
    svgNumberY = Math.round(centerY - radius * Math.cos(deg) - svgNumber.getBoundingClientRect().top);
    svgNumber.innerHTML = count;
    svgNumber.setAttribute ('x', svgNumberX);
    svgNumber.setAttribute ('y', svgNumberY);
    svgNumber.setAttribute ('text-anchor', 'middle');
    svgNumber.setAttribute ('dominant-baseline', 'central');
    svgNumber.setAttribute ('fill', 'white');
    svgNumber.style.fontSize = 36;
    svgNumber = wrapper.appendChild (svgNumber);
    count++;
  }
}
// Создание стрелок, электронных часов и присваивание им атрибутов
digitalTime = document.createElementNS (xmlns, 'text');
digitalTime.setAttribute ('x', centerX);
digitalTime.setAttribute ('y', centerY - radius / 2);
digitalTime.setAttribute("text-anchor", "middle");
digitalTime.setAttribute("dominant-baseline", "central");
digitalTime.setAttribute ('fill', 'darkorange');
digitalTime.style.fontSize = 36;
wrapper.appendChild (digitalTime);
digitalDate = document.createElementNS (xmlns, 'text');
digitalDate.setAttribute ('x', centerX);
digitalDate.setAttribute ('y', centerY + radius / 2);
digitalDate.setAttribute("text-anchor", "middle");
digitalDate.setAttribute("dominant-baseline", "central");
digitalDate.setAttribute ('fill', 'darkorange');
digitalDate.style.fontSize = 36;
wrapper.appendChild (digitalDate);
hArrow = document.createElementNS (xmlns, 'line');
hArrow.setAttribute ('x1', centerX - wrapper.getBoundingClientRect().left);
hArrow.setAttribute ('y1', centerY - 120 - wrapper.getBoundingClientRect().top);
hArrow.setAttribute ('x2', centerX  - wrapper.getBoundingClientRect().left);
hArrow.setAttribute ('y2', centerY);
hArrow.setAttribute ('stroke', 'white');
hArrow.setAttribute ('stroke-width', '6');
hArrow.setAttribute ('stroke-linecap', 'round');
wrapper.appendChild (hArrow);
mArrow = document.createElementNS (xmlns, 'line');
mArrow.setAttribute ('x1', centerX - wrapper.getBoundingClientRect().left);
mArrow.setAttribute ('y1', centerY - 150 - wrapper.getBoundingClientRect().top);
mArrow.setAttribute ('x2', centerX  - wrapper.getBoundingClientRect().left);
mArrow.setAttribute ('y2', centerY);
mArrow.setAttribute ('stroke', 'white');
mArrow.setAttribute ('stroke-width', '4');
mArrow.setAttribute ('stroke-linecap', 'round');
wrapper.appendChild (mArrow);
sArrow = document.createElementNS (xmlns, 'line');
sArrow.setAttribute ('x1', centerX - wrapper.getBoundingClientRect().left);
sArrow.setAttribute ('y1', centerY - 160 - wrapper.getBoundingClientRect().top);
sArrow.setAttribute ('x2', centerX - wrapper.getBoundingClientRect().left);
sArrow.setAttribute ('y2', centerY);
sArrow.setAttribute ('stroke', 'darkred');
sArrow.setAttribute ('stroke-width', '2');
wrapper.appendChild (sArrow);
// Задать ось
hArrow.style.transformOrigin = 'center 210px';
mArrow.style.transformOrigin = 'center 210px';
sArrow.style.transformOrigin = 'center 210px';
var centerCircle = document.createElementNS (xmlns, 'circle');
centerCircle.setAttribute ('cx', clockFaceCX);
centerCircle.setAttribute ('cy', clockFaceCY);
centerCircle.setAttribute ('r', clockFaceR / 15);
centerCircle.setAttribute ('fill', 'darkorange');
wrapper.appendChild (centerCircle);
function formatTime(DT) {
  var Hours = DT.getHours();
  var Minutes = DT.getMinutes();
  var Seconds = DT.getSeconds();
  return Str0L(Hours, 2) + ':' + Str0L(Minutes, 2) + ':' + Str0L(Seconds, 2);
}
function formatDate (DT) {
  var Year = DT.getFullYear();
  var Month = DT.getMonth() + 1;
  var Day = DT.getDate();
  return Str0L(Day, 2) + '.' + Str0L(Month, 2) + '.' + Year;
}
function Str0L(Val, Len) {
  var StrVal = Val.toString();
  while (StrVal.length < Len)
    StrVal = '0' + StrVal;
  return StrVal;
}
var hDeg = degBetweenHours * (CurrTime.getHours() + (1/60) * CurrTime.getMinutes());
var mDeg = 6 * (CurrTime.getMinutes() + (1/60) * CurrTime.getSeconds());
var sDeg = 6 * CurrTime.getSeconds() - 6;
function arrows () {
  var CurrTime = new Date();
  digitalTime.innerHTML = formatTime(CurrTime);
  digitalDate.innerHTML = formatDate(CurrTime);
  sDeg += 6;
  sArrow.style.transform = "rotate(" + sDeg + "deg)";
  mDeg += 6 * (1/60);
  mArrow.style.transform = "rotate(" + mDeg + "deg)";
  hDeg += 6 * (1/360);
  hArrow.style.transform = "rotate(" + hDeg + "deg)";
}
arrows();
setInterval (arrows, 1000);