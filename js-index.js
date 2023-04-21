a = 0;
ipadress='';
resJson = '';
function start(){
 /* fetch('https://ipinfo.io?callback')
.then(res => res.json())
.then(json => {
ip = json.ip;
if(ip == '60.134.235.1'){*/
document.getElementById("alll").style.opacity = "1";
document.getElementById("alll2").style.display = "none";
pic();
console.log("firstdata start>>");
firstsearch();//ページ読み込みのに全データを取得
///setTimeout(newsd1p1,1000);
/* }else{
document.getElementById("alll2").style.opacity = "1";
data = "<h1>ログインせい</h1><h2>パスワード</h2>";
alll2.insertAdjacentHTML('afterbegin',data);
}
});
}
logp = document.getElementById("logp");
document.getElementById("logp").addEventListener('keyup',keycheck);
function keycheck(){
  if(logp.value == "papa"){
    document.getElementById("alll2").style.display = "none";
    document.getElementById("alll").style.opacity = "1";
    pic();
  }*/
}
a = 0;
count = 0;
set1 = '';
function pic(){
  count++;
  console.log("c:"+count)
  if(a == 0){
    a =1;
    document.getElementById("img").src="food.jpeg";
    document.getElementById("img2").src="IMG_0064.JPG";
    }else{
    a = 0;
    document.getElementById("img2").src="food.jpeg";
    document.getElementById("img").src="IMG_0064.JPG";
  }
  console.log(a);
  $("#img").animate({
    "width":'90vw',
    "height":'51vw',
    "left":0,
    "top":0
  },{
    'duration':0
  })
  $("#im2").animate({
    "opacity":1
  },{
    'duration':0
  })
  $("#img2").animate({
    'left':'90vw',
    'top':'2.5vw'
   },{
     'duration':0
   })
  $("#im1").animate({
    "opacity":0.5
  },{
    'duration':0
  })

  $("#img").animate({
    "width":'90vw',
    "height":'51vw',
    "left":0,
    "top":0
  },{
    'duration':4000
  })
  $("#im2").animate({
    "opacity":1
  },{
    'duration':4000
  })
  $("#img2").animate({
    'left':0,
    'top':0
   },{
     'duration':1000
   })
  $("#im1").animate({
    "opacity":0.5
  },{
    'duration':1000
  })

  $("#img2").animate({
    'left':0,
    'top':0
   },{
     'duration':3000
   })
  $("#im1").animate({
    "opacity":0.5
  },{
    'duration':3000
  })

  $("#img").animate({
    "left":'90vw',
    "top":0
  },{
    'duration':1000
  })
  $("#im2").animate({
    "opacity":0.5
  },{
    'duration':1000
  })
  $("#img2").animate({
    'left':'2.5vw',
    'top':'2.5vw'
   },{
     'duration':1000
   })
  $("#im1").animate({
    "opacity":1
  },{
    'duration':1000
  })
clearInterval(set1);
set1 = setInterval(pic,5100);
}
function pic3(){
  document.getElementById("img2").src="food.jpeg";
  document.getElementById("img").src="IMG_0064.JPG";
  $("#img").animate({
    "width":'90vw',
    "height":'51vw',
    "left":0,
    "top":0
  },{
    'duration':0
  })
  $("#im2").animate({
    "opacity":1
  },{
    'duration':0
  })
  $("#img2").animate({
    'left':'90vw',
    'top':'2.5vw'
   },{
     'duration':0
   })
  $("#im1").animate({
    "opacity":0.5
  },{
    'duration':0
  })

  $("#img").animate({
    "width":'90vw',
    "height":'51vw',
    "left":0,
    "top":0
  },{
    'duration':4000
  })
  $("#im2").animate({
    "opacity":1
  },{
    'duration':4000
  })
  $("#img2").animate({
    'left':0,
    'top':0
   },{
     'duration':1000
   })
  $("#im1").animate({
    "opacity":0.5
  },{
    'duration':1000
  })

  $("#img2").animate({
    'left':0,
    'top':0
   },{
     'duration':3000
   })
  $("#im1").animate({
    "opacity":0.5
  },{
    'duration':3000
  })

  $("#img").animate({
    "left":'90vw',
    "top":0
  },{
    'duration':1000
  })
  $("#im2").animate({
    "opacity":0.5
  },{
    'duration':1000
  })
  $("#img2").animate({
    'left':'2.5vw',
    'top':'2.5vw'
   },{
     'duration':1000
   })
  $("#im1").animate({
    "opacity":1
  },{
    'duration':1000
  })
  setTimeout(pic,5000)
}
function pic2(){
  if(a == 0){
    a = 1;

  $("#img").animate({
    "width":'90vw',
    "height":'51vw',
    "left":0,
    "top":0
  },{
    'duration':0
  })
  $("#im2").animate({
    "opacity":1
  },{
    'duration':0
  })
  $("#img2").animate({
    'left':'90vw',
    'top':'2.5vw'
   },{
     'duration':0
   })
  $("#im1").animate({
    "opacity":0.5
  },{
    'duration':0
  })
  document.getElementById("img").src="food.jpeg";
  document.getElementById("img2").src="IMG_0064.JPG";
  $("#img").animate({
    "width":'90vw',
    "height":'51vw',
    "left":0,
    "top":0
  },{
    'duration':4000
  })
  $("#im2").animate({
    "opacity":1
  },{
    'duration':4000
  })
  $("#img2").animate({
    'left':0,
    'top':0
   },{
     'duration':1000
   })
  $("#im1").animate({
    "opacity":0.5
  },{
    'duration':1000
  })

  $("#img2").animate({
    'left':0,
    'top':0
   },{
     'duration':3000
   })
  $("#im1").animate({
    "opacity":0.5
  },{
    'duration':3000
  })

  $("#img").animate({
    "left":'90vw',
    "top":0
  },{
    'duration':1000
  })
  $("#im2").animate({
    "opacity":0.5
  },{
    'duration':1000
  })
  $("#img2").animate({
    'left':'2.5vw',
    'top':'2.5vw'
   },{
     'duration':1000
   })
  $("#im1").animate({
    "opacity":1
  },{
    'duration':1000
  })
setTimeout(pic,5000)
  }else{
    a = 0;

    $("#img").animate({
      "width":'90vw',
      "height":'51vw',
      "left":0,
      "top":0
    },{
      'duration':0
    })
    $("#im2").animate({
      "opacity":1
    },{
      'duration':0
    })
    $("#img2").animate({
      'left':'90vw',
      'top':'2.5vw'
     },{
       'duration':0
     })
    $("#im1").animate({
      "opacity":0.5
    },{
      'duration':0
    })
    document.getElementById("img").src="IMG_0064.JPG";
    document.getElementById("img2").src="food.jpeg";
    $("#img").animate({
      "width":'90vw',
      "height":'51vw',
      "left":0,
      "top":0
    },{
      'duration':4000
    })
    $("#im2").animate({
      "opacity":1
    },{
      'duration':4000
    })
    $("#img2").animate({
      'left':0,
      'top':0
     },{
       'duration':1000
     })
    $("#im1").animate({
      "opacity":0.5
    },{
      'duration':1000
    })

    $("#img2").animate({
      'left':0,
      'top':0
     },{
       'duration':3000
     })
    $("#im1").animate({
      "opacity":0.5
    },{
      'duration':3000
    })

    $("#img").animate({
      "left":'90vw',
      "top":0
    },{
      'duration':1000
    })
    $("#im2").animate({
      "opacity":0.5
    },{
      'duration':1000
    })
    $("#img2").animate({
      'left':'2.5vw',
      'top':'2.5vw'
     },{
       'duration':1000
     })
    $("#im1").animate({
      "opacity":1
    },{
      'duration':1000
    })
    setTimeout(pic,5000);
  }
}

