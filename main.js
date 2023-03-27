document.body.onkeydown = function(keypress_event){
  var key = keypress_event.key;
  document.getElementById("key_display").innerHTML = key;
 
  if (key == "Backspace"){
    var select = document.getElementById('letter-container');
    select.removeChild(select.lastChild);
    document.body.style.backgroundColor ="yellow";
  } else {
   var new_element = document.createElement ("h1");
    new_element.innerHTML = key;
    new_element.classList.add("xl-type");
    document.getElementById('letter-container').appendChild(new_element);
     document.body.style.backgroundColor ="white";



  }

 
};

