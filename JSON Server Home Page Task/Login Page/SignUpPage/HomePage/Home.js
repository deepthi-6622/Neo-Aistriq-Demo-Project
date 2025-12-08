// show username from localStorage
document.getElementById("username").innerText =
    localStorage.getItem("currentUser");

// feed load
function showFeed() {
    document.getElementById("feed").innerHTML = `
        <h3>Feed</h3>
        <div class="card">Post 1: Welcome to our social app!</div>
        <div class="card">Post 2: This is a JSON Server project.</div>
    `;
}

// logout
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "../../loginpage.html";
}
