  // window.name = 'fXD';
  VK.init(function() {
     // API initialization succeeded
     console.log("!");
     // VK.callMethod("showSettingsBox", 8214);
  }, function() {
     // API initialization failed
     location.reload();
}, '5.69');


var methodsSelect = document.getElementById("methodsSelect");
console.log(methods);
console.log(methods[0]);
for (var i = 0; i < methods.length; i++) {
  var newEl = document.createElement("option");
  newEl.text = methods[i].name;
  methodsSelect.options.add(newEl, i + 1);
}

function callMethod() {
  var selInd = methodsSelect.selectedIndex;
  console.log(selInd);
  var method = methods[selInd];
  var props = [];
  Object.keys(method).forEach(function eachKey(key) {
    props.push(method[key]);
  });
  console.log(props);
  VK.callMethod(method.name);
  //VK.callMethod.apply(this, props);
}

// VK.addCallback('onWindowBlur', function f() {
//             alert("!!!");
//         });
// VK.removeCallback('onWindowBlur');

function myFunction() {
  console.log(document.getElementById("methodsSelect").selectedIndex);
  // document.getElementById("op1").innerHTML = "Option111";
  // document.getElementById("demo").innerHTML = "Paragraph changed.";
  //VK.callMethod("showSettingsBox", 8214);
  VK.callMethod("showInstallBox");
}