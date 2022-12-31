function send(){
    send2();
name2 = document.getElementById("name").value;
adress = document.getElementById("mailad").value;
if(name2.length == 0){
    alert("店舗名を入力してください");
    time=0;
    return;
}
if(adress.length == 0){
    alert("メールアドレスを入力してください");
   time=0;
   return;
}
var data = [{
"branch":"logindata"
}];
    var params = {
    "method":"post",
        "mode":"no-cors",
        "Content-Type":"application/json",
        "body":JSON.stringify(data)
    }
    fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec',params);
    setTimeout(send22,3000);
}
    function send22(){
fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec',{
method:"GET",
mode:"cors"
})
.then(response =>{
if(response.ok){
return response.json();
}
})
.then(resJson=>{
json = JSON.stringify(resJson);
json = JSON.parse(json);
 check(); 
})
.catch(error=>{
alert("error");
time = 0;
})
}
function check(){
cn1 = json.logindata[0];
sum = cn1.合計;
for(var a = 0; a<sum; a++){
    search = "店舗"+a;
    shopname = cn1[search];
    if(name2 == shopname){
        console.log("店舗発見");
        scheck = '';
        getpassnumber = a;
        mailchack();
    }
}
if(typeof scheck == 'undefined'){
    time = 0;
    alert("店舗を発見できまへんで");
}
}
function mailchack(){
    search = "メールアドレス"+getpassnumber;
    adress2 = cn1[search];
    if(adress2 == adress){
        console.log("メールアドレス確認");
        mcheck = ''
    passget();
}
if(typeof mcheck == 'undefined'){
alert("メールアドレスが間違っています");
time = 0;
}
}
function passget(){
    search2 = "パスワード"+getpassnumber;
    pass2 = cn1[search2];
   mailsend();
}
//まずnameのやつがあるかをチェック次にメール送信→再設定のページを飛ばす 
function mailsend(){
var templateParams = {
name: name2,
pass: pass2,
mail:adress
};

emailjs.send('service_ay90m8q', 'template_booi3af', templateParams)
.then(function(response) {
console.log('SUCCESS!', response.status, response.text);
alert("メールを送信しました");
document.getElementById("name").value = '';
document.getElementById("mailad").value = '';
time=0;
}, function(error) {
console.log('FAILED...', error);
});
}
function send2(){
    time = 1000;
times = 1;
ani();
}
function ani(){
if(time==0){
document.getElementById("text").innerHTML = "送信";
return;
}
else if(times == 1){
document.getElementById("text").innerHTML = "loading";
times++;
setTimeout(ani,500);
}
else if(times == 2){
document.getElementById("text").innerHTML = "loading.";
times++;
setTimeout(ani,500);
}
else if(times == 3){
document.getElementById("text").innerHTML = "loading..";
times++;
setTimeout(ani,500);
}
else if(times == 4){
document.getElementById("text").innerHTML = "loading...";
times=1;
setTimeout(ani,500);
}
}
