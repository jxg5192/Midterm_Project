"use strict";


// js element 1
let buttons = document.querySelectorAll(".crack-btn");

for (let i = 0; i < buttons.length; i++) {
  let btn = buttons[i];

  btn.addEventListener("click", function () {
    // Hide all fortunes first
    document.querySelectorAll(".fortune-box").forEach(box => box.classList.add("hide"));
    document.querySelectorAll(".crack-btn").forEach(b => b.textContent = "Crack It!");

    // Reveal this one’s fortune
    let fortune = btn.nextElementSibling;
    fortune.classList.toggle("hide");

    // Update the clicked button text
    if (!fortune.classList.contains("hide")) {
      btn.textContent = "Your Fortune Is";
    }
  });
}









// js element 2
  const form = document.getElementById('fortuneForm');
  const input = document.getElementById('fortuneInput');
  const list = document.getElementById('fortuneList');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const fortune = input.value.trim();
    if (!fortune) return;

    const p = document.createElement('p');
    p.textContent = `"${fortune}"`;
    list.prepend(p);  // shows new fortunes on top

    input.value = '';
  });




// js element 3
let cookieImages = document.querySelectorAll("cookie-card img");

// zoom in on character pics on hover
for (let i = 0; i < cookieImages.length; i++) {
  let img = cookieImages[i];

  img.addEventListener("mouseover", function () {
    img.style.transform = "scale(1.3)";
  });

  img.addEventListener("mouseout", function () {
    img.style.transform = "scale(1)";
  });
}

// rotate character pics on hover
for (let i = 0; i < cookieImages.length; i++) {
  let img = cookieImages[i];

  img.addEventListener("mouseover", function () {
    img.style.transform = "rotate(5deg) scale(1.1)";
  });

  img.addEventListener("mouseout", function () {
    img.style.transform = "rotate(0deg) scale(1)";
  });
}


