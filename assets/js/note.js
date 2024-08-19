let showCard1 = document.getElementById('hiddenCardI');
let showCard2 = document.getElementById('hiddenCardII');
let showCard3 = document.getElementById('hiddenCardIII');
let buttonSelect =document.getElementById('buttonSelect');
function loadMore(){
  showCard1.style.display='flex';
  showCard2.style.display='flex';
  showCard3.style.display='flex';
  buttonSelect.style.display='none';
  console.log('hello world');
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  

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