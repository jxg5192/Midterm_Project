"use strict";

// Grab all the Crack It! buttons
let buttons = document.querySelectorAll(".crack-btn");

// Loop through each button
for (let i = 0; i < buttons.length; i++) {
  let btn = buttons[i];

  btn.addEventListener("click", function() {
    // Get the fortune box right after this button
    let fortune = btn.nextElementSibling;

    // Toggle the visibility
    fortune.classList.toggle("hide");

    // Change button text
    if (fortune.classList.contains("hide")) {
      btn.textContent = "Crack It!";
    } else {
      btn.textContent = "Hide Fortune";
    }
  });
}
