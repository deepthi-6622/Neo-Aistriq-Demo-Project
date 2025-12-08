document.getElementById("login").addEventListener("submit", function(e){
    e.preventDefault();

    let id = document.getElementById("userid").value;
    let pass = document.getElementById("pass").value;

    fetch(`http://localhost:3000/users?id=${id}&password=${pass}`)
    .then(res => res.json())
    .then(data => {

        console.log("Server Response:", data[0]);

        if (data.length === 0) {
            alert("Invalid credentials! Please signup.");
            window.location.href = "./SignUpPage/signup.html";
            return;
        }

        alert("Login successful!");
        window.location.href = "./SignUpPage/HomePage/Home.html"; 
    });
});
