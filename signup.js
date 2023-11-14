// Define a class to handle the registration form
class RegistrationForm {
  constructor() {
    // Get form elements by their IDs
    this.form = document.getElementById("registrationForm");
    this.usernameInput = document.getElementById("username");
    this.rememberMeCheckbox = document.getElementById("rememberMe");
  }

  // Method to validate the form
  validate() {
    // Implement your form validation logic here
    // Return true if the form is valid, otherwise false
    return true;
  }

  // Method to submit the form
  submit() {
    if (this.validate()) {
      // Implement your form submission logic here
      console.log("Form submitted successfully!");
    } else {
      console.log("Form validation failed!");
    }
  }
}

// Function to handle the registration button click
function register() {
  // Create an instance of the RegistrationForm class
  const registrationForm = new RegistrationForm();
  // Call the submit method to handle form submission
  registrationForm.submit();
}
