var wrapper = document.querySelector('.clock-wrapper');
// Задаём размер циферблата и параметры
var sizeClockFace = 480;
wrapper.setAttribute ('width', sizeClockFace);
wrapper.setAttribute ('height', sizeClockFace);
// Объявляем переменные
var context = wrapper.getContext('2d');
var degBetweenHours = 30;
var degValue = 0;
var radius = 180;
// Вычисление центра 
var centerX = wrapper.offsetWidth / 2;
var centerY = wrapper.offsetHeight / 2;
var currTime = new Date();
// Рисуем циферблат и расставляем цифры
function clockFace () {
  context.fillStyle = '#131417';
	context.beginPath();
	context.arc(centerX, centerY, 210, 0,Math.PI * 2, false);
	context.fill();
  var i;
  for (i = 1; i <= 12; i++) {
    degValue += degBetweenHours;
    var deg = degValue / 180 * Math.PI;
    canvasNumberX = Math.round(centerX + radius * Math.sin(deg));
    canvasNumberY = Math.round(centerY - radius * Math.cos(deg));
    context.beginPath();
    context.fillStyle = '#131417';
	  context.beginPath();
	  context.arc(centerX, centerY, 150, 0, Math.PI * 2, false);
	  context.fill();
    context.fillStyle ='white';
		context.font ="normal normal 36px 'Times New Roman'";
		context.textAlign='center';
		context.textBaseline='middle';
		context.fillText(i,canvasNumberX, canvasNumberY);
  }
}
// Круг для наложения циферблата и создания эффекта рамки
function border () {
  context.fillStyle = 'darkorange';
	context.beginPath();
	context.arc(centerX, centerY, 220, 0 ,Math.PI * 2, false);
	context.fill();
}
// Электронные часы
function digitalTime() {
	var currTime = new Date(); 
	context.beginPath();
	context.fillStyle = "darkorange";
	time = currTime.toLocaleTimeString();
	context.font ="normal normal 36px 'Times New Roman'";
	context.textAlign='center';
	context.textBaseline='middle';
	context.fillText(time, centerX, centerY - 120);	
	context.fill();
}
// Электронная дата
function digitalDate() {
	var currTime = new Date(); 
	context.beginPath();
	context.fillStyle = "darkorange";
	time = currTime.toLocaleDateString();
	context.font ="normal normal 36px 'Times New Roman'";
	context.textAlign='center';
	context.textBaseline='middle';
	context.fillText(time, centerX, centerY + 120);	
	context.fill();
}
// Функции для стрелок
function hArrow() {
	var currTime = new Date();
	hDeg = 30 * (currTime.getHours() + (1 / 60) * currTime.getMinutes());
	context.strokeStyle = "white";
	context.lineWidth = 5;
	context.lineCap = "round";
	context.beginPath();
	context.moveTo(centerX, centerY);
	context.lineTo(centerX + 100 * Math.sin(hDeg / 180 * Math.PI), centerY - 100 * Math.cos(hDeg / 180 * Math.PI));
	context.stroke();
}
function mArrow() {
	var currTime = new Date();
	mDeg = 6 * (currTime.getMinutes() + (1 / 60) * currTime.getSeconds());
	context.strokeStyle = "white";
	context.lineWidth = 3;
	context.lineCap = "round";
	context.beginPath();
	context.moveTo(centerX, centerY);
	context.lineTo(centerX + 120 * Math.sin(mDeg / 180 * Math.PI), centerY - 110 * Math.cos(mDeg / 180  *Math.PI));
	context.stroke();
}
function sArrow() {
	var currTime = new Date();
	sDeg = 6 * currTime.getSeconds();
	context.strokeStyle = "darkred";
	context.lineWidth = 1;
	context.lineCap = "round";
	context.beginPath();
	context.moveTo(centerX, centerY);
	context.lineTo(centerX + 140 * Math.sin(sDeg / 180 * Math.PI), centerY - 120 * Math.cos(sDeg / 180 * Math.PI));
	context.stroke();
}
// Функция обертка для остальных функций, все они вызываются с интервалом в 1с. Без вызова их через интервал, стрелки будут множится.
function wrapperForArrows () {
	border ()
  clockFace ();
	digitalTime();
  hArrow ();
  mArrow ();
  sArrow ();
	digitalDate()
}
setInterval (wrapperForArrows, 1000);