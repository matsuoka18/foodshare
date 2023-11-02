        url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
        sn5 = '';
function start(){
    document.getElementById("bt1").innerHTML = "Loading";
  cd= document.cookie;
    //cd = 'branch=menu|; menumemo={"shop1":[22,38],"shop7":[14,36,52],"shop13":[4,26,42],"shop19":[1,23,39],"shop25":[1,23,39],"shop31":[1,23,39],"shop37":[1,23,39],"shop43":[1,23,39],"shop49":[1,23,39],"shop55":[23,39],"shop61":[23,39],"shop67":[23,39],"shop73":[23,39],"shop79":[23,39],"last":[79]}-; loginID=%E5%85%AB%E7%99%BE%E5%B1%8B!; pass=%E3%82%84%E3%81%BE%E3%81%8D?; shopnumber=85#';
    //cd ='branch=menu|; menumemo={"shop1":["3","21","24","37","40","107","108","109"],"shop7":["3","9","19","22","41","44","57","60"],"shop13":["9","12","31","34","47","50"],"shop19":["6","9","28","31","44","47"],"shop25":["6","9","28","31","44","47"],"last":["25"]}-';
    //cd = 'branch=menu|; menumemo={"shop1":["0","15","31"],"shop7":["6","12","16","38","54"],"shop13":["6","28","44"],"shop19":["3","25","41"],"shop25":["3","25","41"],"shop31":["3","25","41"],"last":["31"]}-; cookie_menuname=%E3%81%82%E3%81%84%E3%81%86%E3%81%88%E3%81%8A-; firstdata1={"shopdata":[{"n1":"hhh","n7":"abc","n13":"大船中学校","n19":"ばーーか","n25":"TULLYS COFFEE","n31":"店舗","n37":"手広","n43":"東進","n49":"マツオ","n55":"ローソン","num":55}]}; datav=0'

    console.log(cd);
        num1 = cd.indexOf("searchnum=");
        console.log(num1);
        num2 = cd.indexOf("$");
        num3 = cd.indexOf("searchname=");
        num4 = cd.indexOf("^");
        num5 = cd.indexOf("branch=");
        num6 = cd.indexOf("|");
        num7 = cd.indexOf("menumemo=");
        num8 = cd.indexOf("-",num7);
        num9 = cd.indexOf("cookie_menuname=");
        num10 = cd.indexOf("-",num9);
      if(num1 < 0 || num2 < 0 || num3 < 0 || num4 < 0){
            console.log("1");
            sn3 = cd.substring(num5+7,num6);
        sn4 = cd.substring(num7+9,num8);
        sn5 = cd.substring(num9+16,num10);
        sn5 = decodeURI(sn5);
        console.log(sn3);
        console.log(sn4);
        console.log("sn5:"+sn5);
        }else{
        sn = cd.substring(num1+10,num2);
        sn2 = decodeURI(cd.substring(num3+11,num4));
        sn3 = cd.substring(num5+7,num6);
        sn4 = cd.substring(num7+9,num8);
        sn5 = cd.substring(num9+num9.length,num10);
        sn5 = decodeURI(sn5);
        console.log(sn+":"+sn2);
        console.log(sn3);
        console.log(sn4);
        console.log(sn5);
        }
       // sn = 1;
        //sn2 = "hhh";
        //sn3 = "menu";
        //sn4 = {"shop1":["0","22","38"],"shop7":["14","36","52"],"shop13":["4","26","42"],"shop19":["1","23","39"],"shop25":["1","23","39"],"shop31":["1","23","39"],"shop37":["1","23","39"],"shop43":["1","23","39"],"shop49":["1","23","39"],"shop55":["23","39"],"shop61":["23","39"],"shop67":["23","39"],"shop73":["23","39"],"shop79":["23","39"],"last":["79"]};
if(sn3 == "menu"){
    
    console.log("menu")
  menu();
}
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
        if(name == sn5){
        fee = sd.fee[num]+"円";
        express = sd.express[num];
        genre = sd.genre[num];
        //pic = sd.name[num];
        data = "<div class="+"\""+"allq"+"\""+"><div class="+"\""+"out2q"+"\""+">"+"<div class="+"\""+"nameq"+"\""+">"+name+"<div class="+"\""+"feeq"+"\""+">"+fee+"</div><div class="+"\""+"picq"+"\""+">"+express+"</div></div></div><div class="+"\""+"outq"+"\""+"><div class="+"\""+"nameq"+"\""+">"+name+"<div class="+"\""+"feeq"+"\""+">"+fee+"</div><div class="+"\""+"picq"+"\""+"><img src="+"\""+"a.jpeg"+"\""+"></div></div></div></div>";
    all.insertAdjacentHTML('beforeend',data);
        }
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
    console.log("menu START");
      //sn4 = JSON.stringify(sn4);
      sn4 = JSON.parse(sn4);
        console.log("searching POST");
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
      console.log("menu FIN");
      menu2();
    }
    rc=0;
    function menu2(){
    rc++;
    console.log("menu2 START");
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
        rc=0;
        console.log("menu2 FIN");
        show2();
    })
   .catch(error =>{
       console.log("menu2 ERROR");
       console.log(error);
       if(rc > 2){
       rc=0;
       console.log("RELOAD (limit)");
       menu();
       }else{
       setTimeout(()=>{
       console.log("RELOAD (ERROR)");
       menu2();
       },1000)
    }
   })

}
    
    function show2(){
console.log("show2 START");
        document.getElementById("bt1").style.opacity = "0";
                    if(json == "error"){
            alert("商品が登録されていません");
        location.href="index.html";
        }
        sd = json;
        lm = sd.menu;
        lm = lm.length;
        for(num = 0; num<lm; num++){
        shop = sd.shop[num];
        name = sd.menu[num];
        if(name == sn5){
        fee = sd.fee[num]+"円";
        express = sd.express[num];
        genre = sd.genru[num];
        //pic = sd.name[num];
        data = "<div class="+"\""+"allq"+"\""+"><div class="+"\""+"out2q"+"\""+">"+"<div class="+"\""+"nameq"+"\""+">"+name+"<div class="+"\""+"feeq"+"\""+">"+fee+"</div><div class="+"\""+"picq"+"\""+">"+"<h4>"+shop+"</h4>"+"<p>"+express+"</p>"+"</div></div></div><div class="+"\""+"outq"+"\""+"><div class="+"\""+"nameq"+"\""+">"+name+"<div class="+"\""+"feeq"+"\""+">"+fee+"</div><div class="+"\""+"picq"+"\""+"><img src="+"\""+"a.jpeg"+"\""+"></div></div></div></div>";
    all.insertAdjacentHTML('beforeend',data);

    }
}
    document.getElementById("search").value = sd.menu[0];
    document.getElementById("total2").style.display = "block";
    document.getElementById("total2").style.opacity = "1"
    document.getElementById("total").innerHTML = lm;
    console.log("show2 FIN")
    }
    function home(){
        location.href = "index.html";
    }
   
