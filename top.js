topbtn = document.getElementById("topbtn");
menubtn = document.getElementById("mnubtn");
closebtn = document.getElementById("closebtn");
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    topbtn.style.transform = "translateY(0em)";
    menubtn.style.transform = "translateX(0em)";
    menubtn.style.justifyContent = "center";
    closebtn.style.transform = "translateX(0em)";
    closebtn.style.justifyContent = "center";
  } else {
    topbtn.style.transform = "translateY(3em)";
    menubtn.style.transform = "translateX(-3em)";
    menubtn.style.justifyContent = "right";
    closebtn.style.transform = "translateX(-3em)";
    closebtn.style.justifyContent = "right";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}