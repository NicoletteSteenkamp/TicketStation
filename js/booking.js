function showCheckoutForm() {
    // Validate the booking form
    if (validateBookingForm()) {
        // Hide booking form
        document.getElementById("booking-form").style.display = "none";
        // Show checkout form
        document.getElementById("checkout-form").style.display = "block";
    }
}

function submitBooking() {
    // Validate the checkout form
    if (validateCheckoutForm()) {
        // Get input values for booking details
        var numTravelers = document.getElementById("num-travelers").value;
        var title = document.getElementById("title").value;
        var firstName = document.getElementById("first-name").value;
        var lastName = document.getElementById("last-name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var idNumber = document.getElementById("id-number").value;
        var destination = document.getElementById("destination").value;
        var departureDate = document.getElementById("departure-date").value;

        // Generate a simple ticket number (you can implement your own logic)
        var ticketNumber = generateTicketNumber();

        // Display booking details
        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `
            <h2>Ticket Details:</h2>
            <p><strong>Number of Travelers:</strong> ${numTravelers}</p>
            <h3>Primary Traveler</h3>
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>ID Number:</strong> ${idNumber}</p>
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Departure Date:</strong> ${departureDate}</p>
            <p><strong>Ticket Number:</strong> ${ticketNumber}</p>
        `;

        // Reset forms
        document.getElementById("booking-form").reset();
        document.getElementById("checkout-form").reset();
        // Hide checkout form
        document.getElementById("checkout-form").style.display = "none";
        // Show booking form
        document.getElementById("booking-form").style.display = "block";
    }
}

function validateBookingForm() {
    var numTravelers = document.getElementById("num-travelers").value;
    var title = document.getElementById("title").value;
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var idNumber = document.getElementById("id-number").value;
    var departureDate = document.getElementById("departure-date").value;

    var isValid = true;

    // Basic validation example (you can enhance this)
    if (!numTravelers || isNaN(numTravelers) || numTravelers < 1) {
        isValid = false;
        alert("Please enter a valid number of travelers.");
    }

    if (!title) {
        isValid = false;
        alert("Please select a title.");
    }

    if (!firstName) {
        isValid = false;
        alert("Please enter the first name.");
    }

    if (!lastName) {
        isValid = false;
        alert("Please enter the last name.");
    }

    if (!email || !isValidEmail(email)) {
        isValid = false;
        alert("Please enter a valid email address.");
    }

    if (!phone || isNaN(phone)) {
        isValid = false;
        alert("Please enter a valid phone number.");
    }

    if (!idNumber) {
        isValid = false;
        alert("Please enter the ID number.");

    }
    
    if (!destination) {
        isValid = false;
        alert("Please select destination.");
    }

    if (!departureDate) {
        isValid = false;
        alert("Please select a departure date.");
    }

    return isValid;
}

function validateCheckoutForm() {
    var checkoutFirstName = document.getElementById("checkout-first-name").value;
    var checkoutLastName = document.getElementById("checkout-last-name").value;
    var checkoutEmail = document.getElementById("checkout-email").value;
    var checkoutAddress = document.getElementById("checkout-address").value;
    var paymentMethod = document.getElementById("payment-method").value;
    var nameOnCard = document.getElementById("name-on-card").value;
    var cardNumber = document.getElementById("card-number").value;
    var expiryDate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;

    var isValid = true;

    // Basic validation example (you can enhance this)
    if (!checkoutFirstName) {
        isValid = false;
        alert("Please enter the first name.");
    }

    if (!checkoutLastName) {
        isValid = false;
        alert("Please enter the last name.");
    }

    if (!checkoutEmail || !isValidEmail(checkoutEmail)) {
        isValid = false;
        alert("Please enter a valid email address.");
    }

    if (!checkoutAddress) {
        isValid = false;
        alert("Please enter the address.");
    }

    if (!paymentMethod) {
        isValid = false;
        alert("Please select a payment method.");
    }

    if (!nameOnCard) {
        isValid = false;
        alert("Please enter the name on the card.");
    }

    if (!cardNumber) {
        isValid = false;
        alert("Please enter the card number.");
    }

    if (!expiryDate) {
        isValid = false;
        alert("Please enter the expiry date.");
    }

    if (!cvv) {
        isValid = false;
        alert("Please enter the CVV.");
    }

    return isValid;
}

function isValidEmail(email) {
    // Basic email validation (you can enhance this)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function generateTicketNumber() {
    // Implement your own logic to generate a unique ticket number
    // For simplicity, this example generates a random number
    return Math.floor(Math.random() * 1000000);
}