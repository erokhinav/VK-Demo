  // window.name = 'fXD';
  VK.init(function() {
     // API initialization succeeded
     console.log("!");
     // document.getElementById("demo").innerHTML = "test!";
  }, function() {
     // API initialization failed
     // Can reload page here
}, '5.69');

  

var x = document.getElementById("mySelect");
var c = document.createElement("option");
c.text = "Kiwi";
x.options.add(c, 1);



VK.addCallback('onWindowBlur', function f(){
            alert("!!!");
        });
VK.removeCallback('onWindowBlur');

function myFunction() {
   document.getElementById("op1").innerHTML = "Option111";
 	 document.getElementById("demo").innerHTML = "Paragraph changed.";
 	 VK.callMethod("showSettingsBox", 8214);
}