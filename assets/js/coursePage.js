const heartButton = document.getElementById('heartButton');
const heartIcon = document.getElementById('heartIcon');
const shareButton = document.getElementById('shareButton');
const shareIcon = document.getElementById('shareIcon');

heartButton.addEventListener('click', () => {
  heartIcon.classList.toggle('fa-regular');
  heartIcon.classList.toggle('fa-solid');
});



shareButton.addEventListener('click', () => {
    shareIcon.classList.toggle('fa-regular');
    shareIcon.classList.toggle('fa-solid');
});

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