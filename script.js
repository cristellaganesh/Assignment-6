
  alert("Welcome to my personal portfolio!");

function showContact() 
{ alert("Redirecting to a contact form..."); }

document.getElementById("btn").addEventListener("click", showContact);

// The start of my contact form 

	// Identifying or grabbing things from my HTML in order to 'link them'

const form = document.getElementById("contactForm");

// The complusory ID's needed 
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");


// Errors that could go wrong if info is typed incorrectly
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

// Simple regex for letters only
const nameRegex = /^[A-Za-z\s]+$/;

// Email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// The pop up/modal message seen and closed when the form is submitted
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("closeBtn");

// The validation functions 

// Validate name as user types
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
  } else if (!nameRegex.test(nameInput.value)) {
    nameError.textContent = 'Name can only contain letters';
  } else {
    nameError.textContent = '';
  }
});

// Validate email as user types
emailInput.addEventListener('input', () => {
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
  } else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Enter a valid email';
  } else {
    emailError.textContent = '';
  }
});

// Validate message as user types
messageInput.addEventListener('input', () => {
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message cannot be empty';
  } else {
    messageError.textContent = '';
  }
});


// Get the user's message and remove extra spaces
function validateMessage() {
    const message = messageInput.value.trim();
	
// Check if message is empty and checks the minimum length of the message
    if (message === "") {
        messageError.textContent = "Message is required";
        return false;
    } else if (message.length < 10) {
        messageError.textContent = "Minimum 10 characters";
        return false;
    } else {
        messageError.textContent = "";
        return true;
    }
}

// Real time validation for the form - used with a bit of research and help :(
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);



// adding event listeners when submitting the form when valid/correct 
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        modal.style.display = "block";

    
    }
});



// JS In relation to closing the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};