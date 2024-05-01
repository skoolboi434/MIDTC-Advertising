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
