var owl = $('.owl-carousel');
owl.owlCarousel({
    // items:3, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let hiddenCard = document.getElementById('hiddenCard');
let hiddenCard2 = document.getElementById('hiddenCard2');
let sectionButton =document.getElementById('section3Button');
function show(){
  hiddenCard.style.display='flex';
  hiddenCard2.style.display='flex';
  sectionButton.style.display='none';
}
// document.getElementById('section3Button').addEventListener('click',show);


document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navAfterToggle= document.querySelector('.nav-links.active')
  const navLogin = document.getElementById('login');
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');


  function moveChildToParent2() {
    header.removeChild(navLogin);
    navAfterToggle.appendChild(navLogin);
  }

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    moveChildToParent2();
  });
});
