// SIGN UP JS

// RegistrationForm class for handling user registration
class RegistrationForm {
  constructor(authSystem) {
    this.authSystem = authSystem;

    // Get form elements by their IDs
    this.form = document.getElementById("registrationForm");
    this.usernameInput = document.getElementById("username");
    this.emailInput = document.getElementById("email");
    this.passwordInput = document.getElementById("password");
    this.repeatPasswordInput = document.getElementById("repeatPassword");
    this.countrySelect = document.getElementById("country");
    this.genderSelect = document.getElementById("gender");
    this.rememberMeCheckbox = document.getElementById("rememberMe");

    // Registering the submit method to handle form submission
    this.form.addEventListener("submit", this.submit.bind(this));
  }

  // Method to validate the form
  validate() {
    // Implement your form validation logic here
    // Check if the required fields are not empty
    if (
      this.usernameInput.value &&
      this.emailInput.value &&
      this.passwordInput.value &&
      this.repeatPasswordInput.value &&
      this.countrySelect.value &&
      this.genderSelect.value
    ) {
      // Check if the password and repeat password match
      if (this.passwordInput.value !== this.repeatPasswordInput.value) {
        alert("Passwords do not match");
        return false;
      }
      return true;
    } else {
      alert("Please fill in all the required fields");
      return false;
    }
  }

  // Method to submit the form
  submit() {
    if (this.validate()) {
      // Create an object to store user information
      const user = {
        username: this.usernameInput.value,
        email: this.emailInput.value,
        password: this.passwordInput.value,
        country: this.countrySelect.value,
        gender: this.genderSelect.value,
      };

      // Call the register method of AuthSystem to handle user registration
      this.authSystem.register(user);

      // Implement your form submission logic here (e.g., redirect to login page)
      console.log("Form submitted successfully!");
    } else {
      console.log("Form validation failed!");
    }
  }
}

// Function to handle the registration button click
function register() {
  // Create an instance of the AuthSystem class
  const authSystem = new AuthSystem();
  // Create an instance of the RegistrationForm class and pass the authSystem instance
  const registrationForm = new RegistrationForm(authSystem);
}
