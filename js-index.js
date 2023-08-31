
//asyncを使用している関数すべてが読み込みと同時になんか実行されてしまっているからそこの修正を行う必要がある　8月31日



a = 0;
ipadress='';
resJson = '';
datav11 = '';
success3 = '';
firstdata1 = '';
firstdata11 = '';
firstdata2 = '';
success1 =  'o';
success2 =  '';
request1 = '';
request2 = '';
request3 = '';
order = '';
function start(datav){
 /* fetch('https://ipinfo.io?callback')
.then(res => res.json())
.then(json => {
ip = json.ip;
if(ip == '60.134.235.1'){*/
document.getElementById("alll").style.opacity = "1";
document.getElementById("alll2").style.display = "none";

//if間違ってるかも
if(typeof datav == "string"){
  console.log("GET");
  url="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  fetch(url, {
    "method":"GET",
    "mode":"cors"
    })
    .then(response =>{
      if(response.ok){
        return response.json();
        }
      })
      .then(resJson =>{
        console.log("datav1:"+JSON.stringify(resJson));
        datav11 = resJson;
        var cdata = document.cookie;
        if(cdata.length == 0){
          firstsearchall();

        }else{
    var vdata = cdata.indexOf("datav=");
    var vdata2 = cdata.indexOf(";",vdata);
    var vnews = cdata.indexOf("newsv=");
    var vnews2 = cdata.indexOf(";",vnews);
    var datav = cdata.substring(vdata+6,vdata2);
    var vnews = cdata.substring(vnews+6,vnews2);
    datav1 = datav11[0].v1;
    console.log("datav1:"+datav1);
    newsv1 = datav11[0].v2;
    console.log("newsv1:"+newsv1);
    if(datav1 == datav){
      success1 = "ok";
      success2 = "ok";
      console.log("same -V data");
      }
    if(newsv1 == vnews){
       success3 = "ok";
      console.log("sama -V news");
      }
      order = 0;
      firstsearchall();
    }
        })
        .catch(error =>{
          console.log("start():error");
          console.log("retry to load start()");
          setTimeout(()=>{
start();
          },1000)
          })
    
      
      
      
      
  }else{
    pic();
    console.log("POST");
    console.log(typeof datav);
      url="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
var data =[{
   "branch":"datav"
}];
var params = {
  "method":"post",
  "mode":"no-cors",
  "Content-Type":"application/json",
  "body":JSON.stringify(data)
  }
fetch(url,params);
console.log("datav start");
datav = "ok";
setTimeout(start,1000,datav);
    }



//datav start



//datav finish


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
async function firstsearchall(){
  if(order == 0){
    console.log("firstsearchall OK");
    let messgae1 = await firstsearch();
    order = 1;
    firstsearch2();
    return messgae1;
  }
}
firstsearchall().then(text =>{
 
  console.log(text);
})
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
console.log("firstdata1:"+firstdata1)
firstdata11 = JSON.stringify(firstdata1);
console.log("firstdata11:"+firstdata11)
fc = firstdata11.indexOf("shopdata");
console.log("fc:"+fc);
if(fc == -1){
  console.log("firstsearch2:loading error→reload")
  firstsearch();
}
success1 = "ok";
console.log("firstsearch2 ok");
console.log("firstsearch finish");
console.log("firstmenusearch start>>");
if(request1 == "next"){
console.log("shopsearchへ優先処理")
shopsearch(firstdata11);
}else{
firstmenuall();
}
})
.catch(error =>{
num = 1;
ani();
$('#ss').clearQueue();
$('#ss').stop();
document.getElementById("ss").innerHTML = "search";
document.getElementById("s").style.backgroundColor ="#5A3A1A";
console.log("firstsearch2 error");
console.log(error)
setTimeout(()=>{
  console.log("firstsearch2 retry");
  firstsearch();
},1000)

})
}

