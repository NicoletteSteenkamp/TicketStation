// Define the AuthSystem class
class AuthSystem {
  // Implement your authentication logic here
  // For example: login, register, etc.
  login(username, password) {
    // Implement login logic
    console.log(`User ${username} logged in`);
  }
  register(user) {
    console.log(`User ${user.username} registered`);

    // Display a welcome message
    alert(`Welcome, ${user.username}!`);

    window.location.href = "index.html";
  }
  register(user) {
    // Implement registration logic
    console.log(`User ${user.username} registered`);
  }
}

class RegistrationForm {
  constructor(authSystem) {
    this.authSystem = authSystem;

    this.form = document.getElementById("registrationForm");

    this.usernameInput = document.getElementById("username");
    this.emailInput = document.getElementById("email");
    this.passwordInput = document.getElementById("password");
    this.repeatPasswordInput = document.getElementById("repeatPassword");
    this.countrySelect = document.getElementById("country");
    this.genderSelect = document.getElementById("gender");
    this.rememberMeCheckbox = document.getElementById("rememberMe");

    // Check if the form element exists before attaching the event listener
    if (this.form) {
      this.form.addEventListener("submit", this.submit.bind(this));
    }
  }

  // Method to validate the form
  validate() {
    if (
      this.usernameInput.value &&
      this.emailInput.value &&
      this.passwordInput.value &&
      this.repeatPasswordInput.value &&
      this.countrySelect.value &&
      this.genderSelect.value
    ) {
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

  // Method to handle form submission
  submit(event) {
    event.preventDefault();

    if (this.validate()) {
      const user = {
        username: this.usernameInput.value,
        email: this.emailInput.value,
        password: this.passwordInput.value,
        country: this.countrySelect.value,
        gender: this.genderSelect.value,
      };

      this.authSystem.register(user);
    } else {
      console.log("Form validation failed!");
    }
  }
}

// Run the registration function when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Create an instance of the AuthSystem class
  const authSystem = new AuthSystem();
  // Create an instance of the RegistrationForm class and pass the authSystem instance
  const registrationForm = new RegistrationForm(authSystem);
});
