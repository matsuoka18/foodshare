
//asyncを使用している関数すべてが読み込みと同時になんか実行されてしまっているからそこの修正を行う必要がある　8月31日



a = 0;
ipadress = '';
resJson = '';
datav11 = '';
success3 = '';
firstdata1 = '';
firstdata11 = '';
firstdata2 = '';
success1 = 'o';
success2 = '';
request1 = '';
request2 = '';
request3 = '';
order = '';
firstdata2ins = '';
newsins = '';
newsjson = '';
endm = 'start';
function start(datav) {
  document.getElementById("alll").style.opacity = "1";
  document.getElementById("alll2").style.display = "none";
  /* fetch('https://ipinfo.io?callback')
 .then(res => res.json())
 .then(json => {
 ip = json.ip;
 if(ip == '60.134.235.1'){*/


  /* document.getElementById("alll").style.opacity = "1";
   document.getElementById("alll2").style.display = "none";
 
   //if間違ってるかも
   if (typeof datav == "string") {
     console.log("GET");
     url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
     fetch(url, {
       "method": "GET",
       "mode": "cors"
     })
       .then(response => {
         if (response.ok) {
           return response.json();
         }
       })
       .then(resJson => {
         console.log("datav1:" + JSON.stringify(resJson));
         datav11 = resJson;
         var cdata = document.cookie;
         if (cdata.length == 0) {
           firstsearch();
 
         } else {
           var vdata = cdata.indexOf("datav=");
           var vdata2 = cdata.indexOf(";", vdata);
           var vnews = cdata.indexOf("newsv=");
           var vnews2 = cdata.indexOf(";", vnews);
           var datav = cdata.substring(vdata + 6, vdata2);
           var vnews = cdata.substring(vnews + 6, vnews2);
           datav1 = datav11[0].v1;
           console.log("datav1:" + datav1);
           newsv1 = datav11[0].v2;
           console.log("newsv1:" + newsv1);
           if (datav1 == datav) {
             success1 = "ok";
             success2 = "ok";
             console.log("same -V data");
           }
           if (newsv1 == vnews) {
             success3 = "ok";
             console.log("sama -V news");
           }
           order = 0;
           firstsearchall();
         }
       })
       .catch(error => {
         console.log("start():error");
         console.log("retry to load start()");
         console.log("Error Log:" + error)
         setTimeout(() => {
           start();
         }, 1000)
       })
   } else {
     pic();
     console.log("POST");
     console.log(typeof datav);
     url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
     var data = [{
       "branch": "datav"
     }];
     var params = {
       "method": "post",
       "mode": "no-cors",
       "Content-Type": "application/json",
       "body": JSON.stringify(data)
     }
     fetch(url, params);
     console.log("datav start");
     datav = "ok";
     setTimeout(start, 1000, datav);
   }
   */
  var cookie = document.cookie;
  var c1 = cookie.indexOf("userid=") + 7;
  if (c1 == 6) {

  } else {
    var c2 = cookie.indexOf("-", c1);
    userid = cookie.substring(c1, c2);
    console.log("userid:" + userid)
    document.getElementById("lcheck").innerHTML = userid;
  }
  
  firstsearch();
}
function shop() {
  location.href = "entry.html";
}
document.getElementById("search").addEventListener('keyup', event => {
  if (event.keyCode == 13) {
    searching();
  }
});

