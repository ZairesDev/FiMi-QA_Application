async function signupFormHandler(e) {
  e.preventDefault();

  const username = document.querySelector("#usernameInput").value.trim();
  const email = document.querySelector("#emailInput").value.trim();
  const password = document.querySelector("#passwordInput").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".sign-form")
  .addEventListener("submit", signupFormHandler);

async function loginFormHandler(e) {
  e.preventDefault();

  const username = document.querySelector("#logUsernameInput").value.trim();
  const password = document.querySelector("#logPasswordInput").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".sign-form")
  .addEventListener("submit", loginFormHandler);
