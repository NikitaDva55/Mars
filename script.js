const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

function toggleMenu() {
  navMenu.classList.toggle('active');
  const bars = document.querySelectorAll('.bar');
  const logo = document.querySelector('.logo');
  
  if (navMenu.classList.contains('active')) {
    bars.forEach(b => b.style.background = '#000');
    logo.style.color = '#000';
  } else {
    bars.forEach(b => b.style.background = '#fff');
    logo.style.color = '#fff';
  }
}

function showPage2() {
  page1.style.display = 'none';
  page2.style.display = 'block';
  window.scrollTo(0, 0);
}

function showPage1() {
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page1').style.display = 'block';
  window.scrollTo(0, 0);
}

menuBtn.addEventListener('click', toggleMenu);
