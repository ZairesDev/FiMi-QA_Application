async function newFormHandler(e) {
    e.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('input[name="post-text"]').value;
    const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({
            post_text,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        console.log('you win')
        document.location.replace("/dashboard");

    } else {
        alert(response.statusText);
        console.log('fail')
    }
}

document.querySelector(".new-post-form").addEventListener("submit", newFormHandler);