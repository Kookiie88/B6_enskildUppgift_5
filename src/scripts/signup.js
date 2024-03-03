// Purpose: Handle the signup form and save the data to local storage
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form data
    const fornamn = document.getElementById("fornamn").value;
    const efternamn = document.getElementById("efternamn").value;
    const telefonnummer = document.getElementById("telefonnummer").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passWarning = document.querySelector(".warning");
    
    // Check if the password is longer than 5 characters
    if (password.length > 5) {

      // Create an object with the form data
      let formData = {
        fornamn: fornamn,
        efternamn: efternamn,
        telefonnummer: telefonnummer,
        email: email,
        password: password,
      };

      // Fetch existing user data from local storage
      let existingData = JSON.parse(localStorage.getItem("formData")) || [];
      // Add the new user to the existing data
      existingData.push(formData);

      // Log the entire array to the console
      console.log(existingData);
      // Save the entire array back to local storage
      localStorage.setItem("formData", JSON.stringify(existingData));
      // Redirect the user to the login page
      window.location.href = "login.html";
    } else {
      // Display a warning message if the password is too short
      passWarning.style.color = "red";
    }
  });
