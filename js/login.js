// Login Class
class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateOnSubmit();
  }

  // Validate form on submit
  validateOnSubmit() {
    let self = this;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      var error = 0;
      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        if (self.validateFields(input) === false) {
          error++;
        }
      });
      if (error === 0) {
        // Simulate successful login (no backend/API)
        localStorage.setItem("auth", "1");
        alert("Login successful!"); // You might want to redirect the user instead

        // Redirect to booking.html
        window.location.replace("/booking.html");
      }
    });
  }

  // Validate individual form fields
  validateFields(field) {
    // Validation logic (unchanged)
  }

  // Set status (success or error) for a field
  setStatus(field, message, status) {
    // Status setting logic (unchanged)
  }
}

// Event listener when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the login form
  const form = document.querySelector(".signin-form");
  if (form) {
    // Define form fields
    const fields = ["email", "password"];
    // Create a Login validator instance
    const validator = new Login(form, fields);
  }

  // Check authentication status when the page loads
  const auth = new Auth();
});
