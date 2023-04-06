document.getElementById("pass1").addEventListener('keyup',check);
document.getElementById("pass2").addEventListener('keyup',check);
document.getElementById("pass3").addEventListener('keyup',check);
document.getElementById("pass4").addEventListener('keyup',check);
c = 0;
function check(){
c++;
if(c > 16){
    window.close();
}else if(c <=16 && document.getElementById("pass1").value == "mochi" && document.getElementById("pass2").value == "zansin" && document.getElementById("pass3").value == "inu" && document.getElementById("pass4").value == "19"){
    document.getElementById("all").style.display = "none";
    document.getElementById("all2").style.display = "block";
    document.getElementById("all2").style.opacity = 1;
}
}
function start(){
    data = document.cookie;
    if(data.indexOf("hoji=y") !=-1){
        document.getElementById("all").style.display = "none";
        document.getElementById("all2").style.display = "block";
        document.getElementById("all2").style.opacity = 1;
    }else{
        document.getElementById("all2").style.display = "none";
    }
}
function hoji(){
    document.cookie = "hoji=y; max-age=1000";
    alert("保持しました。");
    document.getElementById("b").style.backgroundColor = "darkgray";
    document.getElementById("b").innerHTML = "保持中";
}