function firstsearch() {
  console.log("firstsearch START")
  url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  var data = [{
    "branch": "shopdata"
  }]
  var params = {
    "method": "post",
    "mode": "no-cors",
    "Content-Type": "application/json",
    "body": JSON.stringify(data)
  }
  fetch(url, params);
  console.log("shopdata POST")
  success1 = "o";
  console.log("firstsearch FIN")
  firstsearch2();
}
rc = 0;//リロードのカウンター
rc11 = 0;
function firstsearch2() {
  console.log("firstsearch2 START");
  fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec', {
    method: "GET",
    moe: "cors"
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(resJson => {
      rc++;
      firstdata1 = resJson;
      firstdata1 = JSON.stringify(firstdata1);
      firstdata1b = firstdata1;
      firstdata1c = firstdata1;
      console.log("shopdata:" + firstdata1);
      fc = firstdata1.indexOf("shopdata");
      console.log("fc:" + fc);
      if (fc == -1) {
        console.log("fc=-1");
        fc3 = firstdata1b.indexOf("news1");
        console.log("fc3:" + fc3);
        if (fc3 >= 0) {
          console.log("fc3");
          console.log("Replace→firstdata1 to news");
          newsins = 'skip';
          mewsjson = JSON.parse(firstdata1);

        } else {
          fc2 = firstdata1c.indexOf("menu1")
          if (fc2 >= 0) {
            console.log("fc2");
            console.log("Replace→firstdata1 to firstdata2");
            firstdata2ins = 'skip';
            firstdata2 = firstdata1;
          }
        }
        if(rc11 > 2){
          var errorlog = [2,"店舗読み込みエラーが発生しました"];
          error_noti(errorlog);
        }
        else if (rc > 2) {
          rc11++;
          rc = 0;
          var errorlog = [1,"読み込みにさらに時間がかかる場合があります"];
          error_noti(errorlog);
          console.log("RELOAD (limit)");
          firstsearch();
        } else {
          var errorlog = [1,"読み込みに時間がかかる場合があります"];
          error_noti(errorlog);
          console.log("RELOAD (other data)");
          firstsearch2();
        }
      } else {
        rc = 0;
        success1 = "ok";
        console.log("firstsearch2 FIN");
        if (request1 == "next") {
          console.log("shopsearchへ優先処理")
          var errorlog = [3];
          error_noti(errorlog);
          shopsearch(firstdata1);
        } else {
          var errorlog = [3];
          error_noti(errorlog);
          firstmenu();
        }
      }
    })
    .catch(error => {
      num = 1;
      //ani();
      //$('#ss').clearQueue();
      //$('#ss').stop();
      //document.getElementById("ss").innerHTML = "search";
      //document.getElementById("s").style.backgroundColor = "#5A3A1A";
      var errorlog = [1,"読み込みに時間がかかる場合があります"];
      error_noti(errorlog);
      console.log("firstsearch2 ERROR");
      console.log(error)
      setTimeout(() => {
        rc = 0;
        console.log("RELOAD (ERROR)");
        firstsearch();
      }, 1000)
    })
}


function firstmenu() {
  if (firstdata2ins == 'skip') {
    console.log("firstmenu SKIP")
    firstmenuc();
  }
  if (request2 == "nomal") {
    console.log("menu priority");
    $("#bar").animate({
      'width': '15vw'
    }, {
      'duration': 500
    })
  }
  console.log("firstmenu START");
  url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  var data = [{
    "branch": "menu"
  }]
  var params = {
    "method": "post",
    "mode": "no-cors",
    "Content-Type": "application/json",
    "body": JSON.stringify(data)
  }
  fetch(url, params);
  console.log("menu POST");
  console.log("firstmenu FIN");
  success2 = "o";
  firstmenu2();
}

