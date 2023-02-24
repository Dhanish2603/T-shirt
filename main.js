
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
  if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100) {
    document.getElementById("left").style.transform = "translate(0)";
    document.getElementById("right").style.transform = "translate(0)";
    document.getElementById("line1").style.transform ="translate(0) scale(1)"
    document.getElementById("line1").style.opacity="0";
    document.getElementById("line2").style.transform ="translate(0) scale(1)"
    document.getElementById("line2").style.opacity="0";
  } else {
    document.getElementById("left").style.transform = "translate(132px, -26px) rotate(45deg)";
    document.getElementById("right").style.transform = "translate(-132px, -26px) rotate(-45deg)";
    document.getElementById("line1").style.transform=" translate(195px, -40px) rotate(-26deg) "
    
    document.getElementById("line1").style.opacity ="1";
    document.getElementById("line2").style. transform=" translate(-195px ,-40px) rotate(26deg) "
    document.getElementById("line2").style.opacity ="1";
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