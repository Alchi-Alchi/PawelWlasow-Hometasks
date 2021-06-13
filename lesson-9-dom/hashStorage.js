class THashStorage {
  constructor() {
    this.data = {};
  }
  AddValue (Key, Value) {
    this.data [Key] = Value;
  }
  GetValue (Key) {
    if (Key in this.data) {
      return this.data [Key];
    } else {
      return undefined;
    }
  }
  DeleteValue (Key) {
    if (Key in this.data) {
      delete this.data [Key]
      return true
    } else {
      return false
    }
  }
  GetKeys () {
    return Object.keys (this.data);
  }
}