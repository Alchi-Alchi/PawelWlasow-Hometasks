var yourName = prompt ('Введите ваше имя:');
var lastname = prompt ('Введите вашу фамилию:');
var patronymic = prompt ('Введите ваше отчество:');
var age = prompt ('Сколько вам полных лет:');
var gender = confirm ('Нажмите ок, если ваш пол мужской. Отмена если женский:');
var pension;

while (age == false || age == null || age <= 0 || age > 120) {
  var age = prompt ('Сколько вам полных лет:');
}

while (yourName == false || yourName == null) {
  var yourName = prompt ('Введите ваше имя:');
}

while (lastname == false || lastname == null) {
  var lastname = prompt ('Введите вашу фамилию:');
}

while (patronymic == false || patronymic == null) {
  var patronymic = prompt ('Введите ваше отчество:');
}

var fio = lastname + ' ' + yourName + ' ' + patronymic;
var daysAge = (age/4) + age * 365;
var futureAge = parseInt(age) + 5;

if (age > 65) {
  pension = 'Да';
}
else {
  pension = 'Нет';
}

if (gender == true) {
  gender = 'Мужской';
}
else {
  gender = 'Женский'
}

alert ( `Ваше ФИО: ${fio}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${daysAge}
Через 5 лет вам будет: ${futureAge}
Ваш пол: ${gender}
Вы на пенсии: ${pension}`
);
