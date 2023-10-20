function te(){
    document.getElementById("but3").style.display = "none";
   document.getElementById("but3").style.opacity = "0";
   }
   
      function login(){
        console.log("login START");
        document.getElementById("but4").style.visibility = "none";
        document.getElementById("but4").style.opacity = "0";
        document.getElementById("but3").style.display = "block";
        document.getElementById("but3").innerHTML = "Sending...";
        document.getElementById("but3").style.opacity = "1";
        var data=[{
          "branch":"logindata"
        }]
        var params = {
          "method":"post",
          "mode":"no-cors",
          "Content-Type":"application/json",
          "body":JSON.stringify(data)
        }
        fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec',params)
      console.log("login FIN");
        setTimeout(login12,3000);
      }
      function login12(){
        console.log("login2 START")
        document.getElementById("but3").innerHTML = "loading...";
        fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec', {
            method: "GET",
            mode: "cors"
          })
          .then(response => {
            if (response.ok) {
              document.getElementById("but3").style.visibility = "hidden";
    document.getElementById("but3").style.opacity = "0";
    document.getElementById("but3").style.display = "none";
     document.getElementById("but3").innerHTML = "sending...";
    document.getElementById("but4").style.visibility = "visible";
    document.getElementById("but4").style.opacity = "1";
              return response.json();
              
            }
            // 404 や 500 ステータスならここに到達する
            throw new Error('Network response was not ok.');
         
          })
          .then(resJson => {
            text = JSON.stringify(resJson);
            console.log(text);
            text = JSON.parse(text);
            inputtext = document.getElementById("shopname").value;
            inputpassword = document.getElementById("password").value;
            sum = text.logindata[0].合計;
            //sum = sum.parseInt(sum);
            c = 0;
            for(var i = 0; i<sum; i++){
              text2 = text.logindata[0];
              namee ="店舗"+i;
              shop = text2[namee];
              console.log(shop)
              if(shop == inputtext){
                number = namee;
                number2 =i;
                i = sum+1;
                c = 1;
                console.log("login12 FIN")
                login2();
              }
              }
              if(c == 0){
                alert("店舗名を発見出来ませんでした");
            }

        })
          .catch(error => {
            // ネットワークエラーの場合はここに到達する
            console.error(error);
    document.getElementById("but3").style.visibility = "hidden";
    document.getElementById("but3").style.opacity = "0";
     document.getElementById("but3").innerHTML = "";
    document.getElementById("but4").style.visibility = "visible";
    document.getElementById("but4").style.opacity = "1";
            alert("エラーが発生しました")
          })
      }
function login2(){
  console.log("login2 START");
name2 = "パスワード"+number2;
name3 = "取得用"+number2;
password = text2[name2];
shopnumber = text2[name3];
console.log(password);
if(password == inputpassword){
  alert("ログインしました");
  inputtext = encodeURI(inputtext);
  inputpassword = encodeURI(inputpassword);
  loginID = "loginID="+ inputtext+"!";
  pass = "pass="+ inputpassword+"?";
  number2 = number2+1;
  shopnumber = "shopnumber="+shopnumber+"#";
  document.cookie = loginID;
  document.cookie = pass;
  document.cookie = shopnumber;
  console.log("login2 FIN")
  location.href="shoped.html";
}else{
  alert("パスワードが間違っています")
}
  //最初に店舗だけでデータが存在するか確認→その際０から変数をカウントして店舗を発見したときの変数の値でJSONからデータを取り、最後にパスワードとあっているか確認をする仕組みを作る
}
//ここのファイルでログイン情報をクッキーに書き込む
     //inputtext = encodeURL(inputtext);inputpassword = encodeURL(inputpassword);を書き込む