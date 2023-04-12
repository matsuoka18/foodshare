function back(){
    location.href = "index.html"
}
function start(){
    url="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  data = [{
    "branch":"getnews"
    }]
  params = {
    "method":"post",
    "mode":"no-cors",
    "Content-Type":"application/json",
    "body":JSON.stringify(data)
    }
  fetch(url,params)
  console.log("firstnews search start");
  setTimeout(firstnews2,1000);
}
function firstnews2(){
    url ="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
    fetch(url,{
      "method":"GET",
      "mode":"cors"
      })
      .then(response => {
        if(response.ok){
          return response.json()
          }
        })
  
      .then(resJson => {
        newsjson = resJson;
        console.log(newsjson);
        console.log("firstnews2 search finish");
        setTimeout(firstwrite,1000);
      })
      .catch(error => {
      alert("Error");
      console.log("newsのエラー");
      })
  }
  function firstwrite(){
    for(var a = 1; a<=5; a++){
      console.log("a:"+a);
    data1 = newsjson[0].news1[a];
    data2 = newsjson[0].news2[a];
    console.log("data1:"+data1);
    console.log("data2:"+data2);
    data =  "<div class="+"\""+"tpb2"+"\""+"id="+"\""+"tpb2"+a+"\""+ "onclick="+"\""+"news"+a+"()"+"\""+">"+data1+"<span>"+data2+"</span></div>";
     topber.insertAdjacentHTML("beforeend",data);
    console.log("data:"+data);
    }
    console.log("firstwrite finish");

    data1 = newsjson[0].news1[1];
    data2 = newsjson[0].news2[1];
    data3 = newsjson[0].news3[1];
    data = "<div class="+"\""+"rtpl"+"\""+">"+"<span " +"id="+"\""+"rtpl"+"\""+">"+data1+"</span>"+"<span id="+"\""+"rtpl2"+"\""+">"+data2+"</span></div><pre id="+"\""+"rtpl3"+"\""+">"+data3+"</pre>";
    right.insertAdjacentHTML("beforeend",data);
    document.getElementById("tpb21").style.fontWeight = "550";
    document.getElementById("tpb21").style.fontSize = "110%";
    document.getElementById("tpb21").style.borderBottom = "2px solid black";
    document.getElementById("tpb21").style.width = "90%";

    document.getElementById("tpb22").style.fontWeight = "500";
    document.getElementById("tpb22").style.fontSize = "100%";
    document.getElementById("tpb22").style.borderBottom = "1px solid black";
    document.getElementById("tpb22").style.width = "90%";

    document.getElementById("tpb23").style.fontWeight = "500";
    document.getElementById("tpb23").style.fontSize = "100%";
    document.getElementById("tpb23").style.borderBottom = "1px solid black";
    document.getElementById("tpb23").style.width = "90%";

    document.getElementById("tpb24").style.fontWeight = "500";
    document.getElementById("tpb24").style.fontSize = "100%";
    document.getElementById("tpb24").style.borderBottom = "1px solid black";
    document.getElementById("tpb24").style.width = "90%";

    document.getElementById("tpb25").style.fontWeight = "500";
    document.getElementById("tpb25").style.fontSize = "100%";
    document.getElementById("tpb25").style.borderBottom = "1px solid black";
    document.getElementById("tpb25").style.width = "90%";
  }
  function news1(){
    s = 1;
    /*rtpl = document.getElementById("rtpl");
    rtpl3 = document.getElementById("rtpl3");
    rtpl.remove();
    rtpl3.remove();*/
    document.getElementById('rtpl').remove();
    document.getElementById('rtpl2').remove();
    document.getElementById('rtpl3').remove();
    data1 = newsjson[0].news1[s];
    data2 = newsjson[0].news2[s];
    data3 = newsjson[0].news3[s];
    data = "<div class="+"\""+"rtpl"+"\""+">"+"<span " +"id="+"\""+"rtpl"+"\""+">"+data1+"</span>"+"<span id="+"\""+"rtpl2"+"\""+">"+data2+"</span></div><pre id="+"\""+"rtpl3"+"\""+">"+data3+"</pre>";
    right.insertAdjacentHTML("beforeend",data);
    document.getElementById("tpb21").style.fontWeight = "550";
    document.getElementById("tpb21").style.fontSize = "110%";
    document.getElementById("tpb21").style.borderBottom = "2px solid black";
    document.getElementById("tpb21").style.width = "90%";

    document.getElementById("tpb22").style.fontWeight = "500";
    document.getElementById("tpb22").style.fontSize = "100%";
    document.getElementById("tpb22").style.borderBottom = "1px solid black";
    document.getElementById("tpb22").style.width = "90%";

    document.getElementById("tpb23").style.fontWeight = "500";
    document.getElementById("tpb23").style.fontSize = "100%";
    document.getElementById("tpb23").style.borderBottom = "1px solid black";
    document.getElementById("tpb23").style.width = "90%";

    document.getElementById("tpb24").style.fontWeight = "500";
    document.getElementById("tpb24").style.fontSize = "100%";
    document.getElementById("tpb24").style.borderBottom = "1px solid black";
    document.getElementById("tpb24").style.width = "90%";

    document.getElementById("tpb25").style.fontWeight = "500";
    document.getElementById("tpb25").style.fontSize = "100%";
    document.getElementById("tpb25").style.borderBottom = "1px solid black";
    document.getElementById("tpb25").style.width = "90%";
  }
  function news2(){
    s = 2;
    /*rtpl = document.getElementById("rtpl");
    rtpl3 = document.getElementById("rtpl3");
    rtpl.remove();
    rtpl3.remove();*/
    document.getElementById('rtpl').remove();
    document.getElementById('rtpl2').remove();
    document.getElementById('rtpl3').remove();
    data1 = newsjson[0].news1[s];
    data2 = newsjson[0].news2[s];
    data3 = newsjson[0].news3[s];
    data = "<div class="+"\""+"rtpl"+"\""+">"+"<span " + "id="+"\""+"rtpl"+"\""+">"+data1+"</span>"+"<span id="+"\""+"rtpl2"+"\""+">"+data2+"</span></div><pre id="+"\""+"rtpl3"+"\""+">"+data3+"</pre>";
    right.insertAdjacentHTML("beforeend",data);
    document.getElementById("tpb21").style.fontWeight = "500";
    document.getElementById("tpb21").style.fontSize = "100%";
    document.getElementById("tpb21").style.borderBottom = "1px solid black";
    document.getElementById("tpb21").style.width = "90%";

    document.getElementById("tpb22").style.fontWeight = "550";
    document.getElementById("tpb22").style.fontSize = "110%";
    document.getElementById("tpb22").style.borderBottom = "2px solid black";
    document.getElementById("tpb22").style.width = "90%";

    document.getElementById("tpb23").style.fontWeight = "500";
    document.getElementById("tpb23").style.fontSize = "100%";
    document.getElementById("tpb23").style.borderBottom = "1px solid black";
    document.getElementById("tpb23").style.width = "90%";

    document.getElementById("tpb24").style.fontWeight = "500";
    document.getElementById("tpb24").style.fontSize = "100%";
    document.getElementById("tpb24").style.borderBottom = "1px solid black";
    document.getElementById("tpb24").style.width = "90%";

    document.getElementById("tpb25").style.fontWeight = "500";
    document.getElementById("tpb25").style.fontSize = "100%";
    document.getElementById("tpb25").style.borderBottom = "1px solid black";
    document.getElementById("tpb25").style.width = "90%";
  }
  function news3(){
    s = 3;
    /*rtpl = document.getElementById("rtpl");
    rtpl3 = document.getElementById("rtpl3");
    rtpl.remove();
    rtpl3.remove();*/
    document.getElementById('rtpl').remove();
    document.getElementById('rtpl2').remove();
    document.getElementById('rtpl3').remove();
    data1 = newsjson[0].news1[s];
    data2 = newsjson[0].news2[s];
    data3 = newsjson[0].news3[s];
    data = "<div class="+"\""+"rtpl"+"\""+">"+"<span " + "id="+"\""+"rtpl"+"\""+">"+data1+"</span>"+"<span id="+"\""+"rtpl2"+"\""+">"+data2+"</span></div><pre id="+"\""+"rtpl3"+"\""+">"+data3+"</pre>";
    right.insertAdjacentHTML("beforeend",data);

    document.getElementById("tpb21").style.fontWeight = "500";
    document.getElementById("tpb21").style.fontSize = "100%";
    document.getElementById("tpb21").style.borderBottom = "1px solid black";
    document.getElementById("tpb21").style.width = "90%";

    document.getElementById("tpb22").style.fontWeight = "500";
    document.getElementById("tpb22").style.fontSize = "100%";
    document.getElementById("tpb22").style.borderBottom = "1px solid black";
    document.getElementById("tpb22").style.width = "90%";

    document.getElementById("tpb23").style.fontWeight = "550";
    document.getElementById("tpb23").style.fontSize = "110%";
    document.getElementById("tpb23").style.borderBottom = "2px solid black";
    document.getElementById("tpb23").style.width = "90%";
    
    document.getElementById("tpb24").style.fontWeight = "500";
    document.getElementById("tpb24").style.fontSize = "100%";
    document.getElementById("tpb24").style.borderBottom = "1px solid black";
    document.getElementById("tpb24").style.width = "90%";

    document.getElementById("tpb25").style.fontWeight = "500";
    document.getElementById("tpb25").style.fontSize = "100%";
    document.getElementById("tpb25").style.borderBottom = "1px solid black";
    document.getElementById("tpb25").style.width = "90%";
  }
  function news4(){
    s = 4;
    /*
    rtpl = document.getElementById("rtpl");
    rtpl3 = document.getElementById("rtpl3");
    rtpl.remove();
    rtpl3.remove();*/
    document.getElementById('rtpl').remove();
    document.getElementById('rtpl2').remove();
    document.getElementById('rtpl3').remove();
    data1 = newsjson[0].news1[s];
    data2 = newsjson[0].news2[s];
    data3 = newsjson[0].news3[s];
    data = "<div class="+"\""+"rtpl"+"\""+">"+"<span " + "id="+"\""+"rtpl"+"\""+">"+data1+"</span>"+"<span id="+"\""+"rtpl2"+"\""+">"+data2+"</span></div><pre id="+"\""+"rtpl3"+"\""+">"+data3+"</pre>";
    right.insertAdjacentHTML("beforeend",data);

    document.getElementById("tpb21").style.fontWeight = "500";
    document.getElementById("tpb21").style.fontSize = "100%";
    document.getElementById("tpb21").style.borderBottom = "1px solid black";
    document.getElementById("tpb21").style.width = "90%";

    document.getElementById("tpb22").style.fontWeight = "500";
    document.getElementById("tpb22").style.fontSize = "100%";
    document.getElementById("tpb22").style.borderBottom = "1px solid black";
    document.getElementById("tpb22").style.width = "90%";
    
    document.getElementById("tpb23").style.fontWeight = "500";
    document.getElementById("tpb23").style.fontSize = "100%";
    document.getElementById("tpb23").style.borderBottom = "1px solid black";
    document.getElementById("tpb23").style.width = "90%";
    
    document.getElementById("tpb24").style.fontWeight = "550";
    document.getElementById("tpb24").style.fontSize = "110%";
    document.getElementById("tpb24").style.borderBottom = "2px solid black";
    document.getElementById("tpb24").style.width = "90%";

    document.getElementById("tpb25").style.fontWeight = "500";
    document.getElementById("tpb25").style.fontSize = "100%";
    document.getElementById("tpb25").style.borderBottom = "1px solid black";
    document.getElementById("tpb25").style.width = "90%";
  }
  function news5(){
    s = 5;
    /*rtpl = document.getElementById("rtpl");
    rtpl3 = document.getElementById("rtpl3");
    rtpl.remove();
    rtpl3.remove();*/
    document.getElementById('rtpl').remove();
    document.getElementById('rtpl2').remove();
    document.getElementById('rtpl3').remove();
    data1 = newsjson[0].news1[s];
    data2 = newsjson[0].news2[s];
    data3 = newsjson[0].news3[s];
    data = "<div class="+"\""+"rtpl"+"\""+">"+"<span " + "id="+"\""+"rtpl"+"\""+">"+data1+"</span>"+"<span id="+"\""+"rtpl2"+"\""+">"+data2+"</span></div><pre id="+"\""+"rtpl3"+"\""+">"+data3+"</pre>";
    right.insertAdjacentHTML("beforeend",data);

    document.getElementById("tpb21").style.fontWeight = "500";
    document.getElementById("tpb21").style.fontSize = "100%";
    document.getElementById("tpb21").style.borderBottom = "1px solid black";
    document.getElementById("tpb21").style.width = "90%";

    document.getElementById("tpb22").style.fontWeight = "500";
    document.getElementById("tpb22").style.fontSize = "100%";
    document.getElementById("tpb22").style.borderBottom = "1px solid black";
    document.getElementById("tpb22").style.width = "90%";
    
    document.getElementById("tpb23").style.fontWeight = "500";
    document.getElementById("tpb23").style.fontSize = "100%";
    document.getElementById("tpb23").style.borderBottom = "1px solid black";
    document.getElementById("tpb23").style.width = "90%";

    document.getElementById("tpb24").style.fontWeight = "500";
    document.getElementById("tpb24").style.fontSize = "100%";
    document.getElementById("tpb24").style.borderBottom = "1px solid black";
    document.getElementById("tpb24").style.width = "90%";

    document.getElementById("tpb25").style.fontWeight = "550";
    document.getElementById("tpb25").style.fontSize = "110%";
    document.getElementById("tpb25").style.borderBottom = "2px solid black";
    document.getElementById("tpb25").style.width = "90%";
  }
  function a(){
    document.getElementById('rtpl').remove();
   document.getElementById('rtpl2').remove();
   document.getElementById('rtpl3').remove();
  }