rc2 = 0; //リロードのやつ
rc22 = 0 //読み込み中止用のカウンター
function firstmenu2() {
  rc2++;
  if (request2 == "nomal") {
    console.log("menu priority");
    $("#bar").animate({
      'width': '19vw'
    }, {
      'duration': 5000
    })
  }
  console.log("firstmenu2 START");
  fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec', {
    method: "GET",
    mode: "cors"
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(resJson => {
      firstdata2 = resJson;
      firstdata2 = JSON.stringify(firstdata2);
      firstdata2n = firstdata2.indexOf('shop1');
      if (firstdata2n > 0) {
        rc2 = 0;
        console.log("menu:" + firstdata2);
        console.log("firstmenu2 FIN");
        success2 = "ok";
        if (request2 == "nomal") {
          $("#bar").animate({
            'width': '20vw'
          }, {
            'duration': 500
          })
          console.log("menu priority2");
          var errorlog = [3];
          error_noti(errorlog);
          menusearch2(firstdata2);
        } else {
          var errorlog = [3];
          error_noti(errorlog);
          firstmenuc();
        }

      } else {
        if (rc22 > 2) {
          rc22 = 0;
          var errorlog = [2,"商品読み込みエラーが発生しました"];
          error_noti(errorlog);
          console.log("firstmenu2にて読み込み失敗")
          return;
        } else if (rc2 > 2) {
          rc2 = 0;
          rc22++;
          console.log("RELOAD (limit)");
          firstmenu();
        } else {
          //読み込みに時間がかかっているメッセジーの表示処理
          console.log("RELOAD (other data)");
          var errorlog = [1,"読み込みに時間がかかる場合があります"]
          error_noti(errorlog);
          firstmenu2();
        }
      }
    })
    .catch(error => {
      num = 1;
      var errorlog = [2,"商品読み込みエラーが発生しました"];
          error_noti(errorlog);
      console.log("firstmenu2 ERROR")
      console.log(error)
      setTimeout(() => {
        rc2 = 0;
        console.log("RELOAD (ERROR)");
        firstmenu();
      }, 1000)
    })
}
function firstmenuc() {
  document.getElementById("errorm").style.display = "none";
  document.getElementById("errorm").style.opacity = "0";
  document.getElementById("errorm2").style.display = "none";
  document.getElementById("errorm2").style.opacity = "0";
  console.log("firstmenuc START");
  cookie = document.cookie;
  search1 = cookie.indexOf("datafirst1=");
  search2 = cookie.indexOf("datafirst2=");
  search3 = cookie.indexOf("datav=");
  if (search1 != -1 && search2 != -1) {
    data1 = "firstdata1=; max-age=0";
    data2 = "firstdata2=; max-age=0";
    data3 = "datav=; max-age=0";
    document.cookie = data1;
    document.cookie = data2;
    document.cookie = data3;
    console.log("clear firstdatas");
  }
  datafirst1 = "firstdata1=" + firstdata1;
  datafirst2 = "firstdata2=" + firstdata2;
  datav = "datav=" + 0;
  document.cookie = datafirst1;
  document.cookie = datafirst2;
  document.cookie = datav;
  success2 = "ok";
  success1 = "ok";
  console.log("firstmenuc FIN");
  //このあとgasでdatavを作成、取得することコードを記述する。データはdatavに入力すること予定 4月21日
  //document.getElementById("s").style.backgroundColor = "#1E0000";
  document.getElementById("search").style.borderColor = "#411C00";
  document.getElementById("search").style.borderWeight = "2px";
  //document.getElementById("search").placeholder = "finish";
  console.log("wait for instructions");
  //お知らせの処理開始
  firstnews();
  if (request2 == "next") {
    console.log("menusearch2へ優先処理  in menu2")
    menusearch2(resJson);
  }
}

