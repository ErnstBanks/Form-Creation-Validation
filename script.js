// Setup and Initial Code Structure
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission Event Listener
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        handleFormSubmission(feedbackDiv);
    });
});

// Function to handle form submission
function handleFormSubmission(feedbackDiv) {
    const username = getInputValue('username');
    const email = getInputValue('email');
    const password = getInputValue('password');

    const { isValid, messages } = validateInputs(username, email, password);

    displayFeedback(feedbackDiv, isValid, messages);
}

// Function to retrieve input values
function getInputValue(inputId) {
    return document.getElementById(inputId).value.trim();
}

// Function to validate inputs
function validateInputs(username, email, password) {
    let isValid = true; // Initialize validation status
    const messages = []; // Array to store validation messages

    // Username Validation
    if (username.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
    }

    // Email Validation
    if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push("Email must contain '@' and a domain.");
    }

    // Password Validation
    if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
    }

    return { isValid, messages }; // Return validation results
}

// Function to display feedback
function displayFeedback(feedbackDiv, isValid, messages) {
    feedbackDiv.style.display = "block"; // Make feedbackDiv visible
    if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745"; // Green for success
    } else {
        feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with line breaks
        feedbackDiv.style.color = "#dc3545"; // Red for errors
    }
}
