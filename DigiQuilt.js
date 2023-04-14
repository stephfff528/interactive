var current_tile;
var mood;


document.querySelectorAll(".tile").forEach(tile => {

   tile.addEventListener('click', event => {

      console.log("clicked!!");
      // show the form with the options.
      document.getElementById("options").style.opacity = 1;
      document.getElementById("options").style.pointerEvents = "initial";


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
  document.getElementById("options").style.opacity = 0;
  document.getElementById("options").style.pointerEvents = "none";

  // figure out which option was selected.
  var options = document.getElementsByTagName("input");
  for (var i=0;i<options.length;i++) {
    if (options[i].checked) {
      mood = options[i].value;
    }
  }

  // depending on the mood, change the display of the block. 
  // you could add some code to display the correct image here!
  if (mood == "confident") {
    // current_tile.style.backgroundImage = "url('water.png')";
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "grateful") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "curious") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "silly") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "blissful") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "refreshed") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "loved") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "bouncy") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "accepted") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "anticipating") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "modest") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "meditative") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "bold") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "affirmative") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "sensitive") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "aroused") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "free") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "playful") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "content") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "peaceful") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "trusting") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "creative") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "proud") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "excited") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "aligned") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "holy") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "cold") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "dirty") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "cynical") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "gloomy") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "lonely") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "unfocused") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "hostile") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "skeptical") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "out of control") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "apathetic") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "terrified") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "grieving") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "weird") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "low-spirited") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "dejected") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "hatred") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "distant") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "powerless") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "empty") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "embarrassed") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "horrified") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "repelled") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "judgemental") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "devastated") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "worthless") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "abandoned") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "aggressive") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "open") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "alienated") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "jealous") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "perplexed") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "courageous") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "hopeful") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "bored") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "humiliated") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "suspicious") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "overwhelmed") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "hateful") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "ridiculed") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "frustrated") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "inquisitive") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "submissive") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "hesitant") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "startled") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "furious") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "repugnant") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "optimistic") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "insecure") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "important") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "powerful") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "threatened") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "ashamed") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "confused") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "disillusioned") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "critical") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "ecstatic") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "inspired") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "awful") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "infuriated") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "irritated") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "depressed") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "joyful") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "amused") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "vulnerable") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "respected") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "liberated") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "withdrawn") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "indifferent") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
   else if (mood == "powerless") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "fulfilled") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "dismayed") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  } else if (mood == "hurt") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "inadequate") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }
  else if (mood == "eager") {
    current_tile.getElementsByTagName("img")[0].src = "water.png";
    current_tile.getElementsByTagName("img")[0].style.display = "block"
  }

  
});