//ロード時に全データ取得のコード　終
shopname = '';
errorcheck = '';
function searching() {
  //9月24日　読み込みバー　
  if (endm == "start") {
    endm = "running";
    console.log("searching START");
    errorcheck = 'none';
    num = 100;
    request3 = '';
    ani();
    document.getElementById("ss").innerHTML = "loading";
    //document.getElementById("s").style.backgroundColor = "#C6AC8F"
    shopname = document.getElementById("search").value;
    if (success1 == "ok") {
      $("#bar").animate({
        'width': 0,
        'opacity': 1
      }, {
        'duration': 0
      })
      $("#bar").animate({
        'width': '5vw'
      }, {
        'duration': 1000
      })
      shopsearch(firstdata1);
      return;
    }
    if (success1 == "o") {
      $("#bar").animate({
        'width': 0,
        'opacity': 1
      }, {
        'duration': 0
      })
      $("#bar").animate({
        'width': '5vw'
      }, {
        'duration': 5000
      })
      console.log("途中からのリクエスト1");
      request1 = "next";
      return; //違う可能性大
    } else {
      /*console.log("menu POST");
      url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
      var data = [{
        "branch": "menu"
      }]
      var params = {
        "method": "post",
        "mode": "no-cors",
        "Content-Type": "application/json",
        "body": JSON.stringify(data)
      }
      fetch(url, params);*/
      console.log("searching FIN");
      //searching2();
    }
  } else {
    console.log("連続クリック");
  }
}
rc4 = 0;
function searching2() {
  rc4++;
  console.log("searching2 START");
  /*fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec', {
    method: "GET",
    moe: "cors"
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(resJson => {
      if (request2 == "next") {
        console.log("menusearch2への優先処理");
        resJson = JSON.stringify(resJson);
        menusearch2(resJson);
      }
     // shopsearch(resJson);
    })
    .catch(error => {
      num = 1;

      console.log("faild searching2");
      alert("faild searching2");
      console.log("firstmenuall() reload")
      order = 0;
      firstmenu();
    })*/
}
num = '';
jjson = '';
function shopsearch(firstdata1) {
  $("#bar").animate({
    'width': '10vw'
  }, {
    'duration': 500
  })
  console.log("shopsearch START");
  //a = "n1";
  jjson = JSON.parse(firstdata1);
  jjson1 = jjson.shopdata;
  if (jjson1) {
    console.log("");
  } else {
    console.log("RELOAD (other data)");
    firstsearch();
  }
  num = jjson.shopdata[0].num;
  num = parseInt(num) + 6;
  console.log("num:" + num);
  for (a = -5; a < num; a += 6) {
    text = "n" + a;
    console.log("text:" + text);
    shopname2 = jjson.shopdata[0][text];
    console.log("shopname2:" + shopname2);
    if (shopname == shopname2) {

      $("#bar").animate({
        'width': '25vw'
      }, {
        'duration': 500
      })
      $("#bar").animate({
        'opacity': 0
      }, {
        'duration': 500
      })

      text2 = "searchnum=" + a + "$";
      shopname2 = encodeURI(shopname2);
      text3 = "searchname=" + shopname2 + "^";
      document.cookie = text2;
      document.cookie = text3;
      document.getElementById("ss").innerHTML = "jumping";
      ttt = '';
      document.cookie = "branch=shop|";
      setTimeout(jump, 1500);
      return;
    }
  }
  if (typeof ttt == 'undefined') {
    /*alert("店舗を発見できません");
    document.getElementById("ss").innerHTML = "search";
    num = 1;
    ani();
    $('#ss').clearQueue();
    $('#ss').stop();
    document.getElementById("s").style.backgroundColor ="#5A3A1A";*/

    if (success2 == "ok") {
      menusearch2(firstdata2);
      return;
    }
    if (success2 == "o") {
      console.log("途中からのリクエスト2");
      request2 = "nomal";
      return;//間違えて可能性大
    } else {
      $("#bar").animate({
        'width': '12.5vw'
      }, {
        'duration': 500
      })
      console.log("menusearch  通常処理")
      request2 = "nomal";
      firstmenu();
    }
  }
  console.log("shopsearch FIN");
}
function jump() {
  endm = "start";
  num = 1;
  ani();
  //document.getElementById("s").style.backgroundColor = "#5A3A1A";
  if (typeof ttt == 'undefined') {
    location.href = "menus.html";
  } else {
    location.href = "menus2.html";
  }

}
function ani() {
  //alert(num);
  for (var a = 0; a < num; a++) {
    $("#ss").animate({
      opacity: 1
    }, {
      'duration': 0
    })
    $("#ss").animate({
      opacity: 0
    }, {
      'duration': 1000
    })
    $("#ss").animate({
      opacity: 1
    }, {
      'duration': 0
    })
  }
  if (num == 1) {
    document.getElementById("ss").style.opacity = "1";
    //document.getElementById("s").style.backgroundColor = "#5A3A1A";
  }

}
//いらないかも
/*function menusearch() {
  console.log("menusearch ok");
  url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  var data = [{
    "branch": "menu"
  }]
  var params = {
    "method": "post",
    "mode": "no-cors",
    "Content-Type": "application/json",
    "body": JSON.stringify(data)
  }
  fetch(url, params);
  setTimeout(menu2, 3000);
}
function menu2() {
  console.log("menu2 ok");
  fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec', {
    method: "GET",
    moe: "cors"
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(resJson => {
      console.log("menusearch2 ok");
      resJson = JSON.stringify(resJson);
      menusearch2(resJson);
    })
    .catch(error => {
      num = 1;
      ani();
      $('#ss').clearQueue();
      $('#ss').stop();
      document.getElementById("ss").innerHTML = "search";
      document.getElementById("s").style.backgroundColor = "#5A3A1A";

      alert("通信失敗2")
    })
}*/