function shop(){
location.href="entry.html";
}
document.getElementById("search").addEventListener('keyup',event =>{
if(event.keyCode == 13){
searching();
}
});

//取得時に全データ取得　始
firstdata1 = '';
firstdata2 = '';
success1 =  '';
success2 =  '';
request1 = '';
request2 = '';
request3 = '';
function firstsearch(){
url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
var data = [{
"branch":"shopdata"
}]
var params={
"method":"post",
"mode":"no-cors",
"Content-Type":"application/json",
"body":JSON.stringify(data)
}
fetch(url,params);
console.log("firstsearch1 ok")
success1 = "o";

setTimeout(firstsearch2,2000);
}

function firstsearch2(){
fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec',{
  method:"GET",
  moe:"cors"
})
.then(response =>{
  if(response.ok){
    return response.json()
  }
})
.then(resJson =>{
firstdata1 = resJson;
success1 = "ok";
console.log("firstsearch2 ok");
console.log("firstsearch finish");
console.log("firstmenusearch start>>");
if(request1 == "next"){
console.log("shopsearchへ優先処理")
shopsearch(resJson);
}else{
firstmenu();
}
})
.catch(error =>{
num = 1;
ani();
$('#ss').clearQueue();
$('#ss').stop();
document.getElementById("ss").innerHTML = "search";
document.getElementById("s").style.backgroundColor ="#5A3A1A";

alert("通信失敗1")
})
}
function firstmenu(){
if(request2 == "nomal"){
console.log("menusearch 通常処理　受付");
return;
}
console.log("firstmenusearch ok");
url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
var data = [{
"branch":"menu"
}]
var params={
"method":"post",
"mode":"no-cors",
"Content-Type":"application/json",
"body":JSON.stringify(data)
}
fetch(url,params);
console.log("firstmenusearch1 ok");
success2 = "o";
setTimeout(firstmenu2,2000);
}
function firstmenu2(){
if(request2 == "nomal"){
console.log("menusearch 通常処理　受付");
return;
}
console.log("firstmenu2 ok");
fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec',{
  method:"GET",
  moe:"cors"
})
.then(response =>{
  if(response.ok){
    return response.json()
  }
})
.then(resJson =>{
  console.log("firstmenusearch2 ok");
firstdata2 = resJson;
console.log("firstdata 1/2 finish");
console.log("wait for instructions");
cookie = document.cookie;
search1 = cookie.indexOf("datafirst1=");
search2 = cookie.indexOf("datafirst2=");
if(search1 !=-1 && search2 !=-1){
  data1 = "firstdata1=; max-age=0";
  data2 = "firstdata2=; max-age=0";
  data3 = "datav=; max-age=0";
  document.cookie = data1;
  document.cookie = data2;
  document.cookie = data3;
  console.log("clear firstdatas");
}
datafirst1 = "firstdata1="+firstdata1;
datafirst2 = "firstdata2="+firstdata2;
datav = "datav="+1;
document.cookie = datafirst1;
  document.cookie = datafirst2;
  document.cookie = datav;
//このあとgasでdatavを作成、取得することコードを記述する。データはdatavに入力すること予定 4月21日







success2 = "ok";
document.getElementById("s").style.backgroundColor ="#1E0000";
document.getElementById("search").style.borderColor = "#411C00";
document.getElementById("search").style.borderWeight = "2px";
//document.getElementById("search").placeholder = "finish";
//お知らせの処理開始
setTimeout(firstnews,1000);
if(request2 == "next"){
console.log("menusearch2へ優先処理  in menu2")
menusearch2(resJson);
}
})
.catch(error =>{
num = 1;  
ani();
$('#ss').clearQueue();
$('#ss').stop();
document.getElementById("ss").innerHTML = "search";
document.getElementById("s").style.backgroundColor ="#5A3A1A";

alert("通信失敗2")
})
}
//ロード時に全データ取得のコード　終
shopname = '';
function searching(){
  
num = 100;
request3 = '';
ani();
document.getElementById("ss").innerHTML = "loading";
document.getElementById("s").style.backgroundColor ="#C6AC8F"
shopname = document.getElementById("search").value;
  if(success1 == "ok"){
  console.log("data:"+firstdata1)
shopsearch(firstdata1);
return;
}
if(success1 == "o"){
console.log("途中からのリクエスト1");
request1 = "next";
return; //違う可能性大
}else{
url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
var data = [{
"branch":"shopdata"
}]
var params={
"method":"post",
"mode":"no-cors",
"Content-Type":"application/json",
"body":JSON.stringify(data)
}
fetch(url,params);
setTimeout(searching2,3000);
}
}
function searching2(){
fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec',{
  method:"GET",
  moe:"cors"
})
.then(response =>{
  if(response.ok){
    return response.json()
  }
})
.then(resJson =>{
  if(request2 == "next"){
    console.log("menusearch2への優先処理");
    menusearch2(resJson);
    
  }
shopsearch(resJson);
})
.catch(error =>{
num = 1;
ani();
$('#ss').clearQueue();
$('#ss').stop();
document.getElementById("ss").innerHTML = "search";
document.getElementById("s").style.backgroundColor ="#5A3A1A";

alert("通信失敗1")
})
}

