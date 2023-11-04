// AuthSystem class for user login
class AuthSystem {
  constructor() {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
  }

  login(username, password) {
    // Convert the provided username to lowercase (or uppercase)
    const usernameLower = username.toLowerCase(); // Use .toLowerCase() to make it case-insensitive

    // Check if a user with the provided username (case-insensitive) and password exists in the users array
    const user = this.users.find(
      (user) =>
        user.username.toLowerCase() === usernameLower &&
        user.password === password
    );

    if (user) {
      return `Login successful. Welcome, ${user.username}!`;
    } else {
      return "Invalid username or password. Please try again, or sign-up";
    }
  }
}
