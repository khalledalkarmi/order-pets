let signInBtn = document.getElementById('signInBtn');

signInBtn.onclick = e =>{
    e.preventDefault();
    let loginPassword = document.getElementById('loginPassword').value;
    let loginName = document.getElementById('loginName').value;

    
    fetch("http://localhost/orange-pets/php/controller/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },body: `email=${loginName}&password=${loginPassword}`,
    })
        .then((response) => response.json())
        .then((res) => {
            //TODO: handle user or admin
            console.log(res);
            sessionStorage.setItem('user',JSON.stringify(res));

            //TODO: save id in season  
            if (res != false && res[0].role=='admin') {
              console.log(res[0].role);
              window.location.href='index.html'
              // goto admin dashboard 
              
            } else if (res != false && res[0].role=='user') {
            }
            
        })
}


let signUp = document.getElementById('signUp');
signUp.onclick = e =>{
    e.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let registerEmail = document.getElementById('registerEmail').value;
    let registerPassword = document.getElementById('registerPassword').value;
    let registerRepeatPassword = document.getElementById('registerRepeatPassword').value;
    let mobile = document.getElementById('mobile').value;
    let address1 = document.getElementById('address1').value;
    let address2 = document.getElementById('address2').value;
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    let postal = document.getElementById('postal').value;



    fetch("http://localhost/orange-pets/php/controller/signUp.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },body: `firstName=${firstName}&lastName=${lastName}&registerEmail=${registerEmail}&registerPassword=${registerPassword}
        &registerRepeatPassword=${registerRepeatPassword}&mobile=${mobile}&address1=${address1}&address2=${address2}&city=${city}
        &country=${country}&postal=${postal}`,
    })
        .then((response) => response.json())
        .then((res) => {
            //TODO: handle user or admin
             console.log(res);
           
            if (res == 'true') {
                window.href = '/index.html'
            }
        })
}