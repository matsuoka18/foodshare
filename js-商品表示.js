function start(){
    document.getElementById("bt1").innerHTML = "Loading";
     cd= document.cookie;
  //  cd = 'branch=menu|; menumemo={"shop1":[0,22,38],"shop7":[14,36,52],"shop13":[4,26,42],"shop19":[1,23,39],"shop25":[1,23,39],"shop31":[1,23,39],"shop37":[1,23,39],"shop43":[1,23,39],"shop49":[1,23,39],"shop55":[23,39],"shop61":[23,39],"shop67":[23,39],"shop73":[23,39],"shop79":[23,39],"last":[79]}-; loginID=%E5%85%AB%E7%99%BE%E5%B1%8B!; pass=%E3%82%84%E3%81%BE%E3%81%8D?; shopnumber=85#';
console.log(cd);
        num1 = cd.indexOf("searchnum=");
        console.log(num1);
        num2 = cd.indexOf("$");
        num3 = cd.indexOf("searchname=");
        num4 = cd.indexOf("^");
        num5 = cd.indexOf("branch=");
        num6 = cd.indexOf("|");
        num7 = cd.indexOf("menumemo=");
        num8 = cd.indexOf("-");
      if(num1 < 0 || num2 < 0 || num3 < 0 || num4 < 0){
            console.log("1");
            sn3 = cd.substring(num5+7,num6);
        sn4 = cd.substring(num7+9,num8);
        console.log(sn3);
        console.log(sn4);
        }else{
        sn = cd.substring(num1+10,num2);
        sn2 = decodeURI(cd.substring(num3+11,num4));
        sn3 = cd.substring(num5+7,num6);
        sn4 = cd.substring(num7+9,num8);

        console.log(sn+":"+sn2);
        console.log(sn3);
        console.log(sn4);
        }
       // sn = 1;
        //sn2 = "hhh";
        //sn3 = "menu";
        //sn4 = {"shop1":["0","22","38"],"shop7":["14","36","52"],"shop13":["4","26","42"],"shop19":["1","23","39"],"shop25":["1","23","39"],"shop31":["1","23","39"],"shop37":["1","23","39"],"shop43":["1","23","39"],"shop49":["1","23","39"],"shop55":["23","39"],"shop61":["23","39"],"shop67":["23","39"],"shop73":["23","39"],"shop79":["23","39"],"last":["79"]};

if(sn3 == "shop"){
document.getElementById("h1").innerHTML = sn2;
url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
//一旦getして店舗名があるかをチェック→なければ"name4"を商品取得"としてpost
data = [{
    "name4":"店舗商品取得",
    "name5":sn,
    "branch":"menudata"
}];
params={
    "method":"post",
    "mode":"no-cors",
    "Content-Type":"application/json",
    "body":JSON.stringify(data)
}
fetch(url,params);
setTimeout(start2,5000);
}else if(sn3 == "menu"){
    document.getElementById("h1").innerHTML = "商品検索";
    console.log("menu")
  menu();
}
}
function start2(){
document.getElementById("bt1").innerHTML = "Getting";
fetch(url,{ 
    method:"GET",
    mode:"cors"
})
    .then(response =>{
        if(response.ok){
            return response.json()
        }
    })
    .then(resJson =>{
        json = JSON.stringify(resJson);
        json = JSON.parse(json);
        console.log(json);
        number = 0;
        number2 = 10;
        show();
    })
   .catch(error =>{
       alert("エラー");
   })

    }
    function show(){
    document.getElementById("bt1").style.opacity = "0";
                    if(json[0] == "error"){
            alert("商品が登録されていません");
        location.href="index.html";
        }
        sd = json.getmenudata[0];
        lm = sd.last;
        for(num = number; num<lm; num++){
        name = sd.name[num];
        fee = sd.fee[num]+"円";
        express = sd.express[num];
        genre = sd.genre[num];
        //pic = sd.name[num];
        data = "<div class="+"\""+"allq"+"\""+"><div class="+"\""+"out2q"+"\""+">"+"<div class="+"\""+"nameq"+"\""+">"+name+"<div class="+"\""+"feeq"+"\""+">"+fee+"</div><div class="+"\""+"picq"+"\""+">"+express+"</div></div></div><div class="+"\""+"outq"+"\""+"><div class="+"\""+"nameq"+"\""+">"+name+"<div class="+"\""+"feeq"+"\""+">"+fee+"</div><div class="+"\""+"picq"+"\""+"><img src="+"\""+"a.jpeg"+"\""+"></div></div></div></div>";
    all.insertAdjacentHTML('beforeend',data);

    }
    }
    function next(){
        number+=10;
        number2+=10;
        if(lm <number2){
            number2 = lm;
       
        }
        if(lm <number){
            number-=10;
                 alert("最後のページです");
            return;
        }
        show();
    }
    function back(){
        number-=10;
        number2-=10;
        if(10 > number2){
            number2 = 10;
       
        }
        if(0 > number){
            number=0;
                 alert("最初のページです");
            return;
        }
        show();
    }
    function menu(){
      //sn4 = JSON.stringify(sn4);
      sn4 = JSON.parse(sn4);
        console.log("送信開始");
        url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
     var data = [{
      "searching1":sn4,
      "branch":"searching"
     }];
     var params = {
        "method":"post",
        "mode":"no-cors",
        "Content-Type":"application/json",
        "body":JSON.stringify(data)
     }
      fetch(url,params)
      setTimeout(menu2,3000);
    }
    function menu2(){
        document.getElementById("bt1").innerHTML = "Getting";
        fetch(url,{ 
    method:"GET",
    mode:"cors"
})
    .then(response =>{
        if(response.ok){
            return response.json()
        }
    })
    .then(resJson =>{
        json = JSON.stringify(resJson);
        json = JSON.parse(json);
        console.log(json);
        show2();
    })
   .catch(error =>{
       alert("エラー");
   })

    }
    function show2(){

        document.getElementById("bt1").style.opacity = "0";
                    if(json == "error"){
            alert("商品が登録されていません");
        location.href="index.html";
        }
        sd = json;
        lm = sd.menu;
        lm = lm.length;
        for(num = 0; num<lm; num++){
        name = sd.menu[num];
        fee = sd.fee[num]+"円";
        express = sd.express[num];
        genre = sd.genru[num];
        //pic = sd.name[num];
        data = "<div class="+"\""+"allq"+"\""+"><div class="+"\""+"out2q"+"\""+">"+"<div class="+"\""+"nameq"+"\""+">"+name+"<div class="+"\""+"feeq"+"\""+">"+fee+"</div><div class="+"\""+"picq"+"\""+">"+express+"</div></div></div><div class="+"\""+"outq"+"\""+"><div class="+"\""+"nameq"+"\""+">"+name+"<div class="+"\""+"feeq"+"\""+">"+fee+"</div><div class="+"\""+"picq"+"\""+"><img src="+"\""+"a.jpeg"+"\""+"></div></div></div></div>";
    all.insertAdjacentHTML('beforeend',data);

    }
    }
    function test(){
        /*name = "potato";
        fee = "500";
        express = "this potato is the most delicious potato all over the world!! let's eat this!!"
        data =  "<div class="+"\""+"no1"+"\""+"><p class="+"\""+"shopname"+"\""+">"+sn2+"</p><div class="+"\""+"menufee"+"\""+"><p class="+"\""+"menu"+"\""+">"+name+"</p><p class="+"\""+"fee"+"\""+">"+fee+"</p></div><p class="+"\""+"express"+"\""+">"+express+"<div class="+"\""+"pic"+"\""+"></div></div>";
    all.insertAdjacentHTML('afterbegin',data)*/
         
   
        
    }