
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

      console.log(circle);
    }

    function getRandomNumber(low, high) {
      let r = Math.floor(Math.random() * (high - low + 1)) + low;
      return r;
    }

  









