document.getElementById("text1").addEventListener('change',change);
document.getElementById("text2").addEventListener('change',change2);
function change(){
    document.getElementById("text1").style.boxShadow = "0 0 10px 2px lightgray";
}

function change2(){
    document.getElementById("text2").style.boxShadow = "0 0 10px 2px lightgray";
}

function send(){
    data = new Date();
    y = String(data.getFullYear());
    m = String(data.getMonth()+1);
    d = String(data.getDate());
    h =  String(data.getHours());
    mi = String(data.getMinutes());
    if(mi.length == 1){
        mi = "0"+mi;
    }
    time = y+"/"+m+"/"+d+"/"+h+":"+mi;
    text1 = document.getElementById("text1").value;
    text2 = document.getElementById("text2").value;
    url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
    data = [{
        "news1":text1,
        "news2":text2,
        "news3":time,
        "branch":"setnews"
    }];
    params = {
        "method":"post",
        "mode":"no-cors",
        "Content-Type":"application/json",
        "body":JSON.stringify(data)
    }
    fetch(url,params);
    console.log("success!!");
    console.log(text1);
    console.log(text2);
    console.log(time);    

    alert(time+"に投稿しました");
    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
}