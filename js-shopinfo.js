url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
data = '';
address1 = '';
address2 = '';
address3 = '';
function start(){
  document.getElementById("loading2").style.display = "block";
  bar_animation();
    cookie = document.cookie;
    cookie = 'firstdata1={"shopdata":[{"n1":"hhh","n7":"abc","n13":"大船中学校","n19":"ばーーか","n25":"TULLYS COFFEE","n31":"ミニストップ","n37":"大戸屋","n43":"apple","n49":"あいうえお","n55":"goon","n61":"ppp","n67":"q","n73":"w","n79":"qw","n85":"八百屋","n91":"松","n97":"はか","n103":"q","n109":"a","n115":"re","n121":"rte","n127":"a","n133":"a","n139":"a","n145":"a","n151":"おおおお","n157":"カメラ","n163":"セブン","n169":"テスト","n175":"テスト3","n181":"テスト4","n187":"むじ","n193":"にお","n199":"アイパッド","n205":"ステップ","n211":"asd","n217":"goon","n223":"コーヒー","n229":"手広","n235":"kama","n241":"hfsg","n247":"kazuya","n253":"深沢","n259":"wq","n265":"wq","n271":"京都","n277":"ｈｇｓｆｈｇｆ","n":"","n283":"afdgafdg","n289":"trshtr","n295":"aaa","n301":"sony","num":301}]}; datav=0; news=[object Object]; newsv=undefined; branch=menu|; menumemo={"shop1":["46","48"],"last":["1"]}-; loginID=%E5%85%AB%E7%99%BE%E5%B1%8B!; pass=%E3%82%84%E3%81%BE%E3%81%8D?; shopnumber=85#'
    cookie= 'firstdata1={"shopdata":[{"n1":"hhh","n7":"abc","n13":"大船中学校","n19":"ばーーか","n25":"TULLYS COFFEE","n31":"店舗","n37":"手広","n43":"東進","n49":"マツオ","n55":"ローソン","num":55}]}; datav=0; branch=menu|; cookie_menuname=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF-; menumemo={"shop1":["18","21","34","37","103","104","105"],"shop7":["6","16","19","38","41","54","57"],"shop13":["9","12","31","34","47","50"],"shop19":["6","9","28","31","44","47"],"shop25":["6","9","28","31","44","47"],"shop31":["6","9","28","31","44","47"],"last":["31"]}-; loginID=abc!; pass=abc?; shopnumber=7#';
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
        data = [{
          "name5":cookie4,
          "name6":shopID,
          "branch":"shopinfo"
        }]
        params = {
          "method":"post",
          "mode":"no-cors",
          "Content-Type":"application/json",
          "body":JSON.stringify(data)
        }
        fetch(url,params);
        start2();
/*        
        mailad = 'kazukazu.18@icloud.com';
        address1 = '東京都大田区霞が関１−１−１';
        address2 = '120-0076';
        address3 = '0120-33-8876';
        intro = 'こんにちは';
        time = "19:00〜4:00";*/

    }
    count = 0;
    function start2(){
      
      count++;
       fetch(url,{
        "method":"get",
        "mode":"cors"
       })
       .then(response=>{
        if(response.ok){
          return response.json()
        }
       })
       .then(resJson =>{
        stm = "fin";
        document.getElementById("loading2").style.display = "none";
        var text1 =resJson[0];
        var text2 = resJson[1];
        if(text1 == cookie4 && text2 == shopID){
          address1 = resJson[2];
          address2 = resJson[3];
          address3 = resJson[4];
          intro = resJson[5];
          time = resJson[6];
          mailad = "coming soon";
          document.getElementById("nowname").innerHTML = "現在の店舗名は："+cookie4;
          document.getElementById("nowpass").innerHTML = "現在のパスワードは："+cookie6;
          document.getElementById("nowmail").innerHTML = "現在のメールアドレスは："+mailad;
          document.getElementById("nowaddress").innerHTML = "現在の住所は："+address1;
          document.getElementById("nowaddress2").innerHTML = "現在の郵便番号は："+address2;
          document.getElementById("nowaddress3").innerHTML = "現在の電話番号は："+address3;
          document.getElementById("nowtext").innerHTML = "現在の店舗紹介文は："+intro;
          document.getElementById("nowtime").innerHTML = "現在の営業時間は："+time;
          document.getElementById("p1").style.display = "block";
          document.getElementById("p2").style.display = "block";
          document.getElementById("p3").style.display = "block";
          document.getElementById("p4").style.display = "block";
          document.getElementById("p5").style.display = "block";
          document.getElementById("p6").style.display = "block";
          document.getElementById("p7").style.display = "block";
          document.getElementById("block_1").style.display = "block";
          document.getElementById("block_1").style.opacity = 1;
          document.getElementById("p1").style.borderBottom = "5px solid #3A1F00"
        }else{
          if(count < 3){
          console.log("Error (Other Datas)→reload");
          start2();
          }else{
            count = 0;
            console.log("Error (Count Limit) → retry")
            start();
          }
        }
       })
      
    }
     function shop123(){
shop12 = document.getElementById("shopchange").value;
if(shop12.length < 1){
  alert("空欄があります")
}else{
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
}
function pass(){
password = document.getElementById("passchange").value;
if(password.length < 1){
  alert("空欄があります")
}else{
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
}

function p1(){
 document.getElementById("p1").style.fontWeight = 600;
 document.getElementById("p1").style.borderBottom = "5px solid #3A1F00"
 document.getElementById("p2").style.fontWeight = 500;
 document.getElementById("p2").style.borderBottom = "none";
 document.getElementById("p3").style.fontWeight = 500;
 document.getElementById("p3").style.borderBottom = "none";
 document.getElementById("p4").style.fontWeight = 500;
 document.getElementById("p4").style.borderBottom = "none";
 document.getElementById("p5").style.fontWeight = 500;
 document.getElementById("p5").style.borderBottom = "none";
 document.getElementById("p6").style.fontWeight = 500;
 document.getElementById("p6").style.borderBottom = "none";
 document.getElementById("p7").style.fontWeight = 500;
 document.getElementById("p7").style.borderBottom = "none";
 document.getElementById("block_1").style.display = "block";
 document.getElementById("block_1").style.opacity = 1;
 document.getElementById("block_2").style.display = "none";
 document.getElementById("block_2").style.opacity = 0;
 document.getElementById("block_3").style.display = "none";
 document.getElementById("block_3").style.opacity = 0;
 document.getElementById("block_4").style.display = "none";
 document.getElementById("block_4").style.opacity = 0;
 document.getElementById("block_5").style.display = "none";
 document.getElementById("block_5").style.opacity = 0;
 document.getElementById("block_6").style.display = "none";
 document.getElementById("block_6").style.opacity = 0;
 //document.getElementById("block_7").style.display = "none";
 //document.getElementById("block_7").style.opacity = 0;
}
function p2(){
 document.getElementById("p2").style.fontWeight = 600;
 document.getElementById("p2").style.borderBottom = "5px solid #3A1F00"
 document.getElementById("p1").style.fontWeight = 500;
 document.getElementById("p1").style.borderBottom = "none";
 document.getElementById("p3").style.fontWeight = 500;
 document.getElementById("p3").style.borderBottom = "none";
 document.getElementById("p4").style.fontWeight = 500;
 document.getElementById("p4").style.borderBottom = "none";
 document.getElementById("p5").style.fontWeight = 500;
 document.getElementById("p5").style.borderBottom = "none";
 document.getElementById("p6").style.fontWeight = 500;
 document.getElementById("p6").style.borderBottom = "none";
 document.getElementById("p7").style.fontWeight = 500;
 document.getElementById("p7").style.borderBottom = "none";
 document.getElementById("block_2").style.display = "block";
 document.getElementById("block_2").style.opacity = 1;
 document.getElementById("block_1").style.display = "none";
 document.getElementById("block_1").style.opacity = 0;
 document.getElementById("block_3").style.display = "none";
 document.getElementById("block_3").style.opacity = 0;
 document.getElementById("block_4").style.display = "none";
 document.getElementById("block_4").style.opacity = 0;
 document.getElementById("block_5").style.display = "none";
 document.getElementById("block_5").style.opacity = 0;
 document.getElementById("block_6").style.display = "none";
 document.getElementById("block_6").style.opacity = 0;
 //document.getElementById("block_7").style.display = "none";
 //document.getElementById("block_7").style.opacity = 0;
}
function p3(){
 document.getElementById("p3").style.fontWeight = 600;
 document.getElementById("p3").style.borderBottom = "5px solid #3A1F00"
 document.getElementById("p2").style.fontWeight = 500;
 document.getElementById("p2").style.borderBottom = "none";
 document.getElementById("p1").style.fontWeight = 500;
 document.getElementById("p1").style.borderBottom = "none";
 document.getElementById("p4").style.fontWeight = 500;
 document.getElementById("p4").style.borderBottom = "none";
 document.getElementById("p5").style.fontWeight = 500;
 document.getElementById("p5").style.borderBottom = "none";
 document.getElementById("p6").style.fontWeight = 500;
 document.getElementById("p6").style.borderBottom = "none";
 document.getElementById("p7").style.fontWeight = 500;
 document.getElementById("p7").style.borderBottom = "none";
 document.getElementById("block_3").style.display = "block";
 document.getElementById("block_3").style.opacity = 1;
 document.getElementById("block_2").style.display = "none";
 document.getElementById("block_2").style.opacity = 0;
 document.getElementById("block_1").style.display = "none";
 document.getElementById("block_1").style.opacity = 0;
 document.getElementById("block_4").style.display = "none";
 document.getElementById("block_4").style.opacity = 0;
 document.getElementById("block_5").style.display = "none";
 document.getElementById("block_5").style.opacity = 0;
 document.getElementById("block_6").style.display = "none";
 document.getElementById("block_6").style.opacity = 0;
 //document.getElementById("block_7").style.display = "none";
 //document.getElementById("block_7").style.opacity = 0;
}
function p4(){
 document.getElementById("p4").style.fontWeight = 600;
 document.getElementById("p4").style.borderBottom = "5px solid #3A1F00"
 document.getElementById("p2").style.fontWeight = 500;
 document.getElementById("p2").style.borderBottom = "none";
 document.getElementById("p3").style.fontWeight = 500;
 document.getElementById("p3").style.borderBottom = "none";
 document.getElementById("p1").style.fontWeight = 500;
 document.getElementById("p1").style.borderBottom = "none";
 document.getElementById("p5").style.fontWeight = 500;
 document.getElementById("p5").style.borderBottom = "none";
 document.getElementById("p6").style.fontWeight = 500;
 document.getElementById("p6").style.borderBottom = "none";
 document.getElementById("p7").style.fontWeight = 500;
 document.getElementById("p7").style.borderBottom = "none";
 document.getElementById("block_4").style.display = "block";
 document.getElementById("block_4").style.opacity = 1;
 document.getElementById("block_2").style.display = "none";
 document.getElementById("block_2").style.opacity = 0;
 document.getElementById("block_3").style.display = "none";
 document.getElementById("block_3").style.opacity = 0;
 document.getElementById("block_1").style.display = "none";
 document.getElementById("block_1").style.opacity = 0;
 document.getElementById("block_5").style.display = "none";
 document.getElementById("block_5").style.opacity = 0;
 document.getElementById("block_6").style.display = "none";
 document.getElementById("block_6").style.opacity = 0;
 //document.getElementById("block_7").style.display = "none";
 //document.getElementById("block_7").style.opacity = 0;
}
function p5(){
 document.getElementById("p5").style.fontWeight = 600;
 document.getElementById("p5").style.borderBottom = "5px solid #3A1F00"
 document.getElementById("p2").style.fontWeight = 500;
 document.getElementById("p2").style.borderBottom = "none";
 document.getElementById("p3").style.fontWeight = 500;
 document.getElementById("p3").style.borderBottom = "none";
 document.getElementById("p4").style.fontWeight = 500;
 document.getElementById("p4").style.borderBottom = "none";
 document.getElementById("p1").style.fontWeight = 500;
 document.getElementById("p1").style.borderBottom = "none";
 document.getElementById("p6").style.fontWeight = 500;
 document.getElementById("p6").style.borderBottom = "none";
 document.getElementById("p7").style.fontWeight = 500;
 document.getElementById("p7").style.borderBottom = "none";
 document.getElementById("block_5").style.display = "block";
 document.getElementById("block_5").style.opacity = 1;
 document.getElementById("block_2").style.display = "none";
 document.getElementById("block_2").style.opacity = 0;
 document.getElementById("block_3").style.display = "none";
 document.getElementById("block_3").style.opacity = 0;
 document.getElementById("block_4").style.display = "none";
 document.getElementById("block_4").style.opacity = 0;
 document.getElementById("block_1").style.display = "none";
 document.getElementById("block_1").style.opacity = 0;
 document.getElementById("block_6").style.display = "none";
 document.getElementById("block_6").style.opacity = 0;
 //document.getElementById("block_7").style.display = "none";
 //document.getElementById("block_7").style.opacity = 0;
}
function p6(){
 document.getElementById("p6").style.fontWeight = 600;
 document.getElementById("p6").style.borderBottom = "5px solid #3A1F00"
 document.getElementById("p2").style.fontWeight = 500;
 document.getElementById("p2").style.borderBottom = "none";
 document.getElementById("p3").style.fontWeight = 500;
 document.getElementById("p3").style.borderBottom = "none";
 document.getElementById("p4").style.fontWeight = 500;
 document.getElementById("p4").style.borderBottom = "none";
 document.getElementById("p5").style.fontWeight = 500;
 document.getElementById("p5").style.borderBottom = "none";
 document.getElementById("p1").style.fontWeight = 500;
 document.getElementById("p1").style.borderBottom = "none";
 document.getElementById("p7").style.fontWeight = 500;
 document.getElementById("p7").style.borderBottom = "none";
 document.getElementById("block_6").style.display = "block";
 document.getElementById("block_6").style.opacity = 1;
 document.getElementById("block_2").style.display = "none";
 document.getElementById("block_2").style.opacity = 0;
 document.getElementById("block_3").style.display = "none";
 document.getElementById("block_3").style.opacity = 0;
 document.getElementById("block_4").style.display = "none";
 document.getElementById("block_4").style.opacity = 0;
 document.getElementById("block_5").style.display = "none";
 document.getElementById("block_5").style.opacity = 0;
 document.getElementById("block_1").style.display = "none";
 document.getElementById("block_1").style.opacity = 0;
 //document.getElementById("block_7").style.display = "none";
 //document.getElementById("block_7").style.opacity = 0;
}
function p7(){
 document.getElementById("p7").style.fontWeight = 600;
 document.getElementById("p7").style.borderBottom = "5px solid #3A1F00"
 document.getElementById("p2").style.fontWeight = 500;
 document.getElementById("p2").style.borderBottom = "none";
 document.getElementById("p3").style.fontWeight = 500;
 document.getElementById("p3").style.borderBottom = "none";
 document.getElementById("p4").style.fontWeight = 500;
 document.getElementById("p4").style.borderBottom = "none";
 document.getElementById("p5").style.fontWeight = 500;
 document.getElementById("p5").style.borderBottom = "none";
 document.getElementById("p6").style.fontWeight = 500;
 document.getElementById("p6").style.borderBottom = "none";
 document.getElementById("p1").style.fontWeight = 500;
 document.getElementById("p1").style.borderBottom = "none";
 //document.getElementById("block_7").style.display = "block";
 //document.getElementById("block_7").style.opacity = 1;
 document.getElementById("block_2").style.display = "none";
 document.getElementById("block_2").style.opacity = 0;
 document.getElementById("block_3").style.display = "none";
 document.getElementById("block_3").style.opacity = 0;
 document.getElementById("block_4").style.display = "none";
 document.getElementById("block_4").style.opacity = 0;
 document.getElementById("block_5").style.display = "none";
 document.getElementById("block_5").style.opacity = 0;
 document.getElementById("block_6").style.display = "none";
 document.getElementById("block_6").style.opacity = 0;
 document.getElementById("block_1").style.display = "none";
 document.getElementById("block_1").style.opacity = 0;
}
function mail(){
  var text = document.getElementById("mailchange").value;
  if(text.length < 1){
    alert("空欄があります");
  }else{
  data = [{
    "mail":text,
    "branch":"mail_change"
  }]
  send();
}
}
function address(){
  var text = document.getElementById("prechange").value;
  var text2 = document.getElementById("citychange").value;
  var text3 = document.getElementById("wardchange").value;
  var text4 = document.getElementById("addresschange").value;
  var text5 = document.getElementById("address2change").value;
  var text6 = document.getElementById("phonechange").value;
  var sum = text+text2+text3+text4+text5+text6;
  if(sum.length < 1){
    alert("空欄があります")
  }else{
    var sum2 = text+text2+text3+text4;
    if(sum2.length > 0){
       address1 = sum2;
    }
    if(text5.lenght > 0){
      address2 = text5;
    }
    if(text6.lenght > 0){
      address3 = text6;
    }
    data = [{
      "address1":address1,
      "address2":address2,
      "address3":address3,
      "branch":"address_change"
    }]
    send();
  }
}
function text(){
  var text = document.getElementById("textchange").value;
  if(text.length < 1){
    alert("空欄があります")
  }else{
    data = [{
      "text":text,
      "branch":"text_change"
    }]
    send();
  }
}
function tine(){
  var text = document.getElementById("timechange").value;
  if(text.length < 1){
    alert("空欄があります");
  }else{
    data=[{
      "time":text,
      "branch":"time_change"
    }]
    send();
  }
}
function send(){
  var params = {
    "method":"post",
    "mode":"no-cors",
    "Content-Type":"application/json",
    "body":JSON.stringify(data)
  }
  fetch(url,params);
  console.log("Data:"+JSON.stringify(data));
  console.log("send() FIN");
}
stm = 'none';
function bar_animation(){
  if(stm == "none"){
    document.getElementById("loading2").style.borderBottom = "5px solid #3A1F00";
  $("#loading2").animate({
    'left':'100vw'
  },2000)
  $("#loading2").animate({
    'width':'0px'
},0)
setTimeout(()=>{
  $("#loading2").animate({
    'left':'0'
  },0)
setTimeout(() => {
  $("#loading2").animate({
    'width':'10vw'
},0)
bar_animation();
}, 500);
},2500)
  }
}