key = '';
function entry(){
    text = document.cookie;
    alert(text);
      /*          text = text.replace(/={/g,"\""+":"+"{");
    text = text.replace(/-; /g,","+"\"");
    text = text.replace(/=/g,"\""+":"+"\"");
    text = text.replace(/; /g,"\""+","+"\"");
    alert(text);
text2 = "{"+"\""+text+"\""+"}";
    alert(text2);
console.log(text2);
text2 = JSON.parse(text2);
console.log(text2);
    alert(text2);
    text2 = text2.replace(/}-"}/g,"}"+"}");
    alert(text2);
key = text2.key;*/
    text1 = text.indexOf("key=")+4;
    text2 = text.indexOf("><");
    key = text.substring(text1,text2);
    key = decodeURI(key);
console.log(key);
    alert(key);
data = "<h2>"+key+"様"+"</h2>";
namee.insertAdjacentHTML("beforeend",data);
}

to = '';
city = '';
ku = '';
ad = '';
po = '';
phone = '';
introduce = '';
time = '';
adress = '';
function first() {
    to = document.getElementById("todouhu").value;
    city = document.getElementById("city").value;
    ku = document.getElementById("ku").value;
    ad = document.getElementById("ad").value;
    po = document.getElementById("po").value;
    phone = document.getElementById("phone").value;
    if(city.length == 0){
        city = "**";
    }
    if(ku.length == 0){
        ku = "**";
    }
    if(to.length == 0 || city.length == 0 || ku.length ==0 || ad.length == 0 || po.length == 0 || phone.length == 0){
        alert("未記入欄があります");
        return;
    }
    document.getElementById("todouhu2").value = to;
    document.getElementById("city2").value = city;
    document.getElementById("ku2").value = ku;
    document.getElementById("ad2").value = ad;
    document.getElementById("po2").value = po;
    document.getElementById("phone2").value = phone;
    document.getElementById("form").style.display = "none";
    document.getElementById("form").style.opacity = "0";
    document.getElementById("formm").style.opacity = "1";
    window.scrollTo(0,0);
}

function second() {
    document.getElementById("formm").style.opacity = "0";
    document.getElementById("formm").style.display = "none";
    document.getElementById("all2").style.opacity = "1";
    window.scrollTo(0,0);
}
function second2(){
    document.getElementById("form").style.display = "block";
    document.getElementById("form").style.opacity = "1";
    document.getElementById("formm").style.opacity = "0";
    window.scrollTo(0,0);
}
function third() {
    introduce = document.getElementById("introduce").value;
    time = document.getElementById("time").value;
    genru = document.getElementById("name2").value;
    document.getElementById("all2").style.display = "none";
    document.getElementById("all2").style.opacity = "0";

        window.scrollTo(0,0);
}
function third2(){

    document.getElementById("all2").style.opacity = "0";
    document.getElementById("all2").style.display = "none";
        document.getElementById("formm").style.opacity = "1";
    document.getElementById("formm").style.display = "block";
        window.scrollTo(0,0);
}
function fifth(){
    document.getElementById("all3").style.display = "block";
    document.getElementById("all3").style.opacity = "1";
        document.getElementById("all4").style.display = "none";
    document.getElementById("all4").style.opacity = "0";
    adress = to + city + ku + ad;
    document.getElementById("p11").innerHTML = adress;
    document.getElementById("p22").innerHTML = phone;
    document.getElementById("p33").innerHTML = po;
    document.getElementById("p44").innerHTML = introduce;
    document.getElementById("p55").innerHTML = time;
    document.getElementById("p66").innerHTML = genru;
    document.getElementById("sendpic").src = fileName;
    window.scrollTo(0,0);
}
function fifth2(){
       document.getElementById("all2").style.display = "block";
    document.getElementById("all2").style.opacity = "1";
     document.getElementById("all4").style.display = "none";
    document.getElementById("all4").style.opacity = "0";
    window.scrollTo(0,0);
}
function fourth() {
    url = "https://script.google.com/macros/s/AKfycbwBH_VrPaXcJg8HOXfoWHJY8f0Ir3935fqlJlURpyAkd8IdEQ/exec";
data = [{
"name":key,
"pre":to,
"city":city,
"ku":ku,
"ad":ad,
"po":po,
"phone":phone,
"intr":introduce,
"time":time,
"genru":genru,
"pic":fileName,
"branch":"shopmake"
}]
params = {
"method":"post",
"mode":"no-cors",
"Content-Type":"application/json",
"body":JSON.stringify(data)
}
console.log(JSON.stringify(data));
fetch(url,params)
location.href = "login.html";
alert("登録完了");
}
function fourth2(){
    document.getElementById("all2").style.opacity = "1";
    document.getElementById("all2").style.display = "block";
    document.getElementById("all3").style.opacity = "0";
    window.scrollTo(0,0);
}
accessToken='';
//ここのidのとこはhtmlのidに合わせること　9月13日
    document.getElementById("example").addEventListener('change', write);
    function write() {
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

    fileName = '';
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
                    send2();
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
