$('.color-block').click(function () {
  $(this).toggleClass('selected');
});

// Hide CMYK on Select
document.getElementById('fontColorSelect').addEventListener('change', function () {
  var selectedValue = this.value;
  var colorsContainer = document.querySelector('.colors-container');

  if (selectedValue === 'spot-color') {
    colorsContainer.style.display = 'block';
  } else {
    colorsContainer.style.display = 'none';
  }
});

// Hide Solid Fill
document.getElementById('textOuline').addEventListener('change', function () {
  var selectedValue = this.value;
  var solidFillBtn = document.querySelector('.color-fill');

  if (selectedValue === 'solid-fill') {
    solidFillBtn.style.display = 'block';
  } else {
    solidFillBtn.style.display = 'none';
  }
});

// Text Outline Range Slider
document.addEventListener('DOMContentLoaded', function () {
  const rangeInput = document.getElementById('transparencyRange');
  const textInput = document.getElementById('transparencyText');

  // Function to update the text input with the value of the range input
  function updateTextInput() {
    textInput.value = rangeInput.value + '%';
  }

  // Function to update the range input with the value of the text input
  function updateRangeInput() {
    const value = parseInt(textInput.value);
    if (!isNaN(value)) {
      rangeInput.value = Math.max(Math.min(value, parseInt(rangeInput.max)), parseInt(rangeInput.min));
    }
  }

  // Event listeners to synchronize range and text inputs
  rangeInput.addEventListener('input', updateTextInput);
  textInput.addEventListener('input', updateRangeInput);
});

// Gradient Presets
document.addEventListener('DOMContentLoaded', function () {
  const gradientSelectorButton = document.getElementById('gradientSelector');
  const gradientMenu = document.querySelector('.dropdown-menu');

  gradientSelectorButton.addEventListener('click', function () {
    gradientMenu.style.display = gradientMenu.style.display === 'grid' ? 'none' : 'grid';
  });

  // Close dropdown menu when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!gradientMenu.contains(event.target) && event.target !== gradientSelectorButton) {
      gradientMenu.style.display = 'none';
    }
  });
});

// Gradient Preset options
// Function to populate the dropdown menu with default gradient presets
const gradientPresets = {
  linear: [
    { name: 'Linear Gradient 1', value: 'linear-gradient(to right, #ff0000, #0000ff)' },
    { name: 'Linear Gradient 2', value: 'linear-gradient(to left, #00ff00, #ff0000)' },
    { name: 'Linear Gradient 3', value: 'linear-gradient(to bottom, #000000, #ffffff)' }
  ],
  radial: [
    { name: 'Radial Gradient 1', value: 'radial-gradient(#ff0000, #0000ff)' },
    { name: 'Radial Gradient 2', value: 'radial-gradient(#00ff00, #ff0000)' },
    { name: 'Radial Gradient 3', value: 'radial-gradient(#000000, #ffffff)' }
  ],
  diagonal: [
    { name: 'Diagonal Gradient 1', value: 'linear-gradient(45deg, #ff0000, #0000ff)' },
    { name: 'Diagonal Gradient 2', value: 'linear-gradient(45deg, #00ff00, #ff0000)' },
    { name: 'Diagonal Gradient 3', value: 'linear-gradient(45deg, #000000, #ffffff)' }
  ]
};

// Function to populate the dropdown menu with gradient presets based on selected type
function populateGradientPresets() {
  const gradientMenu = document.querySelector('.dropdown-menu');
  gradientMenu.innerHTML = ''; // Clear existing options

  const selectedType = document.getElementById('gradientType').value;
  const presets = gradientPresets[selectedType];

  presets.forEach(gradient => {
    const option = document.createElement('div');
    option.classList.add('dropdown-item');
    option.style.background = gradient.value; // Set background color to the gradient
    option.addEventListener('click', function () {
      applyGradientPreset(gradient.value);
    });
    gradientMenu.appendChild(option);
  });
}

// Function to apply the selected gradient preset
function applyGradientPreset(presetValue) {
  // Apply the selected gradient value to your element here
}

// Call the function to populate the dropdown with default presets
populateGradientPresets();

// Event listener to update presets when the select field changes
document.getElementById('gradientType').addEventListener('change', populateGradientPresets);

// Toggle Text Effects
var effectToggle = document.querySelectorAll('.effect-toggle');

// Loop through each button and add click event listener
effectToggle.forEach(function (button) {
  button.addEventListener('click', function () {
    // Remove 'active-step' class from all buttons
    effectToggle.forEach(function (btn) {
      btn.classList.remove('active');
    });

    // Add 'active-step' class to the clicked button
    this.classList.add('active');
  });
});
