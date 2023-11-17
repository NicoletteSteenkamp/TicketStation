class LoginForm {
  constructor(authSystem) {
    this.authSystem = authSystem;

    // Selecting form elements
    this.form = document.querySelector("form");
    this.nameInput = document.querySelector('input[type="text"]');
    this.passwordInput = document.querySelector('input[type="password"]');
    this.rememberCheckbox = document.querySelector('input[type="checkbox"]');
    this.button = document.querySelector(".con-button-style");

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
  submitForm = async (event) => {
    event.preventDefault();

    try {
      this.validateForm();
      const username = this.nameInput.value.trim();
      const password = this.passwordInput.value.trim();
      const result = await this.authSystem.login(username, password);
      alert(result);
      this.clearForm();
      // Redirect to the "index.html" page
      window.location.href = "index.html";
    } catch (error) {
      alert(error.message);
    }
  };

  // Method to clear the form inputs
  clearForm() {
    this.nameInput.value = "";
    this.passwordInput.value = "";
    this.rememberCheckbox.checked = false;
  }
}
