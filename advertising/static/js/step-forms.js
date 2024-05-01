// Get all progress buttons
var progressButtons = document.querySelectorAll('.progress-btn');

// Loop through each button and add click event listener
progressButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Remove 'active-step' class from all buttons
    progressButtons.forEach(function (btn) {
      btn.classList.remove('active-step');
    });

    // Add 'active-step' class to the clicked button
    this.classList.add('active-step');
  });
});

// Get all progress buttons and step form content divs
var progressButtons = document.querySelectorAll('.progress-btn');
var stepFormContents = document.querySelectorAll('.step-form-content');
var arrowButtons = document.querySelectorAll('.arrow');

// Function to move to the next step
function moveToNextStep() {
  // Find the index of the currently active step
  var currentIndex = Array.from(stepFormContents).findIndex(function (content) {
    return content.classList.contains('active');
  });

  // If there's a next step
  if (currentIndex < stepFormContents.length - 1) {
    // Remove 'active' class from current step
    stepFormContents[currentIndex].classList.remove('active');

    // Add 'hide' class to current step
    stepFormContents[currentIndex].classList.add('hide');

    // Show the next step
    stepFormContents[currentIndex + 1].classList.remove('hide');
    stepFormContents[currentIndex + 1].classList.add('active');

    // Update progress buttons
    progressButtons.forEach(function (button) {
      button.classList.remove('active-step');
    });
    progressButtons[currentIndex + 1].classList.add('active-step');
  }
}

// Function to move to the previous step
function moveToPreviousStep() {
  // Find the index of the currently active step
  var currentIndex = Array.from(stepFormContents).findIndex(function (content) {
    return content.classList.contains('active');
  });

  // If there's a previous step
  if (currentIndex > 0) {
    // Remove 'active' class from current step
    stepFormContents[currentIndex].classList.remove('active');

    // Add 'hide' class to current step
    stepFormContents[currentIndex].classList.add('hide');

    // Show the previous step
    stepFormContents[currentIndex - 1].classList.remove('hide');
    stepFormContents[currentIndex - 1].classList.add('active');

    // Update progress buttons
    progressButtons.forEach(function (button) {
      button.classList.remove('active-step');
    });
    progressButtons[currentIndex - 1].classList.add('active-step');
  }
}

// Add click event listeners to arrow buttons
arrowButtons[0].addEventListener('click', moveToPreviousStep); // Left arrow
arrowButtons[1].addEventListener('click', moveToNextStep); // Right arrow

// Add click event listeners to progress buttons
progressButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    // Hide all step form contents
    stepFormContents.forEach(function (content) {
      content.classList.add('hide');
    });

    // Show the corresponding step form content
    stepFormContents[index].classList.remove('hide');
    stepFormContents[index].classList.add('active');

    // Remove 'active' class from the previous step form content
    if (index > 0) {
      stepFormContents[index - 1].classList.remove('active');
    }

    // Update progress buttons
    progressButtons.forEach(function (btn) {
      btn.classList.remove('active-step');
    });
    this.classList.add('active-step');
  });
});