async function firstmenuall(){
  if(order == 1){
  console.log("firstmenuall OK");
  let message1 = await firstmenu();
  order = 2;
  firstmenu2();
  return message1
  }else{
    return;
  }
}
firstmenuall().then(text=>{
  console.log(text);
})
function firstmenu(){  
if(request2 == "nomal"){
console.log("menusearch 通常処理 受付");
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
search3 = cookie.indexOf("datav=");

if(search1 !=-1 && search2 !=-1){
  data1 = "firstdata1=; max-age=0";
  data2 = "firstdata2=; max-age=0";
  data3 = "datav=; max-age=0";
  document.cookie = data1;
  document.cookie = data2;
  document.cookie = data3;
  console.log("clear firstdatas");
}
firstdata1 = JSON.stringify(firstdata1);
firstdata2 = JSON.stringify(firstdata2);
datafirst1 = "firstdata1="+firstdata1;
datafirst2 = "firstdata2="+firstdata2;
datav = "datav="+0;
document.cookie = datafirst1;
  document.cookie = datafirst2;
  document.cookie = datav;
  success2 = "ok";
  success1 = "ok";
console.log("firstdata cookie finish");
//このあとgasでdatavを作成、取得することコードを記述する。データはdatavに入力すること予定 4月21日
document.getElementById("s").style.backgroundColor ="#1E0000";
document.getElementById("search").style.borderColor = "#411C00";
document.getElementById("search").style.borderWeight = "2px";
//document.getElementById("search").placeholder = "finish";
//お知らせの処理開始
firstnewsall();
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
console.log(error)
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
  console.log("data:"+firstdata11)
shopsearch(firstdata11
  );
//return;
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
console.log("faild searching2");
alert("faild searching2");
})
}
num='';
jjson = '';
function shopsearch(firstdata1){
  //a = "n1";
jjson = JSON.parse(firstdata1);
jjson1 = jjson.shopdata;
console.log("jjson1:"+jjson1)
num = jjson.shopdata[0].num;
num = parseInt(num)+6;
console.log("num:"+num);
for(a = -5; a<num; a+=6){
text = "n"+a;
console.log("text:"+text);
shopname2 = jjson.shopdata[0][text]; 
console.log("shopname2:"+shopname2);
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
//return;
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
 resJson = JSON.stringify(resJson);
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
jsonnn = resJson2;
console.log("JSON文字列↓");
console.log(jsonnn);
jsonn = JSON.parse(resJson2);
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
async function firstnewsall(){
  if(order == 3){
  console.log("firstnewsall OK");
let message1 = await firstnews();
order = 4;
firstnews22();
return message1;
  }else{
    return;
  }
}
firstnewsall().then(text=>{

  console.log(text);
})
function firstnews(){
  return new Promise(data=>{

  
  if(success3 == "ok"){
    cookie = document.cookie;
    data1 = cookie.indexOf("news=");
    data2 = cookie.indexOf(";",data1);
    data = cookie.substring(data1+5,data2);
    newsjson = data;
    console.log("skip firstnews");
    firstwrite();
    }
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
  data =  'firstnews OK';
})
}
async function firstnews22(){
  if(order == 4){
  console.log("firstnews22 OK");
  let message1 = await firstnews2();
  firstwrite();
  return message1;
  }else{
    return;
  }
}
firstnews22().then(text=>{
  console.log(text);

})
function firstnews2(){
  return new Promise(data=>{

  
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
      var data = document.cookie;
      var ndata1 = data.indexOf("news=");
      if(ndata1 !=-1){
        ndata1 = "news=; max-age=0";
        ndata2 = "newsv=; max-age=0";
        console.log("clear ndata");
        }
      ndata1 = "news="+newsjson;
      ndata2 = newsjson[0].num;
      ndata2 = "newsv="+ndata2;
      document.cookie = ndata1;
      document.cookie = ndata2;
      console.log("finish ndata");
    })
    .catch(error => {
    console.log("newsのエラー");
    })
    data = 'firstnews2 OK';
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