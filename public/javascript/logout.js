async function logout() {
  const response = await fetch("/api/qa/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else if (!response.ok) {
    const secondresponse = await fetch("/api/qasup/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
    });

    if (secondresponse.ok) {
      document.location.replace("/");
    }
  }
}

document.querySelector("#logoutButton").addEventListener("click", logout);
