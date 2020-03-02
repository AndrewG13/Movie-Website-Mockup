var wmessage = 'Please Fill in Required Fields';
var x = 0;

function fix() {
  document.getElementById('field1').style.borderColor = "white";
  document.getElementById('field2').style.borderColor = "white";
}

function blankField() {
x = 0;
fix();
if (document.getElementById('field1').value == "") {
  document.getElementById('field1').style.borderColor = "red";
  document.getElementById('warning').innerHTML = wmessage;
} else { x += 1;}

if (document.getElementById('field2').value == "") {
  document.getElementById('field2').style.borderColor = "red";
  document.getElementById('warning').innerHTML = wmessage;
} else { x += 1;}

  if (x == 2) {
  return true;
  
 } else { return false;}
}