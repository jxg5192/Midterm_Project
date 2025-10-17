"use strict";

// js element #1 

// grabbing all elements with the class "crack-btn" (the buttons under the cookies)
let buttons = document.querySelectorAll(".crack-btn");

// looping through each of the buttons
for (let i = 0; i < buttons.length; i++) {
  let btn = buttons[i];  // current button

  btn.addEventListener("click", function () {

    //  hide all fortunes before showing the one that was selected
    // make sure only 1 fortune shows at a time
    let fortuneBoxes = document.querySelectorAll(".fortune-box");
    for (let j = 0; j < fortuneBoxes.length; j++) {
      fortuneBoxes[j].classList.add("hide");
    }

    // reset all buttons back to "Crack It!"
    for (let k = 0; k < buttons.length; k++) {
      buttons[k].textContent = "Crack It!";
    }

    //  grab the fortune right NEXT to the clicked button
    let fortune = btn.nextElementSibling;
    fortune.classList.toggle("hide");

    //  if fortune is showing, update button text
    if (!fortune.classList.contains("hide")) {
      btn.textContent = "Your Message:";
    }
  });
}


// js element #2

// grabbing form/input field/list container by their id
const form = document.getElementById('fortuneForm');
const input = document.getElementById('fortuneInput');
const list = document.getElementById('fortuneList');

// checking that all of these exist to avoid errors
if (form && input && list) {
    // everything inside only runs if these elements are on the page 

      // adding a 'submit' event listener to the form
    form.addEventListener('submit', function(e) {
    e.preventDefault(); // stops  page from reloading when form is submitted

      // remove leading/trailing spaces from the users inputted text
    const fortune = input.value.trim();

        // If the input is empty, stop here
    if (!fortune) return;

    // Creating a new paragraph element for the inputted fortune
    const p = document.createElement('p');
    p.textContent = `"${fortune}"`; // adding quotes to the inputted fortune text 
        // Addinf the new inputted fortune to the top of the list 
    list.prepend(p);
    input.value = '';
  });
}

// --- js element #3 ---

// grab all images with the class "cookie-img"
const cookieImgs = document.querySelectorAll('.cookie-img');

// Loop through each cookie 
for (let i = 0; i < cookieImgs.length; i++) {
  let img = cookieImgs[i]; // current image in the loop

  //  mouse moves over the image
  img.addEventListener('mouseover', function() {
    img.style.transform = 'scale(1.08)'; //  zoom in
  });

  //  mouse leaves the image
  img.addEventListener('mouseout', function() {
    img.style.transform = 'scale(1)'; //  normal size
  });
}






// js element 4


// grabbing images for ingredient checklist
let galleryClass = document.querySelectorAll('.imageGallery');


for (let i = 0; i < galleryClass.length; i++) {
  galleryClass[i].style.display = "none";
}

// prev, next, start, stop buttons
let previousButton = document.getElementById('previous');
let nextButton = document.getElementById('next');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');


let currentIndex = 0;
galleryClass[currentIndex].style.display = "block"; // show first pic when the page loads

//  navigation with prev button.... when user clicks prev button 
previousButton.addEventListener('click', function() {
  galleryClass[currentIndex].style.display = "none"; // hide current pic
  currentIndex = currentIndex - 1; // show the previous pic
  if (currentIndex < 0) currentIndex = galleryClass.length - 1; // move back 1 index
  galleryClass[currentIndex].style.display = "block";
});

//  navigation with next button.... when user clicks prev button 
nextButton.addEventListener('click', function() {
  galleryClass[currentIndex].style.display = "none"; // hide current pic
  currentIndex++; // show the next pic
  if (currentIndex >= galleryClass.length) currentIndex = 0; // move forward 1 index
  galleryClass[currentIndex].style.display = "block";
});

// auto slideshow with the pics
let autoCycleActive = false; 
let cycleInterval;


// when user clicks on start button
startButton.addEventListener('click', function() {
  if (!autoCycleActive) {
    cycleInterval = setInterval(function() {
      galleryClass[currentIndex].style.display = "none"; // hide current
      currentIndex++;  // move forward
      if (currentIndex >= galleryClass.length) currentIndex = 0;
      galleryClass[currentIndex].style.display = "block";
    }, 3000); // change the pics every 3 secs
    autoCycleActive = true;
  }
});

// when user clicks stop button, stop the slidehsow
stopButton.addEventListener('click', function() {
  clearInterval(cycleInterval);
  autoCycleActive = false;
});
