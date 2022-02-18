async function loginFormHandler(e) {
  e.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/qa/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else if (!response.ok) {
      const secondresponse = await fetch("/api/qasup/login", {
        method: "post",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (secondresponse.ok) {
        document.location.replace("/");
      }
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
