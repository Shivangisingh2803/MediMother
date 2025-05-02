/*--------------------------------------------header----------------------------------------------------------------*/
/*-----popupbox---------*/
// Get elements
const openPopupBtn = document.querySelector('.Login');
const popupBox = document.getElementById('popupBox');
const closeBtn = document.getElementById('closeBtn');
const popupTitle = document.getElementById('popupTitle');
const popupForm = document.getElementById('popupForm');
const extraText = document.getElementById('extraText');

// Open Popup when clicking Login/Register button
openPopupBtn.onclick = function() {
  popupBox.style.display = 'flex';
  showLoginForm(); // default open login
}

// Close Popup when clicking ×
closeBtn.onclick = function() {
  popupBox.style.display = 'none';
}

// Close Popup when clicking outside the popup
window.onclick = function(event) {
  if (event.target == popupBox) {
    popupBox.style.display = 'none';
  }
}

// Show Login Form
function showLoginForm() {
  popupTitle.textContent = 'Login';
  popupForm.innerHTML = `
    <input type="email" placeholder="Email ID" required><br>
    <input type="password" placeholder="Password" required><br>
    <button type="submit" class="submit-btn">Login</button>
  `;
  extraText.innerHTML = `Don't have an account? <a href="#" id="switchToRegister">Register here</a>`;
  addSwitchListeners();
}

// Show Register Form
function showRegisterForm() {
  popupTitle.textContent = 'Create Your HealthMate Account';
  popupForm.innerHTML = `
    <input type="text" placeholder="Full Name" required><br>
    <input type="email" placeholder="Email ID" required><br>
    <input type="password" placeholder="Password" required><br>
    <input type="password" placeholder="Confirm Password" required><br>
    <button type="submit" class="submit-btn">Register</button>
  `;
  extraText.innerHTML = `Already have an account? <a href="#" id="switchToLogin">Login here</a>`;
  addSwitchListeners();
}

// Listen for switching between Login/Register
function addSwitchListeners() {
  const switchToRegister = document.getElementById('switchToRegister');
  const switchToLogin = document.getElementById('switchToLogin');

  if (switchToRegister) {
    switchToRegister.onclick = function(e) {
      e.preventDefault();
      showRegisterForm();
    }
  }

  if (switchToLogin) {
    switchToLogin.onclick = function(e) {
      e.preventDefault();
      showLoginForm();
    }
  }
}



/*--------------------------------------------------about us page-------------------------------------------------------------*/

/*-------aboutUsSlider--------*/
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');

  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0; // Loop back
  }

  slides[currentSlide].classList.add('active');
}

// Auto-slide every 2 seconds (2000 milliseconds)
setInterval(showNextSlide, 2000);


/*-------how it works-------*/
const slider = document.getElementById('stepsSlider');
let scrollAmount = 0;
const stepSpeed = 1; // Move 1px at a time for smooth effect
const resetPoint = slider.scrollWidth / 2; // Half the total width (if duplicated steps)

function autoSlide() {
  scrollAmount += stepSpeed; // Move by 1px
  if (scrollAmount >= resetPoint) {
    scrollAmount = 0; // Reset to beginning
  }
  slider.style.transform = `translateX(-${scrollAmount}px)`;
}

// Move every 10 milliseconds for continuous motion
setInterval(autoSlide, 10);

/------------------------------------------------------------diabeties page-------------------------------------------/
function toggleDropdown(id) {
    const element = document.getElementById(id);
    const isVisible = element.style.display === 'block';
  
    // Hide all others
    document.querySelectorAll('.dropdown-text').forEach(div => {
      div.style.display = 'none';
    });
  
    // Reset all icons
    document.querySelectorAll('.dropdown-icon').forEach(icon => {
      icon.style.transform = 'rotate(0deg)';
    });
  
    // Toggle clicked one
    if (!isVisible) {
      element.style.display = 'block';
      const icon = element.previousElementSibling.querySelector('.dropdown-icon');
      if (icon) icon.style.transform = 'rotate(180deg)';
    }
  }

/*------------------------------------------------------------vitality monitor page-------------------------------------------*/