let formData = document.getElementById('loginForm');

formData.addEventListener('submit', (e) => {
    e.preventDefault();

    let user = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (!user || !email || !pass) {
        alert("Please fill all fields");
        return;
    }

    let userData = {
        username: user,
        email: email,
        password: pass
    };

    localStorage.setItem('loginData', JSON.stringify(userData));

    // Redirect to success page
    window.location.href = "success.html";
});
