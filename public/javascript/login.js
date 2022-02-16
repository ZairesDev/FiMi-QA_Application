async function loginFormHandler(e) {
  e.preventDefault();

  const username = document.querySelector("#logUsernameInput").value.trim();
  const password = document.querySelector("#logPasswordInput").value.trim();

  if (username && !password) {
    const response = await fetch("/api/qaagents/login", {
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
      response = await fetch("/api/qasup/login", {
        method: "post",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".sign-form")
  .addEventListener("submit", loginFormHandler);