function shopsearch(resJson){
json = JSON.stringify(resJson);
json = JSON.parse(json);
a = "n1";
json = json.shopdata[0];
num = json.num+6;
for(a = -5; a<num; a+=6){
text = "n"+a;
shopname2 = json[text];
if(shopname == shopname2){
text2 = "searchnum="+a+"$";
shopname2 = encodeURI(shopname2);
text3 = "searchname="+shopname2+"^";
document.cookie = text2;
document.cookie = text3;
document.getElementById("ss").innerHTML = "jumping";
ttt = '';
document.cookie = "branch=shop|";
setTimeout(jump,1000);
return;
}
}
if(typeof ttt == 'undefined'){
/*alert("店舗を発見できません");
document.getElementById("ss").innerHTML = "search";
num = 1;
ani();
$('#ss').clearQueue();
$('#ss').stop();
document.getElementById("s").style.backgroundColor ="#5A3A1A";*/

if(success2 == "ok"){
console.log("data2:"+firstdata2);
menusearch2(firstdata2);
return;
}
if(success2 == "o"){
console.log("途中からのリクエスト2");
request2 = "next";
return;//間違えて可能性大
}else{
console.log("menusearch  通常処理")
request2 = "nomal";
menusearch();
}
}
}
function jump(){
num = 1;
ani();
document.getElementById("s").style.backgroundColor ="#5A3A1A";
if(typeof ttt == 'undefined'){
location.href="menus.html";
}else{
location.href="menus2.html";
}

}
function ani(){
//alert(num);
for(var a = 0; a<num; a++){
$("#ss").animate({
opacity:1
},{
'duration':0
})
$("#ss").animate({
opacity:0
},{
'duration':1000
})
$("#ss").animate({
opacity:1
},{
'duration':0
})
}
if(num == 1){
document.getElementById("ss").style.opacity = "1";
document.getElementById("s").style.backgroundColor ="#5A3A1A";
}
}
function menusearch(){
console.log("menusearch ok");
url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
var data = [{
"branch":"menu"
}]
var params={
"method":"post",
"mode":"no-cors",
"Content-Type":"application/json",
"body":JSON.stringify(data)
}
fetch(url,params);
setTimeout(menu2,3000);
}
function menu2(){
console.log("menu2 ok");
fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec',{
  method:"GET",
  moe:"cors"
})
.then(response =>{
  if(response.ok){
    return response.json()
  }
})
.then(resJson =>{
  console.log("menusearch2 ok");
menusearch2(resJson);
})
.catch(error =>{
num = 1;  
ani();
$('#ss').clearQueue();
$('#ss').stop();
document.getElementById("ss").innerHTML = "search";
document.getElementById("s").style.backgroundColor ="#5A3A1A";

alert("通信失敗2")
})
}


