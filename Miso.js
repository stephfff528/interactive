
 let container = document.querySelector("body");
    container.addEventListener("animationend", changePosition, true);



    function changePosition(event) {
      let circle = event.target;

      circle.style.animationName = "none";
      
      requestAnimationFrame(() => {
        circle.style.animationName = "";
      });

      let circleStyle = getComputedStyle(circle);
      let finalX = circleStyle.getPropertyValue("--xB");
      let finalY = circleStyle.getPropertyValue("--yB");

      circle.style.setProperty("--xA", finalX);
      circle.style.setProperty("--yA", finalY);

      circle.style.setProperty("--xB", getRandomNumber(-600, 600) + "px");
      circle.style.setProperty("--yB", getRandomNumber(-600, 600) + "px");

      // console.log(circle);
    }

    function getRandomNumber(low, high) {
      let r = Math.floor(Math.random() * (high - low + 1)) + low;
      return r;
    }


  var count = 0 
  // var body = document.getElementById("body")
  var large = document.getElementById("large")
  var medium = document.getElementById("medium")
  var small = document.getElementById("small")
  var score = document.getElementById("score")


  document.body.onclick = function (){
    count++;
    score.innerHTML = count;
    console.log("body clicked!!!");
  }


  var large_circles = document.getElementsByClassName("large");

  var large_click = function() {
      count = count+1;
      score.innerHTML = count;
      console.log("large circle clicked!!!");
  };

  for (var i = 0; i < large_circles.length; i++) {
      large_circles[i].addEventListener('click', large_click, false);
  }

   var medium_circles = document.getElementsByClassName("medium");

   var medium_click = function() {
      count = count+2;
      score.innerHTML = count;
      console.log("medium circle clicked!!!");
  };

  for (var i = 0; i < medium_circles.length; i++) {
      medium_circles[i].addEventListener('click', medium_click, false);
  }

  var small_circles = document.getElementsByClassName("small");

   var small_click = function() {
      count = count+3;
      score.innerHTML = count;
      console.log("small circle clicked!!!");
  };

  for (var i = 0; i < small_circles.length; i++) {
      small_circles[i].addEventListener('click', small_click, false);
  }
  












