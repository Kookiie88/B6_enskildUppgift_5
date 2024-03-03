document.getElementById("login").addEventListener("click", function (event) {
  event.preventDefault();

  // Get the email and password entered by the user
  const emailLogin = document.getElementById("emailLogin").value;
  const passwordLogin = document.getElementById("passwordLogin").value;

  // Create an object with the user's login data
  let loginData = {
    email: emailLogin,
    password: passwordLogin,
  };

  // Store the login data in local storage
  localStorage.setItem("loginData", JSON.stringify(loginData));
  // Retrieve the existing user data from local storage
  let existingData = JSON.parse(localStorage.getItem("formData")) || [];
  // Find a user in the existing data that matches the entered email and password
  let user = existingData.find((user) => {
    return (
      user.email === loginData.email && user.password === loginData.password
    );
  });
  // If a matching user is found, redirect to the profile page
  if (user !== undefined) {
    window.location.href = "profile.html";
    // If no matching user is found, display an error message
  } else {
    document.getElementById("error").textContent = "Fel email eller lösenord";
  }
});
