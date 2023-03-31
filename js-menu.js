function getdata() {
 cookie = document.cookie;
    //cookie = 'branch=menu|; menumemo={"shop1":["4","7","26","29","42","45"],"shop7":["3","9","19","22","41","44","57","60"],"shop13":["9","12","31","34","47","50"],"shop19":["6","9","28","31","44","47"],"shop25":["6","9","28","31","44","47"],"shop31":["6","9","28","31","44","47"],"shop37":["6","9","28","31","44","47"],"shop43":["6","9","28","31","44","47"],"shop49":["6","9","28","31","44","47"],"shop55":["6","9","28","31","44","47"],"shop61":["6","9","28","31","44","47"],"shop67":["6","9","28","31","44","47"],"shop73":["6","9","28","31","44","47"],"shop79":["6","9","28","31","44","47"],"last":["79"]}-; key=カメラ; loginID=%E3%82%BB%E3%83%96%E3%83%B3!; shopnumber=163#; pass=%E3%82%AB%E3%83%A1%E3%83%A9?';
    loginIDp1 = cookie.indexOf("loginID=") + 8;
    loginIDp2 = cookie.indexOf("!");
    passp1 = cookie.indexOf("pass=") + 5;
    passp2 = cookie.indexOf("?");
    shopnumberp1 = cookie.indexOf("shopnumber=") + 11;
    shopnumberp2 = cookie.indexOf("#");
    cookie4 = cookie.substring(loginIDp1, loginIDp2);//loginID
    cookie6 = cookie.substring(passp1, passp2);//pass
    shopID = cookie.substring(shopnumberp1, shopnumberp2);//shopID
    console.log(shopID);
    cookie4 = decodeURI(cookie4);
    //cookie4 = "hhh";
    //shopID = 1;
    document.getElementById("change1").value = cookie4;
    document.getElementById("nh1").value = cookie4;
    document.getElementById("nh11").innerHTML = cookie4
    document.getElementById("chanchan1").innerHTML = cookie4
    menuu();
  }
  document.getElementById("np1").addEventListener('keyup', change);
  document.getElementById("np11").addEventListener('keyup', change);
  document.getElementById("np111").addEventListener('keyup', change);
  document.getElementById("jann").addEventListener('change', change);
  //nh1はクッキーから取得してくい本固定
  function change() {
    form = document.example2.example3;
    formn = form.selectedIndex + 1;
    //shop = document.getElementById("shopname").value;
    menu = document.getElementById("np1").value;
    fee = document.getElementById("np11").value;
    express = document.getElementById("np111").value;
    janru = document.getElementById("jann").value;
    document.getElementById("nh11").innerHTML = cookie4;//店舗名
    document.getElementById("np1_1").innerHTML = menu;
    document.getElementById("np2_2").innerHTML = fee;
    document.getElementById("np3_3").innerHTML = express;
    document.getElementById("np4_4").innerHTML = document.getElementById("jann").value;
  }
  //cookieから来る予定の情報たちの仮入力
  //プレビューと商品の変数追加
  //店舗名の変更
  //document.getElementById("shopchange").addEventListener('keyup',shopcha);
  function shopcha() {
    shop = document.getElementById("shopchange").value;
    document.getElementById("shopchange2").innerHTML = "変更する店舗名" + shop;
  }
  //商品の編集
  function menuu() {
    //name4/name5
    var url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
    var data = [{
      "name4": "商品編集",
      "name5": shopID,
      "branch": "changedata"
    }]
    var params = {
      "method": "post",
      "mode": "no-cors",
      "Content-Type": "application/json",
      "body": JSON.stringify(data)
    }
    fetch(url, params);
    document.getElementById("loda").innerHTML = "loading";
    setTimeout(n, 2000);
  }
  firsttime = '';
  function n() {
    fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec', {
      method: "GET",
      mode: "cors"
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        // 404 や 500 ステータスならここに到達する
        throw new Error('Network response was not ok.');
      })
      .then(resJson => {
        jj = resJson;
        console.log(jj);
        if (jj[0] == "error") {
          firsttime = '1';
          document.getElementById("loda").innerHTML = "";
          newshop();
        }
        jjj = resJson.changedata[0].last;
        console.log(jjj);
        i = 0;
        ii = 0;
        q = 0;
        i4 = 0;
        p1 = 0;
        document.getElementById("loda").innerHTML = "";
        if (typeof rel1 == "string" && jjj > rel1) {
          a = 0;
          document.getElementById("商品button").innerHTML = "追加する";
          alert("完了");
        }
        else if (typeof rel2 == "string" && jjj < rel2) {
          a = 0;
          document.getElementById("bt2").innerHTML = "削除";
          alert("完了");
        }
        else if (typeof rel3 == "string" && jjj == rel3) {
          a = 0;
          document.getElementById("change12").innerHTML = "変更";
          alert("完了");
        }

        if (jjj > 10) {
          i2 = 1;
          p1 = 0;
          n2();
        } else {
          p1 = 0;
          i2 = 0;
          //document.getElementById("ii3").style.visibility = "hidden";
          n2();
        }
      })
      .catch(error => {
        // ネットワークエラーの場合はここに到達する
        console.error(error);
      })
  }
  function ki2() {
    u = 0;
    p1 = 0;
    u4 = 0;
    ki();
  }
  document.getElementById("name").addEventListener('change', aaa);
  function aaa() {
    namee = document.fo.name2;
    namee2 = namee.selectedIndex;
    if (namee2 == 0) {
      return;
    } else {
      namee2 = i4 + namee2 - 1;
      console.log(namee2);
    }
    menu = jj.changedata[0].name[namee2];
    fee = jj.changedata[0].fee[namee2];
    express = jj.changedata[0].express[namee2];
    pic = jj.changedata[0].base64[namee2];
    genre = jj.changedata[0].genre[namee2];
    ne();
  }
  function ne() {
    document.getElementById("change1").value = cookie4;//店舗名
    document.getElementById("change2").value = menu;  //商品名
    document.getElementById("change3").value = fee; //料金
    document.getElementById("change4").value = express; //説明

    //document.getElementById("change5").value = pic;
    document.getElementById("change6.2").innerHTML = genre;
    console.log(menu + fee + express + pic + genre);
  }
  ii = 0;

  function n2() {

    if (i == 0 && q < jjj) {
      document.getElementById("na1").innerHTML = jj.changedata[0].name[q];
      document.getElementById("na11").innerHTML = jj.changedata[0].name[q];
      i++;
      q++;
      n2();
    }
    else if (i == 1 && q < jjj) {
      document.getElementById("na2").innerHTML = jj.changedata[0].name[q];
      document.getElementById("na22").innerHTML = jj.changedata[0].name[q];
      i++;
      q++;
      n2();
    }
    else if (i == 2 && q < jjj) {
      document.getElementById("na3").innerHTML = jj.changedata[0].name[q];
      document.getElementById("na33").innerHTML = jj.changedata[0].name[q];
      i++; q++;
      n2();
    }
    else if (i == 3 && q < jjj) {
      document.getElementById("na4").innerHTML = jj.changedata[0].name[q];
      document.getElementById("na44").innerHTML = jj.changedata[0].name[q];
      i++; q++;
      n2();
    }
    else if (i == 4 && q < jjj) {
      document.getElementById("na5").innerHTML = jj.changedata[0].name[q];
      document.getElementById("na55").innerHTML = jj.changedata[0].name[q];
      i++; q++;
      n2();
    }
    else if (i == 5 && q < jjj) {
      document.getElementById("na6").innerHTML = jj.changedata[0].name[q];
      document.getElementById("na66").innerHTML = jj.changedata[0].name[q];
      i++; q++;
      n2();
    }
    else if (i == 6 && q < jjj) {
      document.getElementById("na7").innerHTML = jj.changedata[0].name[q];
      document.getElementById("na77").innerHTML = jj.changedata[0].name[q];
      i++; q++;
      n2();
    }
    else if (i == 7 && q < jjj) {
      document.getElementById("na8").innerHTML = jj.changedata[0].name[q];
      document.getElementById("na88").innerHTML = jj.changedata[0].name[q];
      i++; q++;
      n2();
    }
    else if (i == 8 && q < jjj) {
      document.getElementById("na9").innerHTML = jj.changedata[0].name[q];
      document.getElementById("na99").innerHTML = jj.changedata[0].name[q];
      i++; q++;
      n2();
    }
    else if (i == 9 && q < jjj) {
      document.getElementById("na10").innerHTML = jj.changedata[0].name[q];
      document.getElementById("na1010").innerHTML = jj.changedata[0].name[q];
      i++; q++;
      n2();
    }
  }
  function i3() {
    jjj2 = Math.floor(jjj / 10) * 10;
    console.log(q);
    i = 0;
    ii++;
    i4 = ii * 10;
    q = ii * 10;
    if (jjj2 < q) {
      alert("最後のページです");
      i = 0;
      ii--;
      i4 = ii * 10;
      q = ii * 10;
    } else {
      document.getElementById("na1").innerHTML = "";
      document.getElementById("na2").innerHTML = "";
      document.getElementById("na3").innerHTML = "";
      document.getElementById("na4").innerHTML = "";
      document.getElementById("na5").innerHTML = "";
      document.getElementById("na6").innerHTML = "";
      document.getElementById("na7").innerHTML = "";
      document.getElementById("na8").innerHTML = "";
      document.getElementById("na9").innerHTML = "";
      document.getElementById("na10").innerHTML = "";
      document.getElementById("na11").innerHTML = "";
      document.getElementById("na22").innerHTML = "";
      document.getElementById("na33").innerHTML = "";
      document.getElementById("na44").innerHTML = "";
      document.getElementById("na55").innerHTML = "";
      document.getElementById("na66").innerHTML = "";
      document.getElementById("na77").innerHTML = "";
      document.getElementById("na88").innerHTML = "";
      document.getElementById("na99").innerHTML = "";
      document.getElementById("na1010").innerHTML = "";
      n2();
    }
  }
  function i32() {
    i = 0;
    ii--;
    i4 = ii * 10;
    q = ii * 10;
    if (q < 0) {
      alert("エラー");
      i = 0;
      ii++;
      i4 = ii * 10;
      q = ii * 10;
    } else {
      document.getElementById("na1").innerHTML = "";
      document.getElementById("na2").innerHTML = "";
      document.getElementById("na3").innerHTML = "";
      document.getElementById("na4").innerHTML = "";
      document.getElementById("na5").innerHTML = "";
      document.getElementById("na6").innerHTML = "";
      document.getElementById("na7").innerHTML = "";
      document.getElementById("na8").innerHTML = "";
      document.getElementById("na9").innerHTML = "";
      document.getElementById("na10").innerHTML = "";
      document.getElementById("na11").innerHTML = "";
      document.getElementById("na22").innerHTML = "";
      document.getElementById("na33").innerHTML = "";
      document.getElementById("na44").innerHTML = "";
      document.getElementById("na55").innerHTML = "";
      document.getElementById("na66").innerHTML = "";
      document.getElementById("na77").innerHTML = "";
      document.getElementById("na88").innerHTML = "";
      document.getElementById("na99").innerHTML = "";
      document.getElementById("na1010").innerHTML = "";
      n2();
    }
  }
  function kill() {
    killnum = document.fo3.name3;
    killnum2 = killnum.selectedIndex;
    console.log(killnum2);
    if (killnum2 == 0) {
      return;
    } else {
      killnumber = i4 + killnum2 + 1;
      console.log(killnumber);
      var url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
      var data = [{
        "name4": "商品削除",
        "name5": shopID,
        "name10": killnumber
      }]
      var params = {
        "method": "post",
        "mode": "no-cors",
        "Content-Type": "application/json",
        "body": JSON.stringify(data)
      }
      fetch(url, params);
      rel2 = jjj;
      fetch('https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec', {
        method: "GET",
        mode: "cors"
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          // 404 や 500 ステータスならここに到達する
          throw new Error('Network response was not ok.');
        })
        .then(resJson => {
          console.log(resJson);
        })
        .catch(error => {
          // ネットワークエラーの場合はここに到達する
          console.error(error);
        })
      a = 10000;
      ai = 1;
      aniname = "bt2";
      ani();
      menuu();
    }
  }
  /*
  var url="https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
  var data = [{
    "name4":"商品削除",
    "name5":shopID,
    "name10":killnumber
  }]
  var params = {
  "method":"post",
  "mode":"no-cors",
  "Content-Type":"application/json",
  "body":JSON.stringify(data)
  }
  fetch(url,params)
  menuu();*/


  document.getElementById("change2").addEventListener('keyup', datachange);
  document.getElementById("change3").addEventListener('keyup', datachange);
  document.getElementById("change4").addEventListener('keyup', datachange);
  document.getElementById("change5").addEventListener('keyup', datachange);
  document.getElementById("change6").addEventListener('change', datachange);

  function datachange() {
    document.getElementById("chanchan1").innerHTML = cookie4;
    document.getElementById("chanchan2").innerHTML = document.getElementById("change2").value;
    document.getElementById("chanchan3").innerHTML = document.getElementById("change3").value;
    document.getElementById("chanchan4").innerHTML = document.getElementById("change4").value;
    //document.getElementById("pic").innerHTML = document.getElementById("cahnge5").value;
    form = document.fo2.example;
    form2 = form.selectedIndex;
    console.log(form2);
    if (form2 == 0) {
      document.getElementById("chanchan5").innerHTML = genre;
      lgenre = genre;
    } else {
      document.getElementById("chanchan5").innerHTML = document.getElementById("change6").value;
      lgenre = document.getElementById("change6").value;
    }
    lmenu = document.getElementById("change2").value;
    lfee = document.getElementById("change3").value;
    lexpress = document.getElementById("change4").value;
  }
