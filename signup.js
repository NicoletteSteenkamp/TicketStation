// AuthSystem class for user login
class AuthSystem {
  constructor() {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
  }

  // Method to validate user login
  login(username, password) {
    const usernameLower = username.toLowerCase(); // Convert to lowercase for case-insensitive comparison

    const user = this.users.find(
      (user) =>
        user.username.toLowerCase() === usernameLower &&
        user.password === password
    );

    if (user) {
      return `Login successful. Welcome, ${user.username}!`;
    } else {
      return "Invalid username or password. Please try again, or sign up.";
    }
  }
}

class LoginForm {
  constructor(authSystem) {
    this.authSystem = authSystem;

    // Selecting form elements
    this.form = document.querySelector("form");
    this.nameInput = document.querySelector('input[type="text"]');
    this.passwordInput = document.querySelector('input[type="password"]');
    this.rememberCheckbox = document.querySelector('input[type="checkbox"]');
    this.button = document.querySelector(".con-button-style"); // Updated button class name

    // Registering the submitForm method as the form's submit event handler
    this.form.addEventListener("submit", this.submitForm.bind(this));
  }

  // Method to validate the form inputs
  validateForm() {
    const username = this.nameInput.value.trim();
    const password = this.passwordInput.value.trim();

    if (!username || !password) {
      throw new Error("Please fill in both username and password fields.");
    }
  }

  // Method to handle form submission
  submitForm(event) {
    event.preventDefault(); // Prevent form submission to avoid page refresh

    try {
      this.validateForm();
      const username = this.nameInput.value.trim();
      const password = this.passwordInput.value.trim();
      const result = this.authSystem.login(username, password);
      alert(result);
      this.clearForm();
      // Redirect to the "index.html" page
      window.location.href = "index.html";
    } catch (error) {
      alert(error.message);
    }
  }

  // Method to clear the form inputs
  clearForm() {
    this.nameInput.value = "";
    this.passwordInput.value = "";
    this.rememberCheckbox.checked = false;
  }
}

// Create an instance of the AuthSystem class
const authSystem = new AuthSystem();

// Create an instance of the LoginForm class and pass the authSystem instance
const loginForm = new LoginForm(authSystem);
