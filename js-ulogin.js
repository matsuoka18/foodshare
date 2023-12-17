
function te(){
    document.getElementById("but3").style.display = "none";
   document.getElementById("but3").style.opacity = "0";
   document.getElementById("but33").style.display = "none";
   document.getElementById("but33").style.opacity = "0";
   }
   url = "https://script.google.com/macros/s/AKfycbznRWc7V4hvtxjHHfbovG8gwgDzdj7nAWu-Kzzv_XMNrnLAQXhnwO16Hw3oS3RiyvV_/exec";
   json = '';
   user = '';
   password = '';
   pcount = 0;
   function entry(){
    user = document.getElementById("userID1").value;
    password = document.getElementById("password1").value;
    document.getElementById("but4").innerHTML = "Loading";
    
    data = [{
        "branch":"usercheck"
    }]
    params = {
        "method":"POST",
        "mode":"no-cors",
        "Content-Type":"application/json",
        "body":JSON.stringify(data)
    }
    fetch(url,params);
    entry_1();
   }
   count = 0;
   count = 0;
   function entry_1(){
    count++;
   fetch(url,{
    "method":"GET",
    "mode":"cors"
   })
   .then(response =>{
    if(response.ok){
        return response.json()
    }
   })
   .then(resJson =>{
    json = resJson;
    last = json.length;
    json2 = json[0];
    console.log(json2);
    if(json2 != 'ユーザーID' && count == 3){
        console.log("Reload");
        count = 0;
        entry();
    }else if(json2 != 'ユーザーID' && count <3 ){
        console.log("other data");
        entry_1();
    }else if(json2 == "ユーザーID"){
    for(var a =0; a<length; a++){
        text = json[a];
        if(text == user){
            alert("ユーザーIDがすでにつかわれています");
            return;
        }
    }
    pcount++;
    entry_2();
}
   })
   .catch(error=>{
    alert("エラーが発生しました");
    alert("はじめからやり直してください");
    console.log("error:"+error);
    document.getElementById("but4").innerHTML = "会員登録";
   })
   }
function entry_2(){
    if(pcount == 1){
    data = [{
        "data1":user,
        "data2":password,
        "branch":"entry"
    }]
    params = {
        "method":"POST",
        "mode":"no-cors",
        "Content-Type":"application/json",
        "body":JSON.stringify(data)
    }
    fetch(url,params);
    alert("登録が完了しました")
}
    document.getElementById("but4").innerHTML = "会員登録";
}

   count2 = 0;
   user2 = '';
   password2 = '';
   function login(){
    document.getElementById("but44").innerHTML = "Loading";
    console.log("login START");
    user2 = document.getElementById("userID2").value;
    password2 = document.getElementById("password2").value;
    console.log(user2);
    console.log(password2);
    data = [{
        "branch":"login"
    }]
    params = {
        "method":"POST",
        "mode":"no-cors",
        "Content-Type":"application/json",
        "body":JSON.stringify(data)
    }
    fetch(url,params);
    console.log("login FIN");
    login2();
   }
   cdata= '';
   function login2(){
    count2++;
    console.log("login2 START");
    fetch(url,{
        "method":"GET",
        "mode":"cors"
       })
       .then(response =>{
        if(response.ok){
            return response.json()
        }
       })
       .then(resJson =>{
        json = resJson;
        last = json.userid.length;
        console.log("last"+last)
        json2 = JSON.stringify(json);
        json2 = json2.indexOf("password");
        if(json2 == -1 && count == 3){
              alert("エラーが発生しました。はじめからやり直してください")
              count2 = 0;
        }else if(json2 == -1 && count2 <3 ){
            console.log("other data");
            login();
        }
        for(var a =0; a<last; a++){
            text = json.userid[a];
            text2 = json.password[a];
            if(text == user2 && text2 == password2){
                  console.log("一致");
                  cdata = "userid="+text+"-";
                  cdata2 = "login_status=yes!";
                  document.cookie = cdata2;
                  document.cookie = cdata;
                  document.getElementById("but44").innerHTML = "ログイン";
                  alert("ログインしました");
                  location.href="index.html";
            }
        }
        if(cdata.length == 0){
            document.getElementById("but44").innerHTML = "ログイン";
            alert("ユーザーID・パスワードが一致しません")
        }
        console.log("login2 FIN");
       })
       .catch(error=>{
        alert("エラーが発生しました")
        document.getElementById("but44").innerHTML = "ログイン";
        console.log(error)
       })
       
   }