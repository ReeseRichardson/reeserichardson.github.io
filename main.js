$(document).ready(function() {
  // stretch header across entire screen
  var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
  })

  // parallax
  window.addEventListener('scroll', function(e) {
    const target = document.querySelectorAll('.parallax');
    
    var index = 0, length = target.length;
    for (index; index < length; index++) {

      var posX = window.pageYOffset * target[index].dataset.ratex;
      var posY = window.pageYOffset * target[index].dataset.ratey;

      if (posX >= window.innerWidth*0.5) {
        posX = window.innerWidth*0.5;
      }

      if (posY >= window.innerHeight) {
        posY = window.innerHeight;
      }

      target[index].style.transform = 'translate3d(' +posX+ 'px,' +posY+ 'px, 0px)';
    }
  });

  //  hide navbar on scroll down, show navbar on scroll up w3schools (will replace w3schools code soon)
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("main-navbar").style.top = "0";
    } 
    
    else {
      document.getElementById("main-navbar").style.top = "-90px";
    }

    prevScrollpos = currentScrollPos;
  }

  // // smooth scrolling - BREAKS LINK FUNCTIONALITY!!!
  // $("a").on("click", function (e) {

  //   e.preventDefault();

  //   const href = $(this).attr("href");

  //   $("html, body").animate({ scrollTop: $(href).offset().top }, 2000);
  // });

  // current date and time
  var clockElement = document.getElementById('clock');

  function clock() {
      clockElement.textContent = new Date().toString();
  }

  setInterval(clock);

  // modal trigger
  setTimeout(function() {
	  $('#temporary-modal').modal();
  }, 0);
});
