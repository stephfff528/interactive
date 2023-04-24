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

  function getRandomNumber(low, high) {
      let r = Math.floor(Math.random() * (high - low + 1)) + low;
      return r;
  }
  // console.log(circle);
}

var count = 0 
var score = document.getElementById("score")
var bodypts = document.getElementById("bodypts")
var largepts = document.getElementById("largepts")
var mediumpts = document.getElementById("mediumpts")
var smallpts = document.getElementById("smallpts")

 function fade_out(element) {
            var op = 1;  // initial opacity
            var timer = setInterval(function () {
                if (op <= 0.1){
                    clearInterval(timer);
                    element.style.display = 'none';
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op -= op * 0.1;
            }, 50);
        };

        function fade_in(element) {
            var op = 0.1;  // initial opacity
            element.style.display = 'block';
            var timer = setInterval(function () {
                if (op >= 1){
                    clearInterval(timer);
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1;
            }, 10);
        };




document.body.onclick = function (){
  count++;
  score.innerHTML = count;
  console.log("body clicked!!!");
  var purr = document.getElementById("purr");
  purr.play();
  fade_in(bodypts, fade_out(bodypts));

}

var large_circles = document.getElementsByClassName("large");
var large_click = function() {
  count = count+1;
  score.innerHTML = count;
  console.log("large circle clicked!!!");

  large_array = [
    'bird.mp4',
    'flies.mp4',
    'koi.mp4',
    'mouse.mp4',
  ]

  random_index = Math.floor(Math.random() * large_array.length);
  selected_large = large_array[random_index];
  document.getElementById("largevid").src = `./largevid/${selected_large}`;
  largevid.style.display = "block";
  largevid.play();
  largevid.muted = false;
  largevid.addEventListener('ended', function() {
    largevid.style.display = "none";
  
  fade_in(largepts, fade_out(largepts));
  })
};

for (var i = 0; i < large_circles.length; i++) {
  large_circles[i].addEventListener('click', large_click, false);
}


var medium_circles = document.getElementsByClassName("medium");
var medium_click = function() {
  count = count+2;
  score.innerHTML = count;
  console.log("medium circle clicked!!!");

  medium_array = [
    '1.mp4',
    '2.mp4',
    '3.mp4',
    '4.mp4',
    '5.mp4',
    '6.mp4',
    '7.mp4',
    '8.mp4',
    '9.mp4',
    '10.mp4',
    '11.mp4',
    '12.mp4',
  ]

  random_index = Math.floor(Math.random() * medium_array.length);
  selected_medium = medium_array[random_index];
  document.getElementById("mediumvid").src = `./mediumvid/${selected_medium}`;
  mediumvid.style.display = "block";
  mediumvid.play();
  mediumvid.muted = false;
  mediumvid.addEventListener('ended', function() {
    mediumvid.style.display = "none";
   fade_in(mediumpts, fade_out(mediumpts));
  })



};

for (var i = 0; i < medium_circles.length; i++) {
  medium_circles[i].addEventListener('click', medium_click, false);
}

var small_circles = document.getElementsByClassName("small");
var small_click = function() {
  count = count+3;
  score.innerHTML = count;
  console.log("small circle clicked!!!");

  small_array = [
    'a.mp4',
    'b.mp4',
    'c.mp4',
    'd.mp4',
    'e.mp4',
    'f.mp4',
    'g.mp4',
    'h.mp4',
  ]

  random_index = Math.floor(Math.random() * small_array.length);
  selected_small = small_array[random_index];
  document.getElementById("smallvid").src = `./smallvid/${selected_small}`;
  smallvid.style.display = "block";
  smallvid.play();
  smallvid.muted = false;
  smallvid.addEventListener('ended', function() {
    smallvid.style.display = "none";
  })

};

for (var i = 0; i < small_circles.length; i++) {
  small_circles[i].addEventListener('click', small_click, false);
}
  












