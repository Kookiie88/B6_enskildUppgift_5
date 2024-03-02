document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fornamn = document.getElementById("fornamn").value;
    const efternamn = document.getElementById("efternamn").value;
    const telefonnummer = document.getElementById("telefonnummer").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passWarning = document.querySelector(".warning");

    if (password.length > 5) {
      let formData = {
        fornamn: fornamn,
        efternamn: efternamn,
        telefonnummer: telefonnummer,
        email: email,
        password: password,
      };

      let existingData = JSON.parse(localStorage.getItem("formData")) || [];

      existingData.push(formData);

      // Log the entire array to the console
      console.log(existingData);

      localStorage.setItem("formData", JSON.stringify(existingData));

      window.location.href = "login.html";
    } else {
      passWarning.style.color = "red";
    }
  });