function menusearch2(firstdata2) {
  $("#bar").animate({
    'width': '22.5vw'
  }, {
    'duration': 500
  })
  if (request3 == "end") {
    console.log("end")

  } else {
    jsonnn = firstdata2;
    console.log("JSON文字列↓");
    console.log(jsonnn);
    jsonn = JSON.parse(firstdata2);
    console.log("JS文字列↓");
    console.log(jsonn)
    last = jsonn["last"];
    console.log("last:" + last);
    nummemo = [];
    nummemo = [];
    nummemo2 = [];
    nummemo3 = 0;
    for (var a = 1; a <= last - 6; a += 6) {
      shopp = String("shop" + a);
      shoppi = "\"" + shopp + "\"" + ":";
      if (jsonnn.includes(shopp) === true) {
        menu = jsonn[shopp];
        console.log(menu);
        menulast = menu.length;
        console.log(menulast);
      } else {
        console.log(shopp + ":undefined");
      }
      for (var i = 0; i < menulast; i++) {
        menuname = menu[i];
        if (menuname == shopname) {
          nummemo3++;
          console.log(menuname + "発見");
          i = String(i);
          nummemo2.push(i);
          console.log(nummemo2);
          aa = 'ok';
        }
      }
      if (typeof aa == 'string') {
        nummemo2 = JSON.stringify(nummemo2);
        console.log(nummemo2);
        info = shoppi + nummemo2;
        console.log(info);
        nummemo.push(info);
        nummemo2 = [];
        aa = 0;
        ss = String(a);
      }
    }
    console.log(a)
    if (a >= last && nummemo3 > 0) {
      console.log(nummemo);
      nummemo = nummemo.toString().replace("\'", "");
      nummemo = "{" + nummemo + "," + "\"" + "last" + "\"" + ":" + "[" + "\"" + ss + "\"" + "]" + "}";
      console.log(nummemo);
      console.log(nummemo3 + ":店舗発見")
      num = 1;
      ani();
      $('#ss').clearQueue();
      $('#ss').stop();
      document.getElementById("ss").innerHTML = "search";
      //document.getElementById("s").style.backgroundColor = "#5A3A1A";
      cc = "menumemo=" + nummemo + "-";
      document.cookie = "branch=menu|";
      cookie_menuname = "cookie_menuname=" + encodeURI(shopname) + "-";
      document.cookie = cookie_menuname;
      document.cookie = cc;
      console.log("cc:" + cc);
      document.getElementById("ss").innerHTML = "jumping";
      $("#bar").animate({
        'width': '25vw'
      }, {
        'duration': 500
      })
      $("#bar").animate({
        'opacity': 0
      }, {
        'duration': 500
      })
      setTimeout(jump, 1500)
    } else {
      endm = "start";
      ani();
      $('#ss').clearQueue();
      $('#ss').stop();
      document.getElementById("ss").innerHTML = "search";
      document.getElementById("ss").style.opacity = 1;
      //document.getElementById("s").style.backgroundColor = "#5A3A1A";
      console.log("店舗・商品がありません");
      alert("店舗・商品がありません");
      /*if(request2 == "next"){
      request3 = "end";
      console.log("検索終了");
      end();
      }*/
      $("#bar").animate({
        'opacity': 0
      }, {
        'duration': 100
      })
      if (success2 != "ok") {
        request2 = '';
        console.log("firstmenu()  再トライ")
        firstmenu();
      }
      request3 = "end";
      console.log("検索終了");
      end();
    }
  }
}
function end() {
  console.log("検索 終了");
  const flag = true;

  try {

    if (flag) {
      throw new Error('終了します');
    }
    console.log('実行されないコード');

  } catch (e) {

    console.log(e.message);

  }
}
function カート() {
  location.href = "cart.html";
}
function c11() {
  a = document.getElementById("news").style;

}
wrnumber = "";
newsjson = 0;
//題名と時間だけをとりあえず表示→一番目のお知らせを表示

