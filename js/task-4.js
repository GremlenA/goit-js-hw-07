const form = document.querySelector(".login-form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const { email, password } = form.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Будь ласка, заповніть усі поля!");
    return;
  }

  const userData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(userData);

  form.reset();
});
