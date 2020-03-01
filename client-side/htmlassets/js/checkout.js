var wmessage = 'Please Fill in Required Fields';
var x = 0;

function fix() {
  document.getElementById('field1').style.borderColor = "white";
  document.getElementById('field2').style.borderColor = "white";
  document.getElementById('field3').style.borderColor = "white";
  document.getElementById('field4').style.borderColor = "white";
  document.getElementById('field5').style.borderColor = "white";
  document.getElementById('field6').style.borderColor = "white";
  document.getElementById('field7').style.borderColor = "white";
  document.getElementById('field8').style.borderColor = "white";
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
if (document.getElementById('field3').value == "") {
  document.getElementById('field3').style.borderColor = "red";
  document.getElementById('warning').innerHTML = wmessage;

} else { x += 1;}
if (document.getElementById('field4').value == "") {
  document.getElementById('field4').style.borderColor = "red";
  document.getElementById('warning').innerHTML = wmessage;
 
} else { x += 1;}
if (document.getElementById('field5').value == "") {
  document.getElementById('field5').style.borderColor = "red";
  document.getElementById('warning').innerHTML = wmessage;

} else { x += 1;}
if (document.getElementById('field6').value == "") {
  document.getElementById('field6').style.borderColor = "red";
  document.getElementById('warning').innerHTML = wmessage;

} else { x += 1;}
if (document.getElementById('field7').value == "") {
  document.getElementById('field7').style.borderColor = "red";
  document.getElementById('warning').innerHTML = wmessage;

} else { x += 1;}
if (document.getElementById('field8').value == "") {
  document.getElementById('field8').style.borderColor = "red";
  document.getElementById('warning').innerHTML = wmessage;

} else { x += 1;}
  if (x == 8) {
  return true;
 } else { return false;}
}