function menusearch2(resJson2){
if(request3 == "end"){
console.log("end")

}else{
jsonnn = JSON.stringify(resJson2);
console.log("JSON文字列↓");
console.log(jsonnn);
jsonn = JSON.parse(jsonnn);
console.log("JS文字列↓");
console.log(jsonn)
last = jsonn["last"];
console.log("last:"+last);
nummemo = [];
nummemo = [];
nummemo2 = [];
nummemo3 = 0;
for(var a = 1; a<=last; a+=6){
shopp  = String("shop"+a);
shoppi = "\""+shopp+"\""+":";
if(jsonnn.includes(shopp) === true){
menu = jsonn[shopp];
console.log(menu);
menulast = menu.length;
console.log(menulast);
}else{
console.log(shopp+":undefined");
}
for(var i = 0; i<menulast; i++){
menuname = menu[i];
if(menuname == shopname){
nummemo3++;
console.log(menuname+"発見");
i = String(i);
nummemo2.push(i);
console.log(nummemo2);
aa = 'ok';
}
}
if(typeof aa == 'string'){
nummemo2 = JSON.stringify(nummemo2);
console.log(nummemo2);
info = shoppi+nummemo2;
console.log(info);
nummemo.push(info);
nummemo2 = [];
aa = 0;
ss = String(a);
}
}
console.log(a)
if(a >= last && nummemo3 > 0){
console.log(nummemo);
nummemo = nummemo.toString().replace("\'","");
nummemo = "{"+nummemo+","+"\""+"last"+"\""+":"+"["+"\""+ss+"\""+"]"+"}";
console.log(nummemo);
console.log(nummemo3+":店舗発見")
num = 1;  
ani();
$('#ss').clearQueue();
$('#ss').stop();
document.getElementById("ss").innerHTML = "search";
document.getElementById("s").style.backgroundColor ="#5A3A1A";
cc = "menumemo="+nummemo+"-";
document.cookie = "branch=menu|";
document.cookie = cc;
document.getElementById("ss").innerHTML = "jumping";
jump();
}else{
ani();
$('#ss').clearQueue();
$('#ss').stop();
document.getElementById("ss").innerHTML = "search";
document.getElementById("s").style.backgroundColor ="#5A3A1A";
console.log("店舗・商品がありません");
alert("店舗・商品がありません");
/*if(request2 == "next"){
request3 = "end";
console.log("検索終了");
end();
}*/
if(success2 != "ok"){
request2 = '';
console.log("firstmenu  再トライ")
firstmenu();
}
request3 = "end";
console.log("検索終了");
end();
}
}
}
function end(){
console.log("検索 終了");
const flag = true;

try {

if (flag) {
throw new Error('終了します');
}
console.log('実行されないコード');

} catch (e) {

console.log(e.message);

}
}
function カート(){
location.href="cart.html";
}
function c11(){
  a = document.getElementById("news").style;
  
}
wrnumber = "";
newsjson = 0;
//題名と時間だけをとりあえず表示→一番目のお知らせを表示
function firstnews(){
  url="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  data = [{
    "branch":"getnews"
    }]
  params = {
    "method":"post",
    "mode":"no-cors",
    "Content-Type":"application/json",
    "body":JSON.stringify(data)
    }
  fetch(url,params)
  console.log("firstnews search start");
  setTimeout(firstnews2,1000);
}
function firstnews2(){
  url ="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  fetch(url,{
    "method":"GET",
    "mode":"cors"
    })
    .then(response => {
      if(response.ok){
        return response.json()
        }
      })

    .then(resJson => {
      newsjson = resJson;
      console.log(newsjson);
      console.log("firstnews2 search finish");
      setTimeout(firstwrite,1000);
    })
    .catch(error => {
    alert("Error");
    console.log("newsのエラー");
    })
}
function firstwrite(){
  for(var a = 1; a<=4; a++){
    console.log("a:"+a);
  data1 = newsjson[0].news1[a];
  data2 = newsjson[0].news2[a];
  console.log("data1:"+data1);
  console.log("data2:"+data2);
  data = "<p onclick="+"\""+"newsd1p"+a+"()" +"\""+ "id="+"\""+ "newsd1p"+a+"\""+">"+data1+"<span id="+"\""+"newsd1p"+a+"s"+"\""+">"+data2+"</span></p>";
   setnews.insertAdjacentHTML("beforeend",data);
  console.log("data:"+data);
  }
  document.getElementById("loadnews").style.display = "none";
  console.log("firstwrite finish");
  newsd1p1();
}
function newsd1p1(){
  num = 1;
  wrnumber =0;
  for(var a = 1; a<=4; a++){
    if(a == num){
      text = "newsd1p"+a;
      document.getElementById(text).style.backgroundColor = "black";
      document.getElementById(text).style.color = "white";
      document.getElementById(text).style.borderColor = "white";
      document.getElementById(text).style.paddingTop = "3vw";
      document.getElementById(text).style.margin = 0;
      document.getElementById(text).style.fontWeight = 600;
      document.getElementById(text).style.fontSize = "1.5vw";
      document.getElementById(text).style.width = "50vw";
    }else{
    text = "newsd1p"+a;
    document.getElementById(text).style.width = "20vw";
    document.getElementById(text).style.fontSize = "1vw";
    document.getElementById(text).style.marginTop = "3vw";
    document.getElementById(text).style.paddingTop = 0;
    document.getElementById(text).style.backgroundColor = "white";
    document.getElementById(text).style.color = "black"
    document.getElementById(text).style.fontWeight = 400;
    document.getElementById(text).style.borderColor = "black"
    }
  }
  //入力忘れないように
if(newsjson == 0){
  //この場合 待ち時間が生じるからその処理を
  url="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  data = [{
    "branch":"getnews"
    }]
  params = {
    "method":"post",
    "mode":"no-cors",
    "Content-Type":"application/json",
    "body":JSON.stringify(data)
    }
  fetch(url,params)
  console.log("newsd1p1 1");
  setTimeout(newsd1p11,2000);
}else{
  console.log("newsd1p1 skip");
  wrnews();
}
  }

