var wrapper = document.querySelector('.clock-wrapper');
var sizeClockFace = '420px';
var CurrTime = new Date();
var hArrow = document.createElement('div');
hArrow.style.height = '100px';
hArrow.style.border = '3px solid white';
var hDeg = 30 * (CurrTime.getHours() + (1/60) * CurrTime.getMinutes());
var mDeg = 6 * (CurrTime.getMinutes() + (1/60) * CurrTime.getSeconds());
var sDeg = 6 * (CurrTime.getSeconds() + (1/60) - 1);
var degBetweenHours = 30;
var degValue = 0;
var mArrow = document.createElement('div');
mArrow.style.height = '130px';
mArrow.style.border = '2px solid white';
var sArrow = document.createElement('div');
sArrow.style.height = '150px';
sArrow.style.border = '1px solid darkred';
var digitalTime = document.createElement('span');
var digitalDate = document.createElement('span');
var clockFace = document.createElement('div');
wrapper.appendChild (clockFace).id = 'clockface';
clockFace.style.width = sizeClockFace;
clockFace.style.height = sizeClockFace;
var radius = 180;
var centerX = clockFace.offsetWidth/2;
var centerY = clockFace.offsetHeight/2;
clockFace.appendChild(hArrow).id = 'arrow';
clockFace.appendChild(mArrow).id = 'arrow';
clockFace.appendChild(sArrow).id = 'arrow';
clockFace.appendChild(digitalTime).id = 'digitalTime';
clockFace.appendChild(digitalDate).id = 'digitalDate';
digitalTime.style.top = radius / 3 +'px';
digitalDate.style.bottom = radius / 3 + 'px';
digitalDate.style.left = '35%';
window.onload = function () {
  var i;
  var count = 1;
  for (i = 1; i <= 12; i++) {
    var divNumber = document.createElement('div');
    clockFace.appendChild (divNumber).id = 'number';
    divNumber.innerHTML = count;
    degValue += degBetweenHours;
    var deg = degValue / 180 * Math.PI;
    divNumberCenterX = centerX + radius * Math.sin(deg);
	  divNumberCenterY = centerY - radius * Math.cos(deg);
    divNumber.style.top = Math.round (divNumberCenterY - divNumber.offsetHeight/2) + 'px';
    divNumber.style.left = Math.round (divNumberCenterX - divNumber.offsetWidth/2) + 'px';
    count++;
  }
}
setInterval(UpdateTime, 1000);
function FormatTime(DT) {
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
function UpdateTime() {
  var CurrTime = new Date();
  var CurrTimeStr = FormatTime(CurrTime);
  var CurrDateStr = formatDate(CurrTime);
  document.getElementById('digitalTime').innerHTML = CurrTimeStr;
  document.getElementById('digitalDate').innerHTML = CurrDateStr;
}
function Str0L(Val, Len) {
  var StrVal = Val.toString();
  while (StrVal.length < Len)
    StrVal = '0' + StrVal;
  return StrVal;
}
sArrow.style.top = centerY - sArrow.offsetHeight + 'px';
sArrow.style.left = centerX - sArrow.offsetWidth + 'px';
mArrow.style.top = centerY - mArrow.offsetHeight + 'px';
mArrow.style.left = centerX - mArrow.offsetWidth + 'px';
hArrow.style.top = centerY - hArrow.offsetHeight + 'px';
hArrow.style.left = centerX - hArrow.offsetWidth + 'px';
hArrow.style.transformOrigin = 'center 100px';
mArrow.style.transformOrigin = 'center 130px';
sArrow.style.transformOrigin = 'center 150px';
function arrows () {
  sDeg += 6;
  sArrow.style.transform = "rotate(" + sDeg + "deg)";
  mDeg += 6 * (1/60);
  mArrow.style.transform = "rotate(" + mDeg + "deg)";
  hDeg += 6 * (1/360);
  hArrow.style.transform = "rotate(" + hDeg + "deg)";
}
arrows();
setInterval(arrows, 1000);