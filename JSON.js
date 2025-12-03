let obj={
        id:1,
        name:"abc"
       }
       let myString=JSON.stringify(obj)
       console.log(myString)

       let parseData=JSON.parse(myString)
       console.log(parseData)

       let formData=document.querySelector('form')
       formData.addEventListener('submit',(e)=>{
            e.preventDefault()
            let user=document.getElementById('username').value
            let pass=document.getElementById('password').value;
            let userData={
                username:user,
                password:pass
            }
            localStorage.setItem('loginData',JSON.stringify(userData))
            alert('login successfull')
       })
