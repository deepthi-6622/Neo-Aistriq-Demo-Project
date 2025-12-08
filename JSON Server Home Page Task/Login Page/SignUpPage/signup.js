document.getElementById("signup").addEventListener("submit", function(e){
    e.preventDefault();

    let id = document.getElementById("userid").value;
    let pass = document.getElementById("pass").value;

    // check if user exists
    fetch(`http://localhost:3000/users?id=${id}`)
    .then(res => res.json())
    .then(data => {
        if(data.length > 0){
            alert("User already exists!");
            return;
        }

        // add new user
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id, password: pass })
        })
        .then(() => {
            alert("Signup successful! Please login now.");
            window.location.href = "../loginpage.html";
        });
    });
});
