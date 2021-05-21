var johnExpenses = {
  bill: [124, 48, 268, 180, 42],
  tip: [],
  billWithTip: [],
  calc: function() {
    for (var i = 0; i < this.bill.length; i++) {
      var pay = (this.bill[i] < 50) ? this.bill[i] * 0.2:
      this.bill[i] >= 50 && this.bill[i] < 200 ? this.bill[i] * 0.15 : this.bill[i] * 0.1;
      this.tip.push(pay);
      this.billWithTip.push(this.bill[i] + pay)
    }
  },
};
johnExpenses.calc();
console.log ('Чаевые Джона: ' + johnExpenses.tip);
console.log ('Всего счёт Джона: ' + johnExpenses.billWithTip);

var markExpenses = {
  bill: [77, 375, 110, 45],
  tip: [],
  billWithTip: [],
  calc: function() {
    for (var i = 0; i < this.bill.length; i++) {
      var pay = (this.bill[i] < 100) ? this.bill[i] * 0.2:
      this.bill[i] >= 100 && this.bill[i] < 300 ? this.bill[i] * 0.1 : this.bill[i] * 0.25;
      this.tip.push(pay);
      this.billWithTip.push(this.bill[i] + pay)
    }
  },
};
markExpenses.calc();
console.log ('Чаевые Марка: ' + markExpenses.tip);
console.log ('Всего счёт Марка: ' + markExpenses.billWithTip);

function compare () {
  function averageJohn () {
    var sum = 0;
    for (var index of johnExpenses.tip) {
      var averageTip = (sum += index)/johnExpenses.tip.length; 
    }
    return averageTip;
  }
  console.log ('Среднее значение для чаевых Джона: ' + averageJohn());
  
  function averageMark () {
    var sum = 0;
    for (var index of markExpenses.tip) {
      var averageTip = (sum += index)/markExpenses.tip.length; 
    }
    return averageTip;
  }
  console.log ('Среднее значение для чаевых Марка: ' + averageMark());
  var johnFamily = averageJohn();
  var markFamily = averageMark ();
  if (johnFamily > markFamily) {
    console.log ('Семья Джона оставила больше чаевых')
  } else if (markFamily > johnFamily) {
    console.log ('Семья Марка оставила больше чаевых')
  } else {
    console.log ('Обе семьи одинаково щедрые')
  }
}
compare ();