function newsd1p11(){
  console.log("newsd1p1 11 start");
  url ="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  fetch(url,{
    "method":"GET",
    "mode":"cors"
    })
    .then(response => {
      if(response.ok){
        return response.json()
        }
      })

    .then(resJson => {
      newsjson = resJson;
      console.log("newsd1p1 11 finish");
      setTimeout(wrnews,1000);
    })
    .catch(error => {
    alert("Error");
    console.log("newsのエラー");
    })
  }
  
function newsd1p2(){
  num = 2;
  wrnumber = 1;
  for(var a = 1; a<=4; a++){
    if(a == num){
      text = "newsd1p"+a;
      document.getElementById(text).style.backgroundColor = "black";
      document.getElementById(text).style.color = "white";
      document.getElementById(text).style.borderColor = "white";
      document.getElementById(text).style.paddingTop = "3vw";
      document.getElementById(text).style.margin = 0;
      document.getElementById(text).style.fontWeight = 600;
      document.getElementById(text).style.fontSize = "1.5vw";
      document.getElementById(text).style.width = "50vw";
    }else{
    text = "newsd1p"+a;
    document.getElementById(text).style.width = "20vw";
    document.getElementById(text).style.fontSize = "1vw";
    document.getElementById(text).style.marginTop = "3vw";
    document.getElementById(text).style.paddingTop = 0;
    document.getElementById(text).style.backgroundColor = "white";
    document.getElementById(text).style.color = "black"
    document.getElementById(text).style.fontWeight = 400;
    document.getElementById(text).style.borderColor = "black"
    }
  }
  text = "newsd1p"+1;
  document.getElementById(text).style.width = "20vw";
  document.getElementById(text).style.fontSize = "1vw";
  document.getElementById(text).style.marginTop = "5vw";
  document.getElementById(text).style.paddingTop = "3vw";
  document.getElementById(text).style.backgroundColor = "white";
  document.getElementById(text).style.color = "black"
  document.getElementById(text).style.fontWeight = 400;
  document.getElementById(text).style.borderColor = "black"
 
   if(newsjson == 0){
  url="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  data = [{
    "branch":"getnews"
    }]
  params = {
    "method":"post",
    "mode":"no-cors",
    "Content-Type":"application/json",
    "body":JSON.stringify(data)
    }
  fetch(url,params)
  console.log("newsd1p1 1");
  setTimeout(newsd1p22,2000);
}else{
  console.log("newsd1p2 skip");
  wrnews();
}
}
newsjson = "";
function newsd1p22(){
  console.log("newsd1p2 22 start");
  url ="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  fetch(url,{
    "method":"GET",
    "mode":"cors"
    })
    .then(response => {
      if(response.ok){
        return response.json()
        }
      })

    .then(resJson => {
      newsjson = resJson;
      console.log("newsd1p2 22 finish");
      setTimeout(wrnews,1000);
    })
    .catch(error => {
    alert("Error");
    console.log("newsのエラー");
    })
}
function newsd1p3(){
  num = 3;
  wrnumber =2;
  for(var a = 1; a<=4; a++){
    if(a == num){
      text = "newsd1p"+a;
      document.getElementById(text).style.backgroundColor = "black";
      document.getElementById(text).style.color = "white";
      document.getElementById(text).style.borderColor = "white";
      document.getElementById(text).style.paddingTop = "3vw";
      document.getElementById(text).style.margin = 0;
      document.getElementById(text).style.fontWeight = 600;
      document.getElementById(text).style.fontSize = "1.5vw";
      document.getElementById(text).style.width = "50vw";
    }else{
    text = "newsd1p"+a;
    document.getElementById(text).style.width = "20vw";
    document.getElementById(text).style.fontSize = "1vw";
    document.getElementById(text).style.marginTop = "3vw";
    document.getElementById(text).style.paddingTop = 0;
    document.getElementById(text).style.backgroundColor = "white";
    document.getElementById(text).style.color = "black"
    document.getElementById(text).style.fontWeight = 400;
    document.getElementById(text).style.borderColor = "black"
    }
  }
  text = "newsd1p"+1;
  document.getElementById(text).style.width = "20vw";
  document.getElementById(text).style.fontSize = "1vw";
  document.getElementById(text).style.marginTop = "3vw";
  document.getElementById(text).style.paddingTop = "3vw";
  document.getElementById(text).style.backgroundColor = "white";
  document.getElementById(text).style.color = "black"
  document.getElementById(text).style.fontWeight = 400;
  document.getElementById(text).style.borderColor = "black"
  
  if(newsjson == 0){
  url="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  data = [{
    "branch":"getnews"
    }]
  params = {
    "method":"post",
    "mode":"no-cors",
    "Content-Type":"application/json",
    "body":JSON.stringify(data)
    }
  fetch(url,params)
  console.log("newsd1p1 1");
  setTimeout(newsd1p33,2000);
}else{
  console.log("newsd1p3 skip");
  wrnews();
}
}
newsjson = "";
function newsd1p33(){
  console.log("newsd1p3 33 start");
  url ="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  fetch(url,{
    "method":"GET",
    "mode":"cors"
    })
    .then(response => {
      if(response.ok){
        return response.json()
        }
      })

    .then(resJson => {
      newsjson = resJson;
      console.log("newsd1p3 33 finish");
      setTimeout(wrnews,1000);
    })
    .catch(error => {
    alert("Error");
    console.log("newsのエラー");
    })
}
function newsd1p4(){
  num = 4;
  wrnumber = 3;
  for(var a = 1; a<=4; a++){
    if(a == num){
      text = "newsd1p"+a;
      document.getElementById(text).style.backgroundColor = "black";
      document.getElementById(text).style.color = "white";
      document.getElementById(text).style.borderColor = "white";
      document.getElementById(text).style.paddingTop = "3vw";
      document.getElementById(text).style.margin = 0;
      document.getElementById(text).style.fontWeight = 600;
      document.getElementById(text).style.fontSize = "1.5vw";
      document.getElementById(text).style.width = "50vw";
    }else{
    text = "newsd1p"+a;
    document.getElementById(text).style.width = "20vw";
    document.getElementById(text).style.fontSize = "1vw";
    document.getElementById(text).style.marginTop = "3vw";
    document.getElementById(text).style.paddingTop = 0;
    document.getElementById(text).style.backgroundColor = "white";
    document.getElementById(text).style.color = "black"
    document.getElementById(text).style.fontWeight = 400;
    document.getElementById(text).style.borderColor = "black"
    }
  }
  text = "newsd1p"+1;
  document.getElementById(text).style.width = "20vw";
  document.getElementById(text).style.fontSize = "1vw";
  document.getElementById(text).style.marginTop = "3vw";
  document.getElementById(text).style.paddingTop = "3vw";
  document.getElementById(text).style.backgroundColor = "white";
  document.getElementById(text).style.color = "black"
  document.getElementById(text).style.fontWeight = 400;
  document.getElementById(text).style.borderColor = "black";
  
  if(newsjson == 0){
  url="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  data = [{
    "branch":"getnews"
    }]
  params = {
    "method":"post",
    "mode":"no-cors",
    "Content-Type":"application/json",
    "body":JSON.stringify(data)
    }
  fetch(url,params)
  console.log("newsd1p4 4");
  setTimeout(newsd1p44,2000);
}else{
  console.log("newsd1p4 skip");
  wrnews();
}
}
newsjson = "";
function newsd1p44(){
  console.log("newsd1p4 44 start");
  url ="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  fetch(url,{
    "method":"GET",
    "mode":"cors"
    })
    .then(response => {
      if(response.ok){
        return response.json()
        }
      })

    .then(resJson => {
      newsjson = resJson;
      console.log("newsd1p4 44 finish");
      setTimeout(wrnews,1000);
    })
    .catch(error => {
    alert("Error");
    console.log("newsのエラー");
    })
}
text2 = "すべて見る>"
aaa =0;
function newsd1s(){
  aaa+=1;
  console.log(a);
  if(aaa < 5){
  text2 = text2+">";
  document.getElementById("newsd1s").innerHTML = text2;
  setTimeout(newsd1s,250);
  }else{
    location.href="news.html"
  }

 }


function wrnews(){
  console.log(newsjson);
 //data = JSON.parae(newsjson);
data1 = newsjson[0].news1[wrnumber];
data2 = newsjson[0].news2[wrnumber];
data3 = newsjson[0].news3[wrnumber];
//data = decodeURI(data);
// 3.10
//newsd2pre
document.getElementById("newsd2pre").innerHTML = data3;
}
function c(){
  window.open("control.html");
}