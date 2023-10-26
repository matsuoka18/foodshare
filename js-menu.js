

fileName = '';
date_data = [];
f_year = '';
f_month = '';
f_day ='';
f_hour = '';
f_minute ='';
function getdata() {
  
  cookie = document.cookie;
     //cookie = 'branch=menu|; menumemo={"shop1":["4","7","26","29","42","45"],"shop7":["3","9","19","22","41","44","57","60"],"shop13":["9","12","31","34","47","50"],"shop19":["6","9","28","31","44","47"],"shop25":["6","9","28","31","44","47"],"shop31":["6","9","28","31","44","47"],"shop37":["6","9","28","31","44","47"],"shop43":["6","9","28","31","44","47"],"shop49":["6","9","28","31","44","47"],"shop55":["6","9","28","31","44","47"],"shop61":["6","9","28","31","44","47"],"shop67":["6","9","28","31","44","47"],"shop73":["6","9","28","31","44","47"],"shop79":["6","9","28","31","44","47"],"last":["79"]}-; key=カメラ; loginID=%E3%82%BB%E3%83%96%E3%83%B3!; shopnumber=163#; pass=%E3%82%AB%E3%83%A1%E3%83%A9?';
     //cookie = 'firstdata1={"shopdata":[{"n1":"hhh","n7":"abc","n13":"大船中学校","n19":"ばーーか","n25":"TULLYS COFFEE","n31":"ミニストップ","n37":"大戸屋","n43":"apple","n49":"あいうえお","n55":"goon","n61":"ppp","n67":"q","n73":"w","n79":"qw","n85":"八百屋","n91":"松","n97":"はか","n103":"q","n109":"a","n115":"re","n121":"rte","n127":"a","n133":"a","n139":"a","n145":"a","n151":"おおおお","n157":"カメラ","n163":"セブン","n169":"テスト","n175":"テスト3","n181":"テスト4","n187":"むじ","n193":"にお","n199":"アイパッド","n205":"ステップ","n211":"asd","n217":"goon","n223":"コーヒー","n229":"手広","n":"hdf","n235":"kama","n241":"hfsg","num":241}]}; datav=0; news=[object Object]; newsv=undefined; searchnum=1$; searchname=hhh^; branch=shop|; favoritenuml=0>>!; loginID=hhh!; pass=123?; shopnumber=1#'
     loginIDp1 = cookie.indexOf("loginID=") + 8;
     loginIDp2 = cookie.indexOf("!",loginIDp1);
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
     //document.getElementById("nh11").innerHTML = cookie4
     //document.getElementById("chanchan1").innerHTML = cookie4

     var data = new Date();
     f_year = data.getFullYear();
     f_month = data.getMonth()+1;
     f_day = data.getDate();
     f_hour = data.getHours();
     f_minute = data.getMinutes();
     date_data.push(f_year);
     date_data.push(f_month);
     date_data.push(f_day);
     date_data.push(f_hour);
     date_data.push(f_minute);
     console.log(date_data);
     var date1_data = date_data[0]+"-"+date_data[1]+"-"+date_data[2];
     var date1_time = date_data[3]+":"+date_data[4];
     document.getElementById("date1").min = date1_data;
     document.getElementById("date1").value = date1_data;
     document.getElementById("time1").min = date1_time;
     document.getElementById("time1").value = date1_time;
     menuu();
   }
   document.getElementById("date1").addEventListener('blur',date1_change);
   document.getElementById("time1").addEventListener('change',date1_change2);
   function date1_change(){
    date = document.getElementById("date1").value;
    month_data = date.indexOf("-",0);
    month_data2 = date.indexOf("-",month_data+1);
    var year = date.substring(0,month_data);
    var month = date.substring(month_data+1,month_data2);
    var day = date.substring(month_data2+1,);
    if(f_year == year && f_month == month && f_day == day){

    }else{
      document.getElementById("time1").min = "";
    }
   }
   function date1_change2(){
    time = document.getElementById("time1").value;
    hour_data = time.indexOf(":");
    hour = time.substring(0,hour_data);
    minute = time.substring(hour_data+1,);
    date = document.getElementById("date1").value;
    month_data = date.indexOf("-",0);
    month_data2 = date.indexOf("-",month_data+1);
    var year = date.substring(0,month_data);
    var month = date.substring(month_data+1,month_data2);
    var day = date.substring(month_data2+1,);
    if(f_year == year && f_month == month && f_day == day && f_hour > hour){
      document.getElementById("time1").value = '';
      alert("現在時刻よりも後を指定してください");
    }else if(f_year == year && f_month == month && f_day == day && f_hour == hour && f_minute > minute){
      document.getElementById("time1").value = '';
      alert("現在時刻よりも後を指定してください");
    }
   }
 /*  document.getElementById("np1").addEventListener('keyup', change);
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
   }*/
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
     message_write = 'no';

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
     fileName = jj.changedata[0].picture[namee2];
     genre = jj.changedata[0].genre[namee2];
     ne();
   }
   function ne() {
     document.getElementById("change1").value = cookie4;//店舗名
     document.getElementById("change2").value = menu;  //商品名
     document.getElementById("change3").value = fee; //料金
     document.getElementById("change4").value = express; //説明
 
     //document.getElementById("change5").value = fileName;
     document.getElementById("change6.2").innerHTML = genre;
     console.log(menu + fee + express + fileName + genre);
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
 
 
   /*document.getElementById("change2").addEventListener('keyup', datachange);
   document.getElementById("change3").addEventListener('keyup', datachange);
   document.getElementById("change4").addEventListener('keyup', datachange);
   document.getElementById("change5").addEventListener('keyup', datachange);
   document.getElementById("change6").addEventListener('change', datachange);*/
 
   function datachange() {
     document.getElementById("chanchan1").innerHTML = cookie4;
     document.getElementById("chanchan2").innerHTML = document.getElementById("change2").value;
     document.getElementById("chanchan3").innerHTML = document.getElementById("change3").value;
     document.getElementById("chanchan4").innerHTML = document.getElementById("change4").value;
     document.getElementById("pic").innerHTML = document.getElementById("cahnge5").value;
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

accessToken='';
    document.getElementById("example").addEventListener('change', write);
    document.getElementById("change5").addEventListener('change', write);
    message_write = 'no';
    function write() {
      message_write = 'yes';
        alert("File is ready");
        url="https://script.google.com/macros/s/AKfycbxR-5U9ojyWM_CgWc9Icog8rFwkDD_LMlbznk-62mtmszRTXz3qrxH5cdCq1elu2R01/exec";
    fetch(url,{
        "method":"GET",
        "mode":"cors"
        })
        .then(response =>{
          if(response.ok){
            return response.json();
            }
          })
          .then(resJson =>{
              accessToken = resJson[0];
    })
                }

    
    async function uploadImage() {
        alert("File is uploading...")
        alert("Please wait until the message is displayed again")
        const fileInput = document.getElementById('example');
        const file = fileInput.files[0];
    
        if (!file) {
            alert('画像ファイルを選択してください');
            return;
        }
    
        const reader = new FileReader();
        reader.onload = async function (event) {
            const imageData = event.target.result;
            fileName = file.name;
    
            const uploadUrl = `https://api.github.com/repos/matsuoka18/foodshare-pictures/contents/${fileName}`;
            
            //最新コード8月15日
            const uploadData = {
                message: '画像のアップロード',
                content: imageData.split(',')[1],
            };
    
            try {
                const response = await fetch(uploadUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`,
                    },
                    body: JSON.stringify(uploadData),
                });
    
                if (response.ok) {
                    alert('File is Uploaded');
                    if(message2 == "send"){
                    send2();
                    }else{
                     change122();
                    }
                } else {
                    alert('Faild...');
                    d = confirm("upload by other means");
                    if(d){
                        
    location.href="https://drive.google.com/drive/mobile/folders/1zVciCLQCF1Zr6pDqftL0b818vRcbk8HR?usp=drive_link&sort=13&direction=a"
                    }
                }
            } catch (error) {
                console.error('ネットワークエラー:', error);
            }
        };
    
        reader.readAsDataURL(file);
    }


month ='';
day = '';
hour = '';
minute = '';
   function sen() {
     alert(document.getElementById("jan").value);
   }
   //画像処理ここまで
   //送信処理
   message2 = "send";
   function send(){
    shop = cookie4;
    menu = document.getElementById("np1").value;
    fee = document.getElementById("np11").value;
    express = document.getElementById("np111").value;
    janru = document.getElementById("jann").value;
    date = document.getElementById("date1").value;
    time = document.getElementById("time1").value;
    month_data = date.indexOf("-",0);
    month_data2 = date.indexOf("-",month_data+1);
    month = date.substring(month_data+1,month_data2);
    day = date.substring(month_data2+1,);
    hour_data = time.indexOf(":");
    hour = time.substring(0,hour_data);
    minute = time.substring(hour_data+1,)
    console.log(date);
    console.log(time);
    console.log(month);
    console.log(day);
    console.log(hour);
    console.log(minute);
if(menu.length > 0 && fee.length > 0 && express.length > 0 && janru.length > 0 ){

    uploadImage();
}else{
  alert("未記入欄があります")
}
   }
   function send2() {
    //日付の追加処理を書くこと 10/26
console.log("fileName:"+fileName);
console.log("send2 START");
     shop = cookie4;
     menu = document.getElementById("np1").value;
     fee = document.getElementById("np11").value;
     express = document.getElementById("np111").value;
     janru = document.getElementById("jann").value;
if(menu.length > 0 && fee.length > 0 && express.length > 0 && janru.length > 0 ){
     url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
     var data = [{
       "name": shop,
       "name1": menu,
       "name2": fee,
       "name3": express,
       "name4": "追加",
       "name5": shopID,
       "name8": janru,
       "name9": fileName
     }]
     var params = {
       "method": "post",
       "mode": "no-cors",
       "Content-Type": "application/json",
       "body": JSON.stringify(data)
     }
     fetch(url, params)
fileName = '';
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
    }else{
      alert("未記入欄があります");
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
function change12(){
  if(message_write == 'yes'){
  message2 = "change";
  uploadImage();
  }else{
    change122();
  }
}
   function change122() {
     namee2 = namee2 + 2;
 
      
     lmenu= document.getElementById("change2").value; 
     lfee = document.getElementById("change3").value; 
     lexpress = document.getElementById("change4").value;  
     lgenre = document.getElementById("change6").value;
   
     var url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
     var data = [{
       "name": shopID,
       "name1": lmenu,
       "name2": lfee,
       "name3": lexpress,
       "name4": "商品関係編集",
       "name5": shopID,
       "name8": lgenre,
       'name9':fileName,
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
     data = "<button class=" + "\"" + "guidb" + "\"" + " onclick=" + "\"" + "guid2()" + "\"" + ">ガイドを見る</button>"
     guid.insertAdjacentHTML('beforeend', data);
   }
   function guid2() {
     window.open("guid.html");
   }