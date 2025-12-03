let employees = [
        { userid: "user1", password: "dXNlckAxMjM=", address: "Bangalore", phone: "9999999999" },
        { userid: "user2", password: "dXNlckA0NTY=", address: "Tumkur", phone: "8888888888" }
    ];

    let decodeBase64 = (str) => atob(str);

    let form = document.querySelector('form');
    let result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let user = document.getElementById('username').value;
        let pass = document.getElementById('password').value;

        let User = new Promise((resolve, reject)=> {

            if (user === "user1" && pass === decodeBase64(employees[0].password)) {
                resolve(employees[0]);

            } else if (user === "user2" && pass === decodeBase64(employees[1].password)) {
                resolve(employees[1]);

            } else {
                reject("Invalid Username or Password");
            }
        });
            User.then((emp)=>{
                console.log(`Login Successful! Address:${emp.address},phone:${emp.phone}`);
            }).catch((error)=>{
                console.log(error);
                
            })
    });