let book = document.querySelectorAll(".book")
let carousel = document.querySelectorAll(".carousel")
function carouselToggle(n) {
  carousel[n].style.display = "block";

  for (let index = 0; index < 4; index++) {

    if (index == n) {
      book[index].style.filter = "blur(5px)";
      book[index].style.display = "none";
    } else {
      book[index].style.filter = "blur(5px)";
      carousel[index].style.display = "none";
      book[index].style.display = "none";
    }
  }
}

function carouselClose(num) {
  carousel[num].style.display = "none";
  for (let i = 0; i < 4; i++) {
    book[i].style.filter = "blur(0)"
    book[i].style.display = "block";
  }
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("left").classList.add("left-add");
    document.getElementById("right").classList.add("right-add");
    document.getElementById("line1").classList.add("line1-add");
    document.getElementById("line2").classList.add("line2-add");
    document.getElementById("right-nav").classList.add("right-nav-add");
    document.getElementById("left-nav").classList.add("left-nav-add");
    document.getElementById("image-logo").classList.add("logo-add");
    document.getElementById("lining").classList.add("lining-add");
    document.getElementById("collar-button").classList.add("collar-button-add");
    document.getElementById("back-collar").classList.add("back-collar-add");
    document.getElementById("wp-hide").classList.remove("d-none");
    document.getElementById("img-move").classList.add("top-class") ;
    document.getElementById("b").classList.add("b-add") ;
    document.getElementById("b-about").classList.add("b-add") ;
    document.getElementById("b-product").classList.add("b-add") ;
    document.getElementById("b-contact").classList.add("b-add") ;
    document.getElementById("info").classList.add("info-class-add") ;
    document.getElementById("info-content").classList.add("info-content-add") ;
    document.getElementById("info-h1").classList.add("info-h1-add") ;
    document.getElementById("info-h1-child").classList.add("info-h1-child-add") ;
    document.getElementById("info-ol").classList.add("info-ol-add") ;
    document.getElementById("info-h1-i").classList.add("info-h1-i-add") ;
  } else {
    document.getElementById("left").classList.remove("left-add");
    document.getElementById("right").classList.remove("right-add");
    document.getElementById("line1").classList.remove("line1-add");
    document.getElementById("line2").classList.remove("line2-add");
    document.getElementById("right-nav").classList.remove("right-nav-add");
    document.getElementById("left-nav").classList.remove("left-nav-add");
    document.getElementById("image-logo").classList.remove("logo-add");
    document.getElementById("lining").classList.remove("lining-add");
    document.getElementById("collar-button").classList.remove("collar-button-add");
    document.getElementById("back-collar").classList.remove("back-collar-add");
    document.getElementById("wp-hide").classList.add("d-none");
    document.getElementById("img-move").classList.remove("top-class");
    document.getElementById("b").classList.remove("b-add") ;
    document.getElementById("b-about").classList.remove("b-add") ;
    document.getElementById("b-contact").classList.remove("b-add") ;
    document.getElementById("b-product").classList.remove("b-add") ;
    document.getElementById("info").classList.remove("info-class-add") ;
    document.getElementById("info-h1").classList.remove("info-h1-add") ;
    document.getElementById("info-h1-child").classList.remove("info-h1-child-add") ;
    document.getElementById("info-ol").classList.remove("info-ol-add") ;
    document.getElementById("info-h1-i").classList.remove("info-h1-i-add") ;
  }
}



// Get the modal
var modal = document.getElementById("myModal");

var btn = document.getElementsByClassName("myPtn");

var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
[].forEach.call(btn, function (el) {
  el.onclick = function () {
    modal.style = "display: block; overflow-y: hidden;";
  }
})


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}