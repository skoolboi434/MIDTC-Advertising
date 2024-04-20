$(document).ready(function () {
  $('#btnRight').click(function (e) {
    var selectedOpts = $('#lstBox1 option:selected');
    if (selectedOpts.length == 0) {
      alert('Nothing to move.');
      e.preventDefault();
    }

    $('#lstBox2').append($(selectedOpts).clone());
    $(selectedOpts).remove();
    e.preventDefault();
  });

  $('#btnLeft').click(function (e) {
    var selectedOpts = $('#lstBox2 option:selected');
    if (selectedOpts.length == 0) {
      alert('Nothing to move.');
      e.preventDefault();
    }

    $('#lstBox1').append($(selectedOpts).clone());
    $(selectedOpts).remove();
    e.preventDefault();
  });
});

// Publication Calendar
const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const eventModal = document.getElementById('eventModal');
const eventDate = document.getElementById('eventDate');
const eventDescription = document.getElementById('eventDescription');
const saveEventBtn = document.getElementById('saveEventBtn');
let selectedDate = null;

// Generate calendar for the current month
generateCalendar(currentMonth, currentYear);

// Event listener for previous and next buttons
prevBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
});

// Function to generate the calendar
function generateCalendar(month, year) {
  monthYearElement.textContent = new Date(year, month).toLocaleString('default', { month: 'long' }) + ' ' + year;
  datesElement.innerHTML = '';

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startDay = firstDayOfMonth.getDay();
  const endDay = lastDayOfMonth.getDate();

  for (let i = 0; i < startDay; i++) {
    const dateElement = document.createElement('div');
    dateElement.classList.add('date');
    datesElement.appendChild(dateElement);
  }

  for (let day = 1; day <= endDay; day++) {
    const dateElement = document.createElement('div');
    dateElement.textContent = day;
    dateElement.classList.add('date');
    if (month === currentDate.getMonth() && year === currentDate.getFullYear() && day === currentDate.getDate()) {
      dateElement.classList.add('current-month');
    }
    dateElement.addEventListener('click', () => openEventModal(year, month, day));
    datesElement.appendChild(dateElement);
  }
}

// Function to open the event modal
function openEventModal(year, month, day) {
  selectedDate = new Date(year, month, day);
  eventDate.textContent = selectedDate.toDateString();
  eventDescription.value = getEventDescription(selectedDate) || '';
  eventModal.style.display = 'block';
}

// Function to close the event modal
function closeEventModal() {
  eventModal.style.display = 'none';
}

// Function to save the event
function saveEvent() {
  const description = eventDescription.value;
  setEventDescription(selectedDate, description);

  closeEventModal();
}

// Event listener for save button
saveEventBtn.addEventListener('click', saveEvent);

// Function to get event description from local storage
function getEventDescription(date) {
  const key = date.toDateString();
  return localStorage.getItem(key);
}

// Function to save event description to local storage
function setEventDescription(date, description) {
  const key = date.toDateString();
  localStorage.setItem(key, description);
}

// Event listener for modal close button
const closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click', closeEventModal);

// Event listener for outside modal click
window.addEventListener('click', event => {
  if (event.target === eventModal) {
    closeEventModal();
  }
});

function toggleSearchContainer() {
  var searchContainer = document.getElementById('search-container');
  if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
    searchContainer.style.display = 'block';
  } else {
    searchContainer.style.display = 'none';
  }
}

function toggleNewCodePanel() {
  var newCodePanel = document.getElementById('new-code-panel');
  if (newCodePanel.style.display === 'none' || newCodePanel.style.display === '') {
    newCodePanel.style.display = 'block';
  } else {
    newCodePanel.style.display = 'none';
  }
}

function closeCodePanel() {
  var newCodePanel = document.getElementById('new-code-panel');
  if (newCodePanel.style.display === 'block') {
    newCodePanel.style.display = 'none';
  } else {
    newCodePanel.style.display = 'none';
  }
}