function firstnews() {
  console.log("firstmews START");
  if (success3 == "ok") {
    cookie = document.cookie;
    data1 = cookie.indexOf("news=");
    data2 = cookie.indexOf(";", data1);
    data = cookie.substring(data1 + 5, data2);
    newsjson = data;
    console.log("skip firstnews");
    firstwrite();
  } else if (newsins == 'skip') {
    console.log("firstmews SKIP");
    firstwrite();
  }
  url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  data = [{
    "branch": "getnews"
  }]
  params = {
    "method": "post",
    "mode": "no-cors",
    "Content-Type": "application/json",
    "body": JSON.stringify(data)
  }
  fetch(url, params)
  console.log("getnews POST");
  console.log("firstnews FIN");
  firstnews2();
}
rc3 = 0;
rc33 = 0;
function firstnews2() {
  rc3++;
  console.log("firstmews2 START");
  url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  fetch(url, {
    "method": "GET",
    "mode": "cors"
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })

    .then(resJson => {
      newsjson = resJson;
      newsjson2 = JSON.stringify(newsjson);
      newsjson2 = newsjson2.indexOf("news1");
      if (newsjson2 > 0) {
        console.log("news:" + newsjson2);
        var errorlog = [3];
        error_noti(errorlog);
      } else {
        if(rc33 > 2){
          var errorlog = [2,"ニュース読み込みエラーが発生しました"];
          error_noti(errorlog);
        }
        else if (rc3 > 2) {
          rc33++;
          rc3 = 0;
          console.log("RELOAD (limit)")
          var errorlog = [1,"読み込みにさらに時間がかかる場合があります"];
          error_noti(errorlog);
          firstnews();
        } else {
          var errorlog = [1,"読み込みに時間がかかる場合があります"];
          error_noti(errorlog);
          console.log("RELOAD (other data)")
          firstnews2();
        }
      }

      var data = document.cookie;
      var ndata1 = data.indexOf("news=");
      if (ndata1 != -1) {
        ndata1 = "news=; max-age=0";
        ndata2 = "newsv=; max-age=0";
        console.log("clear ndata");
      }
      ndata1 = "news=" + newsjson;
      ndata2 = newsjson[0].num;
      ndata2 = "newsv=" + ndata2;
      document.cookie = ndata1;
      document.cookie = ndata2;
      rc3 = 0;
      console.log("firstnews2 FIN");
      firstwrite();
    })
    .catch(error => {
      var errorlog = [1,"読み込みに時間がかかる場合があります"];
      error_noti(errorlog);
      console.log("firstnews2 ERROR");
      console.log(error);
      console.log("RELOAD (ERROR)")
      rc3 = 0;
      setTimeout(() => {
        firstnews();
      }, 1000)
    })

}
wcount = 0;
function firstwrite() {
  wcount++;
  if (wcount == 1) {
    console.log("firstwrite START");
    /*newsjson2 = JSON.stringify(newsjson);
    newsjson2 = newsjson2.indexOf("news1");
    if(newsjson2 >0 ){
  
    }else{
      console.log("firstnews2() →reload firstnewsall()")
      order = 3;
      firstnewsall();
    }*/
    for (var a = 1; a <= 4; a++) {
      console.log("a:" + a);
      data1 = newsjson[0].news1[a];
      data2 = newsjson[0].news2[a];
      console.log("data1:" + data1);
      console.log("data2:" + data2);
      data = "<p onclick=" + "\"" + "newsd1p" + a + "()" + "\"" + "id=" + "\"" + "newsd1p" + a + "\"" + ">" + data1 + "<span id=" + "\"" + "newsd1p" + a + "s" + "\"" + ">" + data2 + "</span></p>";
      setnews.insertAdjacentHTML("beforeend", data);
      console.log("data:" + data);
    }
    document.getElementById("loadnews").style.display = "none";
    console.log("firstwrite FIN");
  }
}
function newsd1p1() {
  num = 1;
  wrnumber = 0;
  for (var a = 1; a <= 4; a++) {
    if (a == num) {
      text = "newsd1p" + a;
      document.getElementById(text).style.backgroundColor = "black";
      document.getElementById(text).style.color = "white";
      document.getElementById(text).style.borderColor = "white";
      document.getElementById(text).style.paddingTop = "3vw";
      document.getElementById(text).style.margin = 0;
      document.getElementById(text).style.fontWeight = 600;
      document.getElementById(text).style.fontSize = "1.5vw";
      document.getElementById(text).style.width = "50vw";
    } else {
      text = "newsd1p" + a;
      document.getElementById(text).style.width = "20vw";
      document.getElementById(text).style.fontSize = "1vw";
      document.getElementById(text).style.marginTop = "3vw";
      document.getElementById(text).style.paddingTop = 0;
      document.getElementById(text).style.backgroundColor = "white";
      document.getElementById(text).style.color = "black"
      document.getElementById(text).style.fontWeight = 400;
      document.getElementById(text).style.borderColor = "black"
    }
  }
  //入力忘れないように
  if (newsjson == 0) {
    //この場合 待ち時間が生じるからその処理を
    url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
    data = [{
      "branch": "getnews"
    }]
    params = {
      "method": "post",
      "mode": "no-cors",
      "Content-Type": "application/json",
      "body": JSON.stringify(data)
    }
    fetch(url, params)
    console.log("newsd1p1 1");
    setTimeout(newsd1p11, 2000);
  } else {
    console.log("newsd1p1 skip");
    wrnews();
  }
}

function newsd1p11() {
  console.log("newsd1p1 11 start");
  url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  fetch(url, {
    "method": "GET",
    "mode": "cors"
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })

    .then(resJson => {
      newsjson = resJson;
      console.log("newsd1p1 11 finish");
      setTimeout(wrnews, 1000);
    })
    .catch(error => {
      alert("Error");
      console.log("newsのエラー");
    })
}

