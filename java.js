// 1. Animations on Page Load
window.addEventListener('load', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('fade-in');
    });
  });
  
  // 2. Dynamic Welcome Message
  const welcomeMessage = document.querySelector('.container h1');
  const hours = new Date().getHours();
  let greeting = "Hello!";
  
  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning!";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }
  
  welcomeMessage.innerText = `${greeting} Welcome to My Portfolio`;
  
 // 3. Interactive Background Change on Hover
const skillsSection = document.getElementById('skills');
skillsSection.addEventListener('mouseenter', function() {
  document.body.style.background = 'linear-gradient(45deg, #B19CD9, #E6D8E7)'; // Baby purple and a lighter purple gradient
});
skillsSection.addEventListener('mouseleave', function() {
  document.body.style.background = '';
});

  
  // 4. Scroll Animations
  const scrollElements = document.querySelectorAll('.fade-on-scroll');
  function checkVisibility() {
    scrollElements.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight - 50) {
        element.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Check initially when the page loads
  
  // 5. Sticky Header
  const header = document.querySelector('header');
  const sticky = header.offsetTop;
  
  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
  
  window.onscroll = stickyHeader;
  
  // Form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
  
    if (name && email && message) {
      alert('Thank you for your message! I\'ll get back to you soon.');
      form.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  // Scroll-to-Top Button
  const scrollTopButton = document.getElementById('scroll-top');
  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  };
  
  scrollTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  