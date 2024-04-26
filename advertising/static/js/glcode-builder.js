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
