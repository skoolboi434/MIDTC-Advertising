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
    { name: 'Linear Gradient 1', value: 'linear-gradient(to right, #fff, #f1c40f)' },
    { name: 'Linear Gradient 2', value: 'linear-gradient(to left, #fff, #00FFFF)' },
    { name: 'Linear Gradient 3', value: 'linear-gradient(to bottom, #fff, #FF00FF)' },
    { name: 'Linear Gradient 4', value: 'linear-gradient(to bottom, #fff, #000000)' }
  ],
  radial: [
    { name: 'Radial Gradient 1', value: 'radial-gradient(#fff, #f1c40f)' },
    { name: 'Radial Gradient 2', value: 'radial-gradient(#fff, #00FFFF)' },
    { name: 'Radial Gradient 3', value: 'radial-gradient(#fff, #FF00FF)' },
    { name: 'Radial Gradient 3', value: 'radial-gradient(#fff, #000000)' }
  ],
  diagonal: [
    { name: 'Diagonal Gradient 1', value: 'linear-gradient(45deg, #fff, #f1c40f)' },
    { name: 'Diagonal Gradient 2', value: 'linear-gradient(45deg, #fff, #00FFFF)' },
    { name: 'Diagonal Gradient 3', value: 'linear-gradient(45deg, #fff, #FF00FF)' },
    { name: 'Diagonal Gradient 3', value: 'linear-gradient(45deg, #fff, #000000)' }
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

var effectContents = document.querySelectorAll('.effects-content');

// Add click event listeners to progress buttons
effectToggle.forEach(function (button, index) {
  button.addEventListener('click', function () {
    // Hide all step form contents
    effectContents.forEach(function (content) {
      content.classList.add('hide');
    });

    // Show the corresponding step form content
    effectContents[index].classList.remove('hide');
    effectContents[index].classList.add('active');

    // Remove 'active' class from the previous step form content
    if (index > 0) {
      effectContents[index - 1].classList.remove('active');
    }

    // Update progress buttons
    effectToggle.forEach(function (btn) {
      btn.classList.remove('active');
    });
    this.classList.add('active');
  });
});

$.fn.colorSelect = function () {
  function build($select) {
    var html = '';
    var listItems = '';

    $select.find('option').each(function () {
      listItems += '' + '<li style="background:' + this.value + '" data-colorVal="' + this.value + '">' + '<span>' + this.text + '</span>' + '</li>';
    });

    html = '' + '<div class="color-select">' + '<span>Select one</span>' + '<ul>' + listItems + '</ul>' + '</div>';

    return html;
  }

  this.each(function () {
    var $this = $(this);

    $this.hide();

    $this.after(build($this));
  });
};

$(document)
  .on('click', '.color-select > span', function () {
    $(this).siblings('ul').toggle();
  })
  .on('click', '.color-select li', function () {
    var $this = $(this);
    var color = $this.attr('data-colorVal');
    var colorText = $this.find('span').text();
    var $value = $this.parents('.color-select').find('span:first');
    var $select = $this.parents('.color-select').prev('select');

    $value.text(colorText);
    $value.append('<span style="background:' + color + '"></span>');
    $this.parents('ul').hide();
    $select.val(color);
  });

$(function () {
  $('[data-colorselect]').colorSelect();
});
