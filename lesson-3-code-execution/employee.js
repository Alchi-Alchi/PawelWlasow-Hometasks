var tasksComleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};
var tasks = [];
for (var value of Object.values(tasksComleted)) {
  tasks.push(value);
} 
var names = [];
for (var key of Object.keys(tasksComleted)) {
  names.push(key);
} 
var maxTasks = function getMaxOfTasksComleted(tasks) {
  return Math.max.apply(null, tasks);
}
var indexOfEmployee = tasks.indexOf(maxTasks(tasks));
var bestEmloyee = names[indexOfEmployee]
alert(bestEmloyee);