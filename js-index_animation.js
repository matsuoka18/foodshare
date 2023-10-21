sum =0;
function pic() {
  sum++;
  console.log(sum)
  if(sum > 150){
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
      "top": '12.5vw',
      'opacity':1
    }, {
      'duration': 0
    })
    $("#im1").animate({
      'left': '112.5vw',
      'top': '12.5vw',
      'opacity':0.5
    }, {
      'duration': 0
    })
    $("#im2").animate({
      "left":'50vw',
      "top": '12.5vw',
      'opacity':1
    }, {
      'duration': 2000
    })
    $("#im1").animate({
      "left":'50vw',
      "top": '10vw',
      'opacity':0.5
    }, {
      'duration': 2000
    })
    $("#im2").animate({
      'left': '110vw',
      'top': '12.5vw',
      'opacity':0.5
    }, {
      'duration': 2000
    })
    $("#im1").animate({
      "left":'52.5vw',
      "top": '12.5vw',
      'opacity':1
    }, {
      'duration': 2000
    })
    
    clearInterval(set1);
    set1 = setInterval(pic, 4100);
  }
  function pic3() {
    document.getElementById("img2").src = "food.jpeg";
    document.getElementById("img").src = "IMG_0064.JPG";
    $("#img").animate({
      "width": '90vw',
          "height": '50vw',
      "left": 0,
      "top": 0
    }, {
      'duration': 0
    })
    $("#im2").animate({
      "opacity": 1
    }, {
      'duration': 0
    })
    $("#img2").animate({
      'left': '90vw',
      'top': '2.5vw'
    }, {
      'duration': 0
    })
    $("#im1").animate({
      "opacity": 0.5
    }, {
      'duration': 0
    })
  
    $("#img").animate({
      "width": '90vw',
          "height": '50vw',
      "left": 0,
      "top": 0
    }, {
      'duration': 4000
    })
    $("#im2").animate({
      "opacity": 1
    }, {
      'duration': 4000
    })
    $("#img2").animate({
      'left': 0,
      'top': 0
    }, {
      'duration': 1000
    })
    $("#im1").animate({
      "opacity": 0.5
    }, {
      'duration': 1000
    })
  
    $("#img2").animate({
      'left': 0,
      'top': 0
    }, {
      'duration': 3000
    })
    $("#im1").animate({
      "opacity": 0.5
    }, {
      'duration': 3000
    })
  
    $("#img").animate({
      "left": '90vw',
      "top": 0
    }, {
      'duration': 1000
    })
    $("#im2").animate({
      "opacity": 0.5
    }, {
      'duration': 1000
    })
    $("#img2").animate({
      'left': '2.5vw',
      'top': '2.5vw'
    }, {
      'duration': 1000
    })
    $("#im1").animate({
      "opacity": 1
    }, {
      'duration': 1000
    })
    setTimeout(pic, 5000)
  }
  function pic2() {
    if (a == 0) {
      a = 1;
  
      $("#img").animate({
        "width": '90vw',
            "height": '50vw',
        "left": 0,
        "top": 0
      }, {
        'duration': 0
      })
      $("#im2").animate({
        "opacity": 1
      }, {
        'duration': 0
      })
      $("#img2").animate({
        'left': '90vw',
        'top': '2.5vw'
      }, {
        'duration': 0
      })
      $("#im1").animate({
        "opacity": 0.5
      }, {
        'duration': 0
      })
      document.getElementById("img").src = "food.jpeg";
      document.getElementById("img2").src = "IMG_0064.JPG";
      $("#img").animate({
        "width": '90vw',
            "height": '50vw',
        "left": 0,
        "top": 0
      }, {
        'duration': 4000
      })
      $("#im2").animate({
        "opacity": 1
      }, {
        'duration': 4000
      })
      $("#img2").animate({
        'left': 0,
        'top': 0
      }, {
        'duration': 1000
      })
      $("#im1").animate({
        "opacity": 0.5
      }, {
        'duration': 1000
      })
  
      $("#img2").animate({
        'left': 0,
        'top': 0
      }, {
        'duration': 3000
      })
      $("#im1").animate({
        "opacity": 0.5
      }, {
        'duration': 3000
      })
  
      $("#img").animate({
        "left": '90vw',
        "top": 0
      }, {
        'duration': 1000
      })
      $("#im2").animate({
        "opacity": 0.5
      }, {
        'duration': 1000
      })
      $("#img2").animate({
        'left': '2.5vw',
        'top': '2.5vw'
      }, {
        'duration': 1000
      })
      $("#im1").animate({
        "opacity": 1
      }, {
        'duration': 1000
      })
      setTimeout(pic, 5000)
    } else {
      a = 0;
  
      $("#img").animate({
        "width": '90vw',
            "height": '50vw',
        "left": 0,
        "top": 0
      }, {
        'duration': 0
      })
      $("#im2").animate({
        "opacity": 1
      }, {
        'duration': 0
      })
      $("#img2").animate({
        'left': '90vw',
        'top': '2.5vw'
      }, {
        'duration': 0
      })
      $("#im1").animate({
        "opacity": 0.5
      }, {
        'duration': 0
      })
      document.getElementById("img").src = "IMG_0064.JPG";
      document.getElementById("img2").src = "food.jpeg";
      $("#img").animate({
        "width": '90vw',
            "height": '50vw',
        "left": 0,
        "top": 0
      }, {
        'duration': 4000
      })
      $("#im2").animate({
        "opacity": 1
      }, {
        'duration': 4000
      })
      $("#img2").animate({
        'left': 0,
        'top': 0
      }, {
        'duration': 1000
      })
      $("#im1").animate({
        "opacity": 0.5
      }, {
        'duration': 1000
      })
  
      $("#img2").animate({
        'left': 0,
        'top': 0
      }, {
        'duration': 3000
      })
      $("#im1").animate({
        "opacity": 0.5
      }, {
        'duration': 3000
      })
  
      $("#img").animate({
        "left": '90vw',
        "top": 0
      }, {
        'duration': 1000
      })
      $("#im2").animate({
        "opacity": 0.5
      }, {
        'duration': 1000
      })
      $("#img2").animate({
        'left': '2.5vw',
        'top': '2.5vw'
      }, {
        'duration': 1000
      })
      $("#im1").animate({
        "opacity": 1
      }, {
        'duration': 1000
      })
      setTimeout(pic, 5000);
    }
  }
  
  