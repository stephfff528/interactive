var current_tile;
var mood;


document.querySelectorAll(".tile").forEach(tile => {

   tile.addEventListener('click', event => {

      console.log("clicked!!");
      // show the form with the options.
      document.getElementById("options").style.display = "block";
      document.getElementById("options").classList.add("fade-in");

      // reset all radio buttons, so none are selected
      var options = document.getElementsByTagName("input");
      for (var i = 0; i < options.length; i++) {
        options[i].checked = false;
      }

      // figure out which block was clicked on
      current_tile = event.target;
  });

});

document.getElementById("submit").addEventListener('click', event => {
  
  // hide the form
  document.getElementById("options").style.display = "none";
  document.getElementById("options").style.opacity = 0;

  // figure out which option was selected.
  var options = document.getElementsByTagName("input");
  for (var i=0;i<options.length;i++) {
    if (options[i].checked) {
      mood = options[i].value;
    }
  }

  // depending on the mood, change the display of the block. 
  // you could add some code to display the correct image here!
  if (mood == "happy") {
    // current_tile.style.backgroundImage = "url('water.png')";
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "grumpy") {
    current_tile.style.backgroundColor = "brown";
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "sad") {
    current_tile.style.backgroundColor = "blue";
  }
  else if (mood == "weird") {
    current_tile.style.backgroundColor = "purple";
  }
  
});


