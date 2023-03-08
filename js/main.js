
let book = document.querySelectorAll(".book")
let carousel = document.querySelectorAll(".carousel")
function carouselToggle(n) {
  // document.getElementById('body').style.backgroundColor ="black";
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
  // document.getElementById('body').style.backgroundColor ="white";

}



// Nav Bar js

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
  if (document.body.scrollTop > 80|| document.documentElement.scrollTop >80) {
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
  }
}

// Product Carousel Owl

$('.owl-carousel').owlCarousel({
  items: 4,
  loop: false,
  rewind: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  nav: false,


  responsive: {
    0: {
      items: 1
    },
    550: {
      items: 2
    },
    1008: {
      items: 3
    }
  }
})


// contact us button click footer

// function toggle(n){
//   if(n == 0){
//     document.getElementById("modalDialog").style.display="block";
//   }
//   else{
//     document.getElementById("modalDialog").style.display="none";

//   }
// }
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myPtn");
var btn = document.getElementsByClassName("myPtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
[].forEach.call(btn, function(el) {
  el.onclick = function() {
  	modal.style.display = "block";
  }
})


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}