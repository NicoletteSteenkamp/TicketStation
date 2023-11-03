// User class to represent a user with username and password
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

// AuthSystem class for user registration and login
class AuthSystem {
  constructor() {
    // Initialize the users array with data from local storage or an empty array
    this.users = JSON.parse(localStorage.getItem("users")) || [];
  }

  // Method for user registration
  register(username, password) {
    // Check if the user already exists in the users array
    const existingUser = this.users.find((user) => user.username === username);

    if (existingUser) {
      return "User already exists. Please choose a different username.";
    }

    // Create a new user object and add it to the users array
    const newUser = new User(username, password);
    this.users.push(newUser);

    // Store the updated user data in local storage
    localStorage.setItem("users", JSON.stringify(this.users));

    return "Registration successful. You can now log in.";
  }

  // Method for user login
  login(username, password) {
    // Check if a user with the provided username and password exists in the users array
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      return `Login successful. Welcome, ${username}!`;
    } else {
      return "Invalid username or password. Please try again.";
    }
  }
}

// Create an instance of AuthSystem to manage user authentication
const auth = new AuthSystem();

// Event listener for user registration form
document
  .getElementById("registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    const result = auth.register(username, password);
    alert(result);
    document.getElementById("registration-form").reset();
  });

// Event listener for user login form
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const result = auth.login(username, password);
  alert(result);
  document.getElementById("login-form").reset();
});
