async function shortURL() {
    const Url = document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`);
    if (response.ok) {
        const data = await response.text();
        const container = document.getElementById('res');
        container.innerHTML = `
            <div class="cont">
                <a href="./urltoqr/index.html">
                    <button><h1>QR code</h1> url link: <a href="${data}" target="_blank">${data}</a></button>
                </a>
        `;
        // Copy the URL to clipboard automatically
        copyToClipboard(data);
    } else {
        document.getElementById('result').innerHTML = "Error shortening";
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("URL copied to clipboard: " + text);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy URL to clipboard');
        });
}
