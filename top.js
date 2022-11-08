topbtn = document.getElementById("topbtn");
menubtn = document.getElementById("mnubtn");
closebtn = document.getElementById("closebtn");
window.onscroll = function() {
  scrollFunction()
  menuFunction()
};

function scrollFunction() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 100) {
    topbtn.style.transform = "translateY(0rem)";
  } else {
    topbtn.style.transform = "translateY(3rem)";
  }
}

function menuFunction() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    menubtn.style.transform = "translateX(0rem)";
    closebtn.style.transform = "translateX(0rem)";
  } else {
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