function start(){
//data = 'menumemo={"shop1":["5","52","54"],"last":["1"]}-; searchnum=31$; searchname=%E3%83%9F%E3%83%8B%E3%82%B9%E3%83%88%E3%83%83%E3%83%97^; branch=shop|; shopcart=ミニストップ@>; cart0=hello>0; cart1=hello>1; cart2=hello>2; cart3=hello>3; cart4=hello>4; cart5=hello>5; cart6=hello>6; cart7=hello>7; cart8=hello>8; cart9=hello>9; cart10=hello>10; cookienum=11>>?';
data = document.cookie;
console.log(data);
num1 = data.indexOf("cookienum=");
num2 = data.indexOf(">>?");
cookienum = data.substring(num1+10,num2);
cookienum  = parseInt(cookienum);
console.log("cookienum："+cookienum);
data2 = [];
for(var a = 0; a<cookienum; a++){
    text = "cart"+a+"=";
    text2 = ">"+a;
    num3 = data.indexOf(text);
    num4 = data.indexOf(text2);
    textlen = text.length;
    cart = data.substring(num3+textlen,num4);
    data2.push(cart);
}
console.log(data2);
}
function cart2(){
    for(var a = 0; a<cookienum; a++){
        text = "cart"+a+"=;"+"max-age=0";
document.cookie = text;
    }
console.log("cookie削除完了")
}
