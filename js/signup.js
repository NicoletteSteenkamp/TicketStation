// Auth Class (unchanged)
class Auth {
  constructor() {
    document.querySelector("body").style.display = "none";
    const auth = localStorage.getItem("auth");
    this.validateAuth(auth);
  }

  validateAuth(auth) {
    if (auth !== "1") {
      if (window.location.pathname !== "/login.html") {
        window.location.replace("/login.html");
      } else {
        document.querySelector("body").style.display = "block";
      }
    } else {
      document.querySelector("body").style.display = "block";
    }
  }

  logOut() {
    localStorage.removeItem("auth");
    window.location.replace("/login.html");
  }
}

// SignUp Class
class SignUp {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateOnSubmit();
  }

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
        // Simulate successful signup (no backend/API)
        alert("Registration successful!");
        // Redirect to the booking page
        window.location.replace("/booking.html");
      }
    });
  }

  validateFields(field) {
    // Validation logic (unchanged)
  }

  setStatus(field, message, status) {
    // Status setting logic (unchanged)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const auth = new Auth();

  // Get the signup form
  const signUpForm = document.querySelector("form");
  if (signUpForm) {
    // Define form fields
    const signUpFields = [
      "username",
      "email",
      "password",
      "repeat-password",
      "country",
      "gender",
    ];
    // Create a SignUp validator instance
    const signUpValidator = new SignUp(signUpForm, signUpFields);
  }
});
