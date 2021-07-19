function TAJAXStorage () {
  this.storage = {};
  $.ajax ('http://fe.it-academy.by/AjaxStringStorage2.php',
  {
    type: 'POST',
    cache: false,
    dataType: 'json',
    data: {
      func: 'read',
      nameID: 'PawelWlasow-Hometask'
    },
    success: dataRead,
    error: ErrorHandler
  });
  function dataRead (data) {
    if (data !== '') {
      this.storage = JSON.parse (data);
      console.log ('dataRead: ' + data);
    } else if (data === '') {
      $.ajax ('http://fe.it-academy.by/AjaxStringStorage2.php',
      {
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {
          func: 'insert',
          nameID: 'PawelWlasow-Hometask',
          v: JSON.stringify (this.storage)
        },
    success: dataInsert,
    error: ErrorHandler
    });
    function dataInsert (data) {
      console.log ('dataInsert: ' + data);
    }
  }
}
this.AddValue = function (Key, Value) {
  this.storage [Key] = Value;
  sendOnTheServer (this.storage);
}
this.GetValue = function (Key) {
  if (Key in this.storage) {
    return this.storage [Key];
  } else {
    return undefined;
  }
}
this.DeleteValue = function (Key) {
  if (Key in this.storage) {
    delete this.storage [Key];
    sendOnTheServer (this.storage);
    return true;
  } else {
    return false;
  }
}
this.GetKeys = function () {
  var names = [];
  for (var Key in this.storage) {
    names.push (Key);
  }
  return names;
}
function sendOnTheServer (hash) {
  var password = Math.random ();
  $.ajax ('http://fe.it-academy.by/AjaxStringStorage2.php',
    {
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        func: 'lockget',
        nameID: 'PawelWlasow-Hometask',
        p: password
      },
  success: dataLockget,
  error: ErrorHandler
});
function dataLockget (data) {
  console.log ('dataLockget: ' + data);
  $.ajax ('http://fe.it-academy.by/AjaxStringStorage2.php',
    {
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        func: 'update',
        nameID: 'PawelWlasow-Hometask',
        p: password,
        v: JSON.stringify (this.storage)
      },
  success: dataUpdate,
  error: ErrorHandler
});
function dataUpdate (data) {
  console.log ('dataUpdate: ' + data);
    }
  }
}
function ErrorHandler (jqXHR, statusStr, errorStr) {
  alert (statusStr + ' ' + errorStr);
  }
}