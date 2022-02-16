async function editFormHandler(e) {
  e.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_text = document
    .querySelector('input[name="post-text"]')
    .value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      post_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-blog-form")
  .addEventListener("submit", editFormHandler);
