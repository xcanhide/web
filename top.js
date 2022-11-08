topbtn = document.getElementById("topbtn");
menubtn = document.getElementById("mnubtn");
closebtn = document.getElementById("closebtn");
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    topbtn.style.transform = "translateY(0rem)";
    menubtn.style.transform = "translateX(0rem)";
    closebtn.style.transform = "translateX(0rem)";
  } else {
    topbtn.style.transform = "translateY(3rem)";
    menubtn.style.transform = "translateX(-2.15rem)";
    closebtn.style.transform = "translateX(-2.15rem)";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}