check = 0;
  function next(){
    if(check == 0){
        document.getElementById("topb1").innerHTML = "過去のお知らせ";
        document.getElementById("topb2").innerHTML =  "最新のお知らせ>";
        document.getElementById("topber").style.display = "none";
        document.getElementById("topber2").style.display = "block";
        document.getElementById("topber2").style.opacity = "1";
        document.getElementById("datesearch").style.display = "block";
        document.getElementById("datesearch").style.opacity = "1";
        document.getElementById("nextb").style.display = "block";
        document.getElementById("nextb").style.opacity = "1";
        check++;
        nextdata();
    }else{
        document.getElementById("topb1").innerHTML = "最新のお知らせ";
        document.getElementById("topb2").innerHTML =  "過去のお知らせ>";
        document.getElementById("topber").style.display = "block";
        document.getElementById("topber").style.opacity = "1";
        document.getElementById("topber2").style.display = "none";
        document.getElementById("datesearch").style.display = "none";
        document.getElementById("nextb").style.display = "none";
        check =0 ;
    }
    
  }
  function nextdata(){
    last = newsjson[0].news1.length;
    console.log(last);
    if(last > 10){
        for(var a = 1; a<=10; a++){
            data1 = newsjson[0].news1[a];
        data2 = newsjson[0].news2[a];
        data = "<div class="+"\""+"tpb2"+"\""+" id="+"\""+"tpb21"+"\""+" onclick="+"\""+"news"+a+"()"+"\""+" >"+data1+"<span>"+data2+"</span></div>";
        topber2.insertAdjacentHTML("beforeend",data);
        }
    }else{
    for(var a = 1; a<=last; a++){
        data1 = newsjson[0].news1[a];
        data2 = newsjson[0].news2[a];
        data = "<div class="+"\""+"tpb2"+"\""+" id="+"\""+"tpb21"+"\""+" onclick="+"\""+"news"+a+"()"+"\""+" >"+data1+"<span>"+data2+"</span></div>";
        topber2.insertAdjacentHTML("beforeend",data);
        //のちのち１０件ずつとか表示に
    }
}
  }
