topbtn = document.getElementById("topbtn");
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 10) {
    topbtn.style.transform = "translateY(0em)";
  } else {
    topbtn.style.transform = "translateY(2.5em)";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
