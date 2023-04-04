var current_tile;
var mood;


document.querySelectorAll(".tile").forEach(tile => {

   tile.addEventListener('click', event => {

      // show the form with the options.
      document.getElementById("options").style.display = "tile";

      // reset all radio buttons, so none are selected
      var options = document.getElementsByTagName("input");
      for (var i = 0; i < options.length; i++) {
        options[i].checked = false;
      }

      // figure out which block was clicked on
      current_block = event.target;
  });

});

document.getElementById("submit").addEventListener('click', event => {
  
  // hide the form
  document.getElementById("options").style.display = "none";

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
    current_block.style.backgroundColor = "yellow";
  }
  else if (mood == "grumpy") {
    current_block.style.backgroundColor = "brown";
  }
  else if (mood == "sad") {
    current_block.style.backgroundColor = "blue";
  }
  else if (mood == "weird") {
    current_block.style.backgroundColor = "purple";
  }
  
});


