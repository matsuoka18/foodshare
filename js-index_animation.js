sum =0;
count = 0;
a = 0;
function pic() {
  sum++;
  console.log(sum)
  if(sum > 50){
    location.href = "index.html"
  }
    count++;
    //console.log("c:"+count)
    if (a == 0) {
      a = 1;
      document.getElementById("img").src = "food.jpeg";
      document.getElementById("img2").src = "IMG_0064.JPG";
    } else {
      a = 0;
      document.getElementById("img2").src = "food.jpeg";
      document.getElementById("img").src = "IMG_0064.JPG";
    }

  
    $("#im2").animate({
      "left":'50vw',
      "top": '5vw',
      'opacity':1
    }, {
      'duration': 0
    })
    $("#im1").animate({
      'left': '112.5vw',
      'top': '5vw',
      'opacity':0.5
    }, {
      'duration': 0
    })
    $("#im2").animate({
      "left":'50vw',
      "top": '5vw',
      'opacity':1
    }, {
      'duration': 2500
    })
    $("#im1").animate({
      "left":'50vw',
      "top": '2.5vw',
      'opacity':0.5
    }, {
      'duration': 2500
    })


    
    //clearInterval(set1);
    //set1 = setInterval(pic, 5100);
    setTimeout(pic2,3000)
  }
  function pic2(){

    $("#im2").animate({
      'left': '110vw',
      'top': '5vw',
      'opacity':0.5
    }, {
      'duration': 2500
    })
    $("#im1").animate({
      "left":'52.5vw',
      "top": '5vw',
      'opacity':1
    }, {
      'duration': 2500
    })
    setTimeout(pic,2600)
  }