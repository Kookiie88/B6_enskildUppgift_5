import { fetchUserInformation } from "./profile.js";


document.getElementById("login").addEventListener("click", function (event) {
  event.preventDefault();

  const emailLogin = document.getElementById("emailLogin").value;
  const passwordLogin = document.getElementById("passwordLogin").value;

  let loginData = {
    email: emailLogin,
    password: passwordLogin,
  };

  localStorage.setItem('loginData', JSON.stringify(loginData));

  let existingData = JSON.parse(localStorage.getItem("formData")) || [];

  let user = existingData.find((user) => {
    return user.email === loginData.email && user.password === loginData.password;
  });
  if (user !== undefined) {
    window.location.href = "profile.html";
  } else {
    document.getElementById("error").textContent = "Fel email eller lösenord";
  }
});
