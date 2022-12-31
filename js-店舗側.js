document.getElementById("hide").style.visibility = "hidden";
function check2(){
  cookie = document.cookie;
cookie2 = cookie.indexOf("loginID");
  cookie2 = cookie2+8;
cookie3 = cookie.indexOf("pass=");
cookie7 = cookie.indexOf("shopnumber=");
  cookie3 = cookie3-2;
  cookie5 = cookie3+7;
  cookie8 = cookie7+11;
   cookie7 = cookie7-2;
  cookie4 = cookie.substring(cookie2,cookie3);//loginID
  cookie6 = cookie.substring(cookie5,cookie7);//pass
  cookie9 = cookie.substring(cookie8,);//shopID
  cookie3 = cookie3-2;
    if(cookie4 && cookie6){
      dis();
    }else{
      
      alert("ログインしてください");
    location.href="login.html";
    }
}
function dis(){
  document.getElementById("no").style.display = "none";
  document.getElementById("hide").style.visibility = "visible";
}
  function content(){
    location.href="商品.html";
  }
  function shopinfo(){
    location.href = "店舗情報.html";
  }
  function co(){
  document.cookie='name=hey';
  console.log(document.cookie);
}