// Slide Out Tab

this.$slideOut = $('#slideOut');

// Slideout show
this.$slideOut.find('.slideOutTab').on('click', function () {
  $('#slideOut').toggleClass('showSlideOut');
});

const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next'
};

//remove class from a set of items
const removeClasses = (elemSet, className) => {
  elemSet.forEach(elem => {
    elem.classList.remove(className);
  });
};

//return exact parent node of the element
const findParent = (elem, parentClass) => {
  let currentNode = elem;

  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }

  return currentNode;
};

//get active button step number
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep = activeStepNum => {
  const buttons = document.querySelectorAll('.multisteps-form__progress-btn');
  const activeButton = document.querySelector('.js-active');

  // Remove the 'js-active' class from the currently active button
  activeButton.classList.remove('js-active');

  // Add the 'js-active' class to the clicked button
  buttons[activeStepNum].classList.add('js-active');
};

// STEPS BAR CLICK FUNCTION
DOMstrings.stepsBtns.forEach((button, index) => {
  button.addEventListener('click', () => {
    setActiveStep(index);
  });
});

//get active panel
const getActivePanel = () => {
  let activePanel;

  DOMstrings.stepFormPanels.forEach(elem => {
    if (elem.classList.contains('js-active')) {
      activePanel = elem;
    }
  });

  return activePanel;
};

//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {
  //remove active class from all the panels
  removeClasses(DOMstrings.stepFormPanels, 'js-active');

  //show active panel
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === activePanelNum) {
      elem.classList.add('js-active');

      setFormHeight(elem);
    }
  });
};

//set form height equal to current panel height
const formHeight = activePanel => {
  const activePanelHeight = activePanel.offsetHeight;

  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
};

const setFormHeight = () => {
  const activePanel = getActivePanel();

  formHeight(activePanel);
};

//STEPS BAR CLICK FUNCTION
DOMstrings.stepsBar.addEventListener('click', e => {
  //check if click target is a step button
  const eventTarget = e.target;

  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }

  //get active button step number
  const activeStep = getActiveStep(eventTarget);

  //set all steps before clicked (and clicked too) to active
  setActiveStep(activeStep);

  //open active panel
  setActivePanel(activeStep);
});

