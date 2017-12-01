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
console.log(methodsSelect);
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
    VK.callMethod.apply(this, props);
}

var eventsList = document.getElementById('eventList');
for (var i = 0; i < events.length; i++) {
    var eventName = events[i].name;
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    // checkbox.name = "name";
    checkbox.id = eventName;
    var name = (" " + eventName).slice(1);
    checkbox.onclick = createOnClickEvent(name);

    var label = document.createElement('label')
    // label.htmlFor = "id";
    label.appendChild(document.createTextNode(eventName));

    var li = document.createElement("li");
    li.appendChild(checkbox);
    li.appendChild(label);

    eventsList.appendChild(li);
    // eventsList.appendChild(label);
}

function createOnClickEvent(name) {
    return function() {
        listenEvent(name);
    }
}

function listenEvent(eventName) {
    console.log(eventName);
    if (document.getElementById(eventName).checked) {
        VK.addCallback(eventName, function f() {
            alert(args);
        });
    } else {
        VK.removeCallback(eventName);
    }
}



// var eventsList = document.getElementById('eventList');
// console.log(eventsList);
// eventsList.appendChild(checkbox);
// eventsList.appendChild(label);

// VK.addCallback('onWindowBlur', function f() {
//             alert("!!!");
//         });
// VK.removeCallback('onWindowBlur');

function myFunction() {
  console.log(document.getElementById("methodsSelect").selectedIndex);
  // document.getElementById("op1").innerHTML = "Option111";
  // document.getElementById("demo").innerHTML = "Paragraph changed.";
  //VK.callMethod("showSettingsBox", 8214);
  VK.callMethod("showInstallPushBox");
  VK.callMethod("showSettingsBox", 0);
}