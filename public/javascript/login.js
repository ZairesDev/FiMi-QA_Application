async function signformFormHandler(e) {
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
  .addEventListener("submit", signformFormHandler);
