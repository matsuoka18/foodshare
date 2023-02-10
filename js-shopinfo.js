function start(){
    cookie = document.cookie;
loginIDp1 = cookie.indexOf("loginID=")+8;
loginIDp2 = cookie.indexOf("!");
passp1 = cookie.indexOf("pass=")+5;
passp2 = cookie.indexOf("?");
shopnumberp1 = cookie.indexOf("shopnumber=")+11;
shopnumberp2 = cookie.indexOf("#");
cookie4 = cookie.substring(loginIDp1,loginIDp2);//loginID
cookie6 = cookie.substring(passp1,passp2);//pass
shopID = cookie.substring(shopnumberp1,shopnumberp2);//shopID
        cookie4 = decodeURI(cookie4);
        cookie6 = decodeURI(cookie6);
document.getElementById("nowname").innerHTML = "現在の店舗名は："+cookie4;
document.getElementById("nowpass").innerHTML = "現在のパスワードは："+cookie6;
    }
     function shop123(){
shop12 = document.getElementById("shopchange").value;
console.log(shop12);
var url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
var data = [{
  "name":shop12,
  "name4":"店舗名編集",
  "name5":shopID
}]
var params = {
  "method":"post",
  "mode":"no-cors",
  "Content-Type":"application/json",
  "body":JSON.stringify(data)
}
fetch(url,params)
         shop12 = encodeURI(shop12);
         cookie6 = encodeURI(cookie6);
         loginID = "loginID="+shop12+"!";
pass = "pass="+cookie6+"?";
shopID2 = "shopnumber="+shopID+"#";
document.cookie = loginID;
document.cookie = pass;
document.cookie = shopID2;
location.href="shopinfo.html";
}
function pass(){
password = document.getElementById("passchange").value;
var url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
var data = [{
  "name4":"パス編集",
  "name5":shopID,
  "name7":password
}]
var params = {
  "method":"post",
  "mode":"no-cors",
  "Content-Type":"application/json",
  "body":JSON.stringify(data)
}
fetch(url,params)
  cookie4 = encodeURI(cookie4);
  password = encodeURI(password);
         loginID = "loginID="+cookie4+"!";
pass = "pass="+password+"?";
shopID2 = "shopnumber="+shopID+"#";
document.cookie = loginID;
document.cookie = pass;
document.cookie = shopID2;
location.href="shopinfo.html";
}