//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener('click', e => {
  const eventTarget = e.target;

  //check if we clicked on `PREV` or NEXT` buttons or arrow buttons
  if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`) || eventTarget.classList.contains('fa-chevron-left') || eventTarget.classList.contains('fa-chevron-right'))) {
    return;
  }

  //find active panel
  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);

  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

  //set active step and active panel onclick
  if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains('fa-chevron-left')) {
    activePanelNum--;
  } else {
    activePanelNum++;
  }

  // Ensure activePanelNum stays within bounds
  activePanelNum = Math.max(0, Math.min(activePanelNum, DOMstrings.stepFormPanels.length - 1));

  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);
});

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);

document.addEventListener('DOMContentLoaded', function () {
  const panels = document.querySelectorAll('.multisteps-form__panel');
  const arrowLeft = document.querySelector('.multistep-form__arrow .fa-chevron-left');
  const arrowRight = document.querySelector('.multistep-form__arrow .fa-chevron-right');

  // Event listener for left arrow button
  arrowLeft.addEventListener('click', function () {
    const currentPanel = document.querySelector('.multisteps-form__panel.js-active');
    const currentIndex = Array.from(panels).indexOf(currentPanel);
    const nextIndex = Math.max(currentIndex - 1, 0);
    panels[currentIndex].classList.remove('js-active');
    panels[nextIndex].classList.add('js-active');
  });

  // Event listener for right arrow button
  arrowRight.addEventListener('click', function () {
    const currentPanel = document.querySelector('.multisteps-form__panel.js-active');
    const currentIndex = Array.from(panels).indexOf(currentPanel);
    const nextIndex = Math.min(currentIndex + 1, panels.length - 1);
    panels[currentIndex].classList.remove('js-active');
    panels[nextIndex].classList.add('js-active');
  });
});

function openSection(evt, sectionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(sectionName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// GL Code String Builder
var buttonsInDiv2 = [];

// Function to create input fields
function createInputField(buttonId) {
  var colDiv = document.createElement('div');
  colDiv.className = 'col-2';

  var label = document.createElement('label');
  label.textContent = buttonId.replace('drag', '');
  label.setAttribute('for', buttonId);

  var input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control';
  input.name = buttonId.replace('drag', ''); // Use buttonId to name inputs
  input.id = buttonId.replace('drag', ''); // Use buttonId as input id

  // Determine initial disabled state based on the location of the button
  input.disabled = !buttonsInDiv2.includes(buttonId);

  colDiv.appendChild(label);
  colDiv.appendChild(input);

  return colDiv;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  var draggedElement = document.getElementById(data);
  var dropZone = ev.target;

  // Check if the dropped element is a button and if the dropZone is "div2"
  if (draggedElement.tagName === 'BUTTON' && dropZone.id === 'div2') {
    // Move the button to the drop zone
    dropZone.appendChild(draggedElement);

    // Update the buttonsInDiv2 array to reflect the new order of buttons
    buttonsInDiv2 = Array.from(dropZone.querySelectorAll('button')).map(function (button) {
      return button.id;
    });

    // Update input fields based on buttonsInDiv2 array
    var inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear existing input fields
    buttonsInDiv2.forEach(function (buttonId) {
      inputContainer.appendChild(createInputField(buttonId));
    });

    // Enable the corresponding input field
    var input = document.getElementById(draggedElement.id.replace('drag', ''));
    if (input) {
      input.disabled = false;
    }
  }

  // Check if the dropZone is "div1"
  if (dropZone.id === 'div1') {
    // Move the button back to the drop zone
    dropZone.appendChild(draggedElement);

    // Disable the corresponding input field
    var input = document.getElementById(draggedElement.id.replace('drag', ''));
    if (input) {
      input.disabled = true;
    }
  }
}

// Observe changes in div2 to detect button removal
var div2Observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    mutation.removedNodes.forEach(function (node) {
      if (node.tagName === 'BUTTON') {
        // Update the buttonsInDiv2 array to reflect the new order of buttons
        buttonsInDiv2 = Array.from(document.getElementById('div2').querySelectorAll('button')).map(function (button) {
          return button.id;
        });

        // Update input fields based on buttonsInDiv2 array
        var inputContainer = document.getElementById('inputContainer');
        inputContainer.innerHTML = ''; // Clear existing input fields
        buttonsInDiv2.forEach(function (buttonId) {
          inputContainer.appendChild(createInputField(buttonId));
        });
      }
    });
  });
});

// Start observing changes in div2
div2Observer.observe(document.getElementById('div2'), { childList: true });

// Observe changes in div1 to detect button addition
var div1Observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    mutation.addedNodes.forEach(function (node) {
      if (node.tagName === 'BUTTON') {
        // Disable the corresponding input field
        var input = document.getElementById(node.id.replace('drag', ''));
        if (input) {
          input.disabled = true;
        }
      }
    });
  });
});

// Start observing changes in div1
div1Observer.observe(document.getElementById('div1'), { childList: true });

// Multistep
function next_step() {
  // Get the current active section
  var currentSection = document.querySelector('.multistep-content:not(.hide)');

  // Find the next section
  var nextSection = currentSection.nextElementSibling;

  // If there is no next section, exit the function
  if (!nextSection) return;

  // Remove the 'hide' class from the next section
  nextSection.classList.remove('hide');

  // Get all progress icons
  var progressIcons = document.querySelectorAll('.progress-icons > .progress-dot-container > div');

  // Find the index of the current active progress icon
  var currentIndex;
  progressIcons.forEach(function (icon, index) {
    if (icon.classList.contains('progress-active')) {
      currentIndex = index;
    }
  });

  // If the current index is valid and there is a next progress icon, add 'progress-active' class to it
  if (currentIndex !== undefined && progressIcons[currentIndex + 1]) {
    progressIcons[currentIndex + 1].classList.add('progress-active');
  }

  // Hide the current section
  currentSection.classList.add('hide');
}

function previous_step() {
  // Get the current active section
  var currentSection = document.querySelector('.multistep-content:not(.hide)');

  // Find the previous section
  var previousSection = currentSection.previousElementSibling;

  // If there is no previous section, exit the function
  if (!previousSection) return;

  // Remove the 'hide' class from the previous section
  previousSection.classList.remove('hide');

  // Get all progress icons
  var progressIcons = document.querySelectorAll('.progress-icons > .progress-dot-container > div');

  // Find the index of the current active progress icon
  var currentIndex;
  progressIcons.forEach(function (icon, index) {
    if (icon.classList.contains('progress-active')) {
      currentIndex = index;
    }
  });

  // If the current index is valid and there is a previous progress icon, remove 'progress-active' class from it
  if (currentIndex !== undefined && progressIcons[currentIndex - 1]) {
    progressIcons[currentIndex].classList.remove('progress-active');
  }

  // Hide the current section
  currentSection.classList.add('hide');
}

function create_product() {
  // Get the current active section
  var currentSection = document.querySelector('.multistep-content:not(.hide)');

  // Find the last section
  var lastSection = document.querySelector('.multistep-content:last-of-type');

  // If the current section is the last section, exit the function
  if (currentSection === lastSection) return;

  // Remove the 'hide' class from the last section
  lastSection.classList.remove('hide');

  // Get all progress icons
  var progressIcons = document.querySelectorAll('.progress-icons > div');

  // Add the 'progress-active' class to the last progress icon
  progressIcons[progressIcons.length - 1].classList.add('progress-active');

  // Hide the current section
  currentSection.classList.add('hide');
}

// Function to adjust toggle width based on the longest option text
// function adjustToggleWidth() {
//   var toggleOptionsLeft = document.querySelectorAll('.toggle-option-left');
//   var toggleOptionsRight = document.querySelectorAll('.toggle-option-right');
//   var maxWidthLeft = 0;
//   var maxWidthRight = 0;

//   toggleOptionsLeft.forEach(function (option) {
//     maxWidthLeft = Math.max(maxWidthLeft, option.offsetWidth);
//   });

//   toggleOptionsRight.forEach(function (option) {
//     maxWidthRight = Math.max(maxWidthRight, option.offsetWidth);
//   });

//   var maxWidth = Math.max(maxWidthLeft, maxWidthRight);
//   var labelWidth = maxWidth + 20; // Add some padding

//   var labels = document.querySelectorAll('.check-toggle-round-flat + label');
//   labels.forEach(function (label) {
//     label.style.width = labelWidth + 'px';
//   });

//   var toggleAfterElements = document.querySelectorAll('.check-toggle-round-flat + label:after');
//   toggleAfterElements.forEach(function (element) {
//     element.style.width = maxWidth + 12 + 'px'; // Adjust the width of ::after element
//   });
// }

// // Call the function initially and whenever the window is resized
// adjustToggleWidth();
// window.addEventListener('resize', adjustToggleWidth);

// document.addEventListener('DOMContentLoaded', function () {
//   var repeatingCalendar = document.querySelector('.repeating-calendar');
//   var nonRepeatingCalendar = document.querySelector('.non-repeating-calendar');

//   document.addEventListener('click', function (event) {
//     if (event.target.classList.contains('toggle-option-right')) {
//       repeatingCalendar.classList.remove('active');
//       nonRepeatingCalendar.classList.add('active');
//       console.log('Clicked');
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var toggleOptionRightElements = document.querySelectorAll('.toggle-option-right');
//   console.log(toggleOptionRightElements);
// });
