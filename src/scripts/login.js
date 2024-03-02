document.getElementById("login").addEventListener("click", function (event) {
  event.preventDefault();

  const emailLogin = document.getElementById("emailLogin").value;
  const passwordLogin = document.getElementById("passwordLogin").value;

  let formData = {
    email: emailLogin,
    password: passwordLogin,
  };

  let existingData = JSON.parse(localStorage.getItem("formData")) || [];

  let user = existingData.find((user) => {
    return user.email === formData.email && user.password === formData.password;
  });
  console.log(existingData);
  console.log(user);
  console.log(formData);
  if (user !== undefined) {
    window.location.href = "profile.html";
  } else {
    document.getElementById("error").textContent = "Fel email eller lösenord";
  }
});