aa = 10;
function bn(){
    aa+=10;
if(aa < last){
    for(var a = aa-10; a<aa; a++){
        data1 = newsjson[0].news1[a];
        data2 = newsjson[0].news2[a];
        data = "<div class="+"\""+"tpb2"+"\""+" id="+"\""+"tpb21"+"\""+" onclick="+"\""+"news"+a+"()"+"\""+" >"+data1+"<span>"+data2+"</span></div>";
        topber2.insertAdjacentHTML("beforeend",data);
    }
}else{
    for(var a = aa-10; a<last; a++){
        data1 = newsjson[0].news1[a];
        data2 = newsjson[0].news2[a];
        data = "<div class="+"\""+"tpb2"+"\""+" id="+"\""+"tpb21"+"\""+" onclick="+"\""+"news"+a+"()"+"\""+" >"+data1+"<span>"+data2+"</span></div>";
        topber2.insertAdjacentHTML("beforeend",data);
    }
    aa-=10;
    console.log("最終ページです");
    alert("最終ページです");
}
}

function bb(){
aa-=10;
if(aa <= 0){
 if(last < 10){
    for(var a = 0; a<last; a++){
        data1 = newsjson[0].news1[a];
        data2 = newsjson[0].news2[a];
        data = "<div class="+"\""+"tpb2"+"\""+" id="+"\""+"tpb21"+"\""+" onclick="+"\""+"news"+a+"()"+"\""+" >"+data1+"<span>"+data2+"</span></div>";
        topber2.insertAdjacentHTML("beforeend",data);
    }
    console.log("最初のページです");
    alert("最初のページです");
 }else{
    for(var a = 0; a<10; a++){
        data1 = newsjson[0].news1[a];
        data2 = newsjson[0].news2[a];
        data = "<div class="+"\""+"tpb2"+"\""+" id="+"\""+"tpb21"+"\""+" onclick="+"\""+"news"+a+"()"+"\""+" >"+data1+"<span>"+data2+"</span></div>";
        topber2.insertAdjacentHTML("beforeend",data);
    }
    console.log("最初のページです");
    alert("最初のページです");
 }
}else{
  for(var a = aa; a<aa+10; a++){
    data1 = newsjson[0].news1[a];
    data2 = newsjson[0].news2[a];
    data = "<div class="+"\""+"tpb2"+"\""+" id="+"\""+"tpb21"+"\""+" onclick="+"\""+"news"+a+"()"+"\""+" >"+data1+"<span>"+data2+"</span></div>";
    topber2.insertAdjacentHTML("beforeend",data);
  }
}
}
function datesearch(){
  last = newsjson.news1.length;
  m1=[];
  m2=[];
  m3=[];
  m4=[];
  m5=[];
  m6=[];
  m7=[];
  m8=[];
  m9=[];
  m10=[];
  m11=[];
  m12=[];
  for(var a = 0; a<=last; a++){
    data1 = newsjson.indexOf("/",0);
data2 = newsjson.indexOf("/",data1);
data3 = newsjson.indexOf("/",data2);
date1 = newsjson.substring(0,data1);
date2 = newsjson.substring(data1,data2);
date3 = newsjson.substring(data2,data3);
if(date2 ==  1){
  
  
}else if(date2 == 2){
  
  
}else if(date2 == 3){
  
  
}else if(date2 == 4){
  
  
}else if(date2 == 5){
  
  
}else if(date2 == 6){
  
  
}else if(date2 == 7){
  
  
}else if(date2 == 8){
  
  
}else if(date2 == 9){
  
  
}else if(date2 == 10){
  
  
}else if(date2 == 11){
  
  
}else if(date2 == 12){
  
  
}
}

}