// Click sounds
const clickSound = document.getElementById("click-sound");
document.querySelectorAll("a, button, .card, .social-btn").forEach(el => {
  el.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

// Typing effect text
const typingElement = document.querySelector(".typing");
const texts = ["Fullstack Developer", "Frontend Angel", "Backend Engine"];
let i = 0;
setInterval(() => {
  typingElement.textContent = texts[i];
  i = (i + 1) % texts.length;
}, 4000);

// Scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