document.getElementById("example").addEventListener('change',fileload);
function fileload(){
  var img = document.getElementById("example");
  var file = img.files[0];

  var reader = new FileReader();
  reader.onload = (event) =>{
    base64text = event.currentTarget.result;
    base64last = base64text.length;
    ba64n = parseInt(base64last/8192+1);//送信回数
    alert(ba64n);
    st1 = 0;
    st2 = 8192;
    sendtext = [];
    for(var a=0; a<ba64n; a++){
     st  = base64text.substring(st1,st2);
     console.log(st);
     st1+=8192;
     st2+=8192;
     sendtext.push(st);
    }
    console.log("base64 load fin...");
    console.log("base64text:"+base64text);

    console.log("base64Last:"+base64last);
    console.log("base64:"+sendtext);

  }
  reader.readAsDataURL(file)
}
  function sen() {
    alert(document.getElementById("jan").value);
  }
  //画像処理ここまで
  //送信処理
  function send() {
    shop = cookie4;
    url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
    var data = [{
      "name": shop,
      "name1": menu,
      "name2": fee,
      "name3": express,
      "name4": "追加",
      "name5": shopID,
      "name8": janru,
      "name9": base64text
    }]
    var params = {
      "method": "post",
      "mode": "no-cors",
      "Content-Type": "application/json",
      "body": JSON.stringify(data)
    }
    fetch(url, params)


    

    
    //画像の送信動作を作る→
    if (firsttime == '1') {
      alert("初出品完了");
      location.href = "menu.html";
    }
    rel1 = jjj;
    a = 10000;
    ai = 1;
    aniname = "商品button";
    ani();
    
    aa=0;
    setTimeout(send2,2000);
  }

  function send2(){
  if(aa <= sendtext.length/4){
      data = [{
        "name":shop,
        "name1":menu,
        "name4":"画像追加",
        "name5":shopID,
        "name9":sendtext[aa-1],
        "namenumber":aa
        //なにか情報が入る可能性大
      }]
     params2 = {
        "method":"post",
        "mode":"no-cors",
        "Content-Type":"application/json",
        "body":JSON.stringify(data)
      }

      console.log("base64 send"+aa+"/"+sendtext.length);
      fetch(url,params2);
      setTimeout(send2,500);
      aa++;
    }else if(sendtext.length/4 < aa && aa<= sendtext.length ){
      data = [{
        "name":shop,
        "name1":menu,
        "name4":"画像追加",
        "name5":shopID,
        "name9":sendtext[aa-1],
        "namenumber":aa
        //なにか情報が入る可能性大
      }]
     params2 = {
        "method":"post",
        "mode":"no-cors",
        "Content-Type":"application/json",
        "body":JSON.stringify(data)
      }

      console.log("base64 send"+aa+"/"+sendtext.length);
      fetch(url,params2);
      setTimeout(send2,100);
aa++;
    }else if(sendtext.length == aa){
      console.log(data);
      menuu();
      console.log("base64 send finish");
    }
  }
    
  
  function ani() {
    if (a > 0 && ai == 1) {
      a--;
      ai++;
      document.getElementById(aniname).innerHTML = "Loading";
      setTimeout(ani, 500);
    }
    else if (a > 0 && ai == 2) {
      a--;
      ai++;
      document.getElementById(aniname).innerHTML = "Loading.";
      setTimeout(ani, 500);
    }
    else if (a > 0 && ai == 3) {
      a--;
      ai++;
      document.getElementById(aniname).innerHTML = "Loading..";
      setTimeout(ani, 500);
    }
    else if (a > 0 && ai == 4) {
      a--;
      ai = 1;
      document.getElementById(aniname).innerHTML = "Loading...";
      setTimeout(ani, 500);
    }
    else if (a == 0) {
      return;
    }
  }
  //送信処理ここまで
  function shop123() {
    shop12 = document.getElementById("shopchange").value;
    console.log(shop12);
    var url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
    var data = [{
      "name": shop12,
      "name4": "店舗名編集",
      "name5": shopID
    }]
    var params = {
      "method": "post",
      "mode": "no-cors",
      "Content-Type": "application/json",
      "body": JSON.stringify(data)
    }
    fetch(url, params)
    menuu();
  }
  function change12() {
    namee2 = namee2 + 2;

    var url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
    var data = [{
      "name": shopID,
      "name1": lmenu,
      "name2": lfee,
      "name3": lexpress,
      "name4": "商品関係編集",
      "name5": shopID,
      "name8": lgenre,
      "name10": namee2
    }]
    var params = {
      "method": "post",
      "mode": "no-cors",
      "Content-Type": "application/json",
      "body": JSON.stringify(data)
    }
    console.log(data);
    fetch(url, params)
    a = 10000;
    ai = 1;
    aniname = "change12";
    rel3 = jjj;
    ani();
    menuu();
  }
  //alert design
  angular.module('ionicApp', ['ionic'])

    .controller('PlaylistsCtrl', function ($scope, $ionicPopup, $timeout) {
      $scope.data = {}

      // Triggered on a button click, or some other target
      $scope.showPopup = function () {
        var alertPopup = $ionicPopup.alert({
          title: 'Dont eat that!',
          template: 'It might taste good'
        });
        alertPopup.then(function (res) {
          console.log('Thank you for not eating my delicious ice cream cone');
        });
      };
    });
  function newshop() {
    document.getElementById("new").style.opacity = "0";
    document.getElementById("new").style.display = "none";
    data = "<button class=" + "\"" + "商品button" + "\"" + " onclick=" + "\"" + "guid2()" + "\"" + ">ガイドを見る</button>"
    guid.insertAdjacentHTML('beforeend', data);
  }
  function guid2() {
    window.open("guid.html");
  }