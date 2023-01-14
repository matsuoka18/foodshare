a = 0;
ipadress='';
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
firstsearch();//ページ読み込みの際に全データを取得
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
function pic(){
  if(a == 0){
    a = 1;
  document.getElementById("img").src="food.jpeg";
  setTimeout(pic,5000);
  }else{
    a = 0;
    document.getElementById("img").src="IMG_0064.JPG";
    setTimeout(pic,5000);
}
}
function shop(){
location.href="登録ページ.html";
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
success2 = "ok";
document.getElementById("s").style.backgroundColor ="#1E0000";
document.getElementById("search").style.borderColor = "#411C00";
document.getElementById("search").style.borderWeight = "2px";
//document.getElementById("search").placeholder = "finish";
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
location.href="商品表示.html";
}else{
location.href="商品表示2.html";
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
