document.getElementById("welcome").onclick=function(){
  console.log("clicked!!");
  welcome.style.opacity= 0;
  document.getElementById("clicked").style.opacity= 1;
  document.getElementById("back").style.opacity= 1;
};

back.onclick=function(){
  console.log("clicked!!");
  welcome.style.opacity= 1;
  clicked.style.opacity= 0;
  back.style.opacity= 0;
};