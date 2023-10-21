function start(){
    cookie = document.cookie;
    //cookie = 'firstdata1={"shopdata":[{"n1":"hhh","n7":"abc","n13":"大船中学校","n19":"ばーーか","n25":"TULLYS COFFEE","n31":"ミニストップ","n37":"大戸屋","n43":"apple","n49":"あいうえお","n55":"goon","n61":"ppp","n67":"q","n73":"w","n79":"qw","n85":"八百屋","n91":"松","n97":"はか","n103":"q","n109":"a","n115":"re","n121":"rte","n127":"a","n133":"a","n139":"a","n145":"a","n151":"おおおお","n157":"カメラ","n163":"セブン","n169":"テスト","n175":"テスト3","n181":"テスト4","n187":"むじ","n193":"にお","n199":"アイパッド","n205":"ステップ","n211":"asd","n217":"goon","n223":"コーヒー","n229":"手広","n235":"kama","n241":"hfsg","n247":"kazuya","n253":"深沢","n259":"wq","n265":"wq","n271":"京都","n277":"ｈｇｓｆｈｇｆ","n":"","n283":"afdgafdg","n289":"trshtr","n295":"aaa","n301":"sony","num":301}]}; datav=0; news=[object Object]; newsv=undefined; branch=menu|; menumemo={"shop1":["46","48"],"last":["1"]}-; loginID=%E5%85%AB%E7%99%BE%E5%B1%8B!; pass=%E3%82%84%E3%81%BE%E3%81%8D?; shopnumber=85#'
loginIDp1 = cookie.indexOf("loginID=")+8;
console.log(loginIDp1);
loginIDp2 = cookie.indexOf("!",loginIDp1);
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