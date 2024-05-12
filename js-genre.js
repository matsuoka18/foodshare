const { response } = require("express");
const res = require("express/lib/response");

function home(){
    location.href="index.html";
}
function ulogin(){
    location.href="ulogin.html";
}
function start(){
    var cookie = document.cookie;
    
    var l1 = cookie.indexOf("genre_data=");
    if(l1 !=-1){
     var l2 = cookie.indexOf("!",l1);
     l1 = parseInt(l1)+11
     var data = cookie.substring(l1,l2);
     console.log("Genre:"+data);
     send_datas(data);
    }else{
        alert("Cookie エラーです");
        data = "うどん"
        send_datas(data);
    }
}
function send_datas(data){
    url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
    var data = [{
        "name8":data,
        "branch":"getjan_data"
    }]
    var params = {
        "method":"post",
        "mode":"no-cors",
        "Content-Type":"application/json",
        "body":JSON.stringify(data)
    }
    fetch(url,params);
    console.log("data send");
    get_datas();
}
function get_datas(){
    console.log("data getting");
    url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
    fetch(url,{
        "method":"get",
        "mode":"cors"
    })
    .then(response=>{
        if(response.ok){
            return response.json()
        }
    })
    .then(resJson=>{
        console.log("data got");
        var indenitification = resJson[2].indenitification[0];
        console.log(indenitification);
        if(indentification == undefined){
            console.log("otherdata reload");
            get_datas();
        }else if(indenitification == "genre"){
          //以後こっからデータ取得→記述
        }else{
            console.log("error");
        }
    })
}