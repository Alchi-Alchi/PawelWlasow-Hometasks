function tLocalStorage (keyName) {
    this.data = {};
    if (localStorage.getItem (keyName)) {
      if (keyName == 'dish') {
        var item = JSON.parse (localStorage.dish);
        this.data = item;
      }
      if (keyName == 'drink') {
        var item = JSON.parse (localStorage.drink);
        this.data = item;
      }
    }
  this.AddValue = function (Key, Value) {
    this.data [Key] = Value;
  }
  this.GetValue = function (Key) {
    if (Key in this.data) {
      return this.data [Key];
    } else {
      return undefined;
    }
  }
  this.DeleteValue = function (Key) {
    if (Key in this.data) {
      delete this.data [Key]
      return true
    } else {
      return false
    }
  }
  this.GetKeys = function () {
    var names = [];
    for (var Key in this.data) {
      names.push (Key);
    }
    return names;
  }
  this.Store = function () {
    localStorage.setItem (keyName, JSON.stringify (this.data));
  }
}