"use strict";

// js element #1 
let buttons = document.querySelectorAll(".crack-btn");

for (let i = 0; i < buttons.length; i++) {
  let btn = buttons[i];

  btn.addEventListener("click", function () {
    document.querySelectorAll(".fortune-box").forEach(box => box.classList.add("hide"));
    document.querySelectorAll(".crack-btn").forEach(b => b.textContent = "Crack It!");

    let fortune = btn.nextElementSibling;
    fortune.classList.toggle("hide");

    if (!fortune.classList.contains("hide")) {
      btn.textContent = "Your Message:";
    }
  });
}

// js element #2
const form = document.getElementById('fortuneForm');
const input = document.getElementById('fortuneInput');
const list = document.getElementById('fortuneList');

if (form && input && list) {
    // everything inside only runs if those elements are on the page 
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fortune = input.value.trim();
    if (!fortune) return;

    const p = document.createElement('p');
    p.textContent = `"${fortune}"`;
    list.prepend(p);
    input.value = '';
  });
}

// --- js element #3 ---
const cookieImgs = document.querySelectorAll('.cookie-img');

cookieImgs.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.08)';  
  });
  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
  });
});