function newsd1p2() {
  num = 2;
  wrnumber = 1;
  for (var a = 1; a <= 4; a++) {
    if (a == num) {
      text = "newsd1p" + a;
      document.getElementById(text).style.backgroundColor = "black";
      document.getElementById(text).style.color = "white";
      document.getElementById(text).style.borderColor = "white";
      document.getElementById(text).style.paddingTop = "3vw";
      document.getElementById(text).style.margin = 0;
      document.getElementById(text).style.fontWeight = 600;
      document.getElementById(text).style.fontSize = "1.5vw";
      document.getElementById(text).style.width = "50vw";
    } else {
      text = "newsd1p" + a;
      document.getElementById(text).style.width = "20vw";
      document.getElementById(text).style.fontSize = "1vw";
      document.getElementById(text).style.marginTop = "3vw";
      document.getElementById(text).style.paddingTop = 0;
      document.getElementById(text).style.backgroundColor = "white";
      document.getElementById(text).style.color = "black"
      document.getElementById(text).style.fontWeight = 400;
      document.getElementById(text).style.borderColor = "black"
    }
  }
  text = "newsd1p" + 1;
  document.getElementById(text).style.width = "20vw";
  document.getElementById(text).style.fontSize = "1vw";
  document.getElementById(text).style.marginTop = "5vw";
  document.getElementById(text).style.paddingTop = "3vw";
  document.getElementById(text).style.backgroundColor = "white";
  document.getElementById(text).style.color = "black"
  document.getElementById(text).style.fontWeight = 400;
  document.getElementById(text).style.borderColor = "black"

  if (newsjson == 0) {
    url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
    data = [{
      "branch": "getnews"
    }]
    params = {
      "method": "post",
      "mode": "no-cors",
      "Content-Type": "application/json",
      "body": JSON.stringify(data)
    }
    fetch(url, params)
    console.log("newsd1p1 1");
    setTimeout(newsd1p22, 2000);
  } else {
    console.log("newsd1p2 skip");
    wrnews();
  }
}
newsjson = "";
function newsd1p22() {
  console.log("newsd1p2 22 start");
  url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  fetch(url, {
    "method": "GET",
    "mode": "cors"
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })

    .then(resJson => {
      newsjson = resJson;
      console.log("newsd1p2 22 finish");
      setTimeout(wrnews, 1000);
    })
    .catch(error => {
      alert("Error");
      console.log("newsのエラー");
    })
}
function newsd1p3() {
  num = 3;
  wrnumber = 2;
  for (var a = 1; a <= 4; a++) {
    if (a == num) {
      text = "newsd1p" + a;
      document.getElementById(text).style.backgroundColor = "black";
      document.getElementById(text).style.color = "white";
      document.getElementById(text).style.borderColor = "white";
      document.getElementById(text).style.paddingTop = "3vw";
      document.getElementById(text).style.margin = 0;
      document.getElementById(text).style.fontWeight = 600;
      document.getElementById(text).style.fontSize = "1.5vw";
      document.getElementById(text).style.width = "50vw";
    } else {
      text = "newsd1p" + a;
      document.getElementById(text).style.width = "20vw";
      document.getElementById(text).style.fontSize = "1vw";
      document.getElementById(text).style.marginTop = "3vw";
      document.getElementById(text).style.paddingTop = 0;
      document.getElementById(text).style.backgroundColor = "white";
      document.getElementById(text).style.color = "black"
      document.getElementById(text).style.fontWeight = 400;
      document.getElementById(text).style.borderColor = "black"
    }
  }
  text = "newsd1p" + 1;
  document.getElementById(text).style.width = "20vw";
  document.getElementById(text).style.fontSize = "1vw";
  document.getElementById(text).style.marginTop = "3vw";
  document.getElementById(text).style.paddingTop = "3vw";
  document.getElementById(text).style.backgroundColor = "white";
  document.getElementById(text).style.color = "black"
  document.getElementById(text).style.fontWeight = 400;
  document.getElementById(text).style.borderColor = "black"

  if (newsjson == 0) {
    url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
    data = [{
      "branch": "getnews"
    }]
    params = {
      "method": "post",
      "mode": "no-cors",
      "Content-Type": "application/json",
      "body": JSON.stringify(data)
    }
    fetch(url, params)
    console.log("newsd1p1 1");
    setTimeout(newsd1p33, 2000);
  } else {
    console.log("newsd1p3 skip");
    wrnews();
  }
}
newsjson = "";
function newsd1p33() {
  console.log("newsd1p3 33 start");
  url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  fetch(url, {
    "method": "GET",
    "mode": "cors"
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })

    .then(resJson => {
      newsjson = resJson;
      console.log("newsd1p3 33 finish");
      setTimeout(wrnews, 1000);
    })
    .catch(error => {
      alert("Error");
      console.log("newsのエラー");
    })
}
function newsd1p4() {
  num = 4;
  wrnumber = 3;
  for (var a = 1; a <= 4; a++) {
    if (a == num) {
      text = "newsd1p" + a;
      document.getElementById(text).style.backgroundColor = "black";
      document.getElementById(text).style.color = "white";
      document.getElementById(text).style.borderColor = "white";
      document.getElementById(text).style.paddingTop = "3vw";
      document.getElementById(text).style.margin = 0;
      document.getElementById(text).style.fontWeight = 600;
      document.getElementById(text).style.fontSize = "1.5vw";
      document.getElementById(text).style.width = "50vw";
    } else {
      text = "newsd1p" + a;
      document.getElementById(text).style.width = "20vw";
      document.getElementById(text).style.fontSize = "1vw";
      document.getElementById(text).style.marginTop = "3vw";
      document.getElementById(text).style.paddingTop = 0;
      document.getElementById(text).style.backgroundColor = "white";
      document.getElementById(text).style.color = "black"
      document.getElementById(text).style.fontWeight = 400;
      document.getElementById(text).style.borderColor = "black"
    }
  }
  text = "newsd1p" + 1;
  document.getElementById(text).style.width = "20vw";
  document.getElementById(text).style.fontSize = "1vw";
  document.getElementById(text).style.marginTop = "3vw";
  document.getElementById(text).style.paddingTop = "3vw";
  document.getElementById(text).style.backgroundColor = "white";
  document.getElementById(text).style.color = "black"
  document.getElementById(text).style.fontWeight = 400;
  document.getElementById(text).style.borderColor = "black";

  if (newsjson == 0) {
    url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
    data = [{
      "branch": "getnews"
    }]
    params = {
      "method": "post",
      "mode": "no-cors",
      "Content-Type": "application/json",
      "body": JSON.stringify(data)
    }
    fetch(url, params)
    console.log("newsd1p4 4");
    setTimeout(newsd1p44, 2000);
  } else {
    console.log("newsd1p4 skip");
    wrnews();
  }
}
newsjson = "";
function newsd1p44() {
  console.log("newsd1p4 44 start");
  url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  fetch(url, {
    "method": "GET",
    "mode": "cors"
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })

    .then(resJson => {
      newsjson = resJson;
      console.log("newsd1p4 44 finish");
      setTimeout(wrnews, 1000);
    })
    .catch(error => {
      alert("Error");
      console.log("newsのエラー");
    })
}
text2 = "すべて見る>"
aaa = 0;
function newsd1s() {
  aaa += 1;
  console.log(a);
  if (aaa < 5) {
    text2 = text2 + ">";
    document.getElementById("newsd1s").innerHTML = text2;
    setTimeout(newsd1s, 250);
  } else {
    location.href = "news.html"
  }

}


