document
  .getElementById("registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    // Check if the user already exists in local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      alert("User already exists. Please choose a different username.");
    } else {
      // Register the user
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful. You can now log in.");
    }

    // Clear the registration form
    document.getElementById("registration-form").reset();
  });

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Check if the user exists in local storage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    alert("Login successful. Welcome, " + username + "!");
  } else {
    alert("Invalid username or password. Please try again.");
  }

  // Clear the login form
  document.getElementById("login-form").reset();
});
