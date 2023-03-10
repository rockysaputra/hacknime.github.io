// REGISTER DOM

function registerSubmit(){
    let email = document.getElementById('regisEmail').value // mengambil data input email
    let password = document.getElementById('regisPass').value // mengambil value input password

    if(!email || !password){
       return alert('please input your email / password')
    }else if(password.length < 4){
       return alert('password minimum 5 character')
    }

    let specialChar = '!#$%^&*() '
    let flag = false
    for(let char of email){
        for(let spec of specialChar){
            if(char === spec){
                alert(`email cant use special character ex @`)
            }
        }
        if(char === '@'){
            flag = true
        }
    }

    if(!flag){
        alert(`email is incorret format`)
    }else{
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        alert(`register complete`)
        window.location.href = "login.html"
        // console.log(user);
    }

}


//LOGIN DOM
function loginSubmit(){
    let email = document.getElementById('loginEmail').value
    let password = document.getElementById('loginPassword').value

    let saveEmail = localStorage.getItem('email')
    let savePassword = localStorage.getItem('password')

    if(email === saveEmail && password === savePassword){
        alert(`Login telah berhasil`)
        window.location.href = "landing_page.html"
    }else{
        alert(`Please input correct email / password`)
    }
}