function wrnews() {
  console.log(newsjson);
  //data = JSON.parae(newsjson);
  data1 = newsjson[0].news1[wrnumber];
  data2 = newsjson[0].news2[wrnumber];
  data3 = newsjson[0].news3[wrnumber];
  //data = decodeURI(data);
  // 3.10
  //newsd2pre
  document.getElementById("newsd2pre").innerHTML = data3;
}
function c() {
  window.open("control.html");
}
a = 0;
count = 0;
set1 = '';
function ulogin() {
  location.href = "ulogin.html";
}
function allp() {
  location.href = "all.html";
}
function newp() {
  location.href = "new.html";
}
function reload() {
  location.href = "index.html"
}
function error_noti(data){
  var branch = data[0];
  if(branch == 1){
  document.getElementById("errorm").style.display = "block";
  document.getElementById("errorm").style.opacity = "1";
  document.getElementById("errorm2").style.display = "none";
  document.getElementById("errorm2").style.opacity = "0";
  document.getElementById("errorm").innerHTML = data[1];
  }else if(branch == 2){
    document.getElementById("errorm").style.display = "block";
  document.getElementById("errorm").style.opacity = "1";
  document.getElementById("errorm2").style.display = "block";
  document.getElementById("errorm2").style.opacity = "1";
  document.getElementById("errorm").innerHTML = data[1];
  }else{
    document.getElementById("errorm").style.display = "none";
    document.getElementById("errorm").style.opacity = "0";
    document.getElementById("errorm2").style.display = "none";
    document.getElementById("errorm2").style.opacity = "0";
  }
}