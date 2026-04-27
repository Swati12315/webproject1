// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// Typing Effect
const text = "Frontend Developer | Python Learner | Fresher";
const typingText = document.getElementById("typing-text");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(() => {
      typingText.innerHTML = "";
      index = 0;
      typeEffect();
    }, 1500);
  }
}

window.onload = typeEffect;


// Reveal Animation on Scroll
const sections = document.querySelectorAll("section");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < triggerBottom) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
}

// Initial hidden state
sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealSections);
revealSections();


// Active Menu Highlight
const navLinks = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// Resume Download Message
const resumeBtn = document.querySelector('a[download]');

if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    alert("Your resume download will start now.");
  });
}