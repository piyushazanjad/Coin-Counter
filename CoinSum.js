
function calc() {
    

var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var num3 = document.getElementById("num3").value;
var num4 = document.getElementById("num4").value;

var total_sum = document.getElementById("sum").value;


var denom1 = document.getElementById("denom1").value;
var denom2 = document.getElementById("denom2").value;
var denom3 = document.getElementById("denom3").value;
var denom4 = document.getElementById("denom4").value;

denom1 = parseInt(total_sum/num1);
var rem1 = total_sum%num1;
denom2 = parseInt(rem1/num2);
var rem2 = rem1%num2;
denom3 = parseInt(rem2/num3);
var rem3 = rem2%num3;
denom4 = rem3;

document.getElementById("denom1").value = denom1;
document.getElementById("denom2").value = denom2;
document.getElementById("denom3").value = denom3;
document.getElementById("denom4").value = denom4;



}
    
