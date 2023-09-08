function hello(){
  alert("HELLO");
  document.cookie = "name=hello";
  alert(document.cookie);
}
document.getElementById("che").style.visibility="hidden";
document.getElementById("send").style.visibility="hidden";
document.getElementById("password").addEventListener('keyup',pass);
function pass(){
if(document.getElementById("password").value.length<8){
document.getElementById("password").style.outlineColor = "red";
document.getElementById("passw").innerHTML = "8文字以上入力してください";
}else{
document.getElementById("password").style.outlineColor = "white";
document.getElementById("passw").innerHTML = "";
}
}
function check(){
document.getElementById("check1").innerHTML = "店舗名:"+document.getElementById("shopname").value;
document.getElementById("check4").innerHTML = "メールアドレス:" + document.getElementById("mailad").value;
document.getElementById("check2").innerHTML = "パスワード:"+document.getElementById("password").value;
document.getElementById("check3").innerHTML = "変更する際はもう一度フォーム欄に入力してください";
document.getElementById("send").style.visibility="visible";
document.getElementById("che").style.visibility="visible";
}
function send(){
text = document.getElementById("shopname").value;
var pass = document.getElementById("password").value;
var mailad = document.getElementById("mailad").value;
var url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
var data = [{
  "name":text,
"name4":"店舗",
"name7":pass,
"name11":mailad
}];
var data2 = [{
  "name":text,
"name4":"終了"
}]
var params = {
"method":"post",
"mode":"no-cors",
"Content-Type":"application/json",
"body":JSON.stringify(data)
}
var params2 = {
"method":"post",
"mode":"no-cors",
"Content-Type":"application/json",
"body":JSON.stringify(data2)
}
fetch(url,params)
fetch(url,params2)
document.getElementById("all").style.opacity = 0;
document.getElementById("all2").style.opacity = 1;
document.getElementById("all2").style.display = "block";
data = "<p>メールアドレスに本登録ページを送信しました</p>";
all2.insertAdjacentHTML('beforeend',data);
text = encodeURI(text);
cookiee= "key="+text+"><";
alert(cookiee);
document.cookie = cookiee;
alert(document.cookie);
var templateParams = {
mail : mailad,
shop : text
};
emailjs.send('service_42f6qvc', 'template_2fm7ssi', templateParams)
.then(function(response) {
 console.log('SUCCESS!', response.status, response.text);
alert("メールを送信しました");
}, function(error) {
 console.log('FAILED...', error);
});
window.scrollTo(0,0);
//cookieに次の店舗登録2.htmlでデータを受け取る用のkeyを記載
///alert("登録が完了しました");
//location.href="login.html";
}