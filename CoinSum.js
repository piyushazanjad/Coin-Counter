
function calc() {
 

    
var num1 = parseInt(document.getElementById("num1").innerHTML);
var num2 = parseInt(document.getElementById("num2").innerHTML);
var num3 = parseInt(document.getElementById("num3").innerHTML);
var num4 = parseInt(document.getElementById("num4").innerHTML);

var total_sum = document.getElementById("sum").value;

var denom1 ;
var denom2 ;
var denom3 ;
var denom4 ;

denom1 = parseInt(total_sum/num1);
var rem1 = total_sum%num1;
denom2 = parseInt(rem1/num2);
var rem2 = rem1%num2;
denom3 = parseInt(rem2/num3);
var rem3 = rem2%num3;
denom4 = rem3;

document.getElementById("denom1").innerHTML = denom1;
document.getElementById("denom2").innerHTML = denom2;
document.getElementById("denom3").innerHTML = denom3;
document.getElementById("denom4").innerHTML = denom4;


var elems = document.getElementsByClassName("badge"); 

for(var i = 0; i<elems.length; i+=1){
    elems[i].style.display = 'block';
}


}
    
