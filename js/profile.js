let userName = document.getElementById('userName');
let role = document.getElementById('role');


let userInfo = JSON.parse(sessionStorage.getItem('user'));
let ad1 = document.getElementById('ad1');
let ad2 =document.getElementById('ad2');
let city = document.getElementById('city');
let country = document.getElementById('country');
let postal = document.getElementById('postal');


console.log(userInfo);
userName.textContent = userInfo[0].first_name + ' '+ userInfo[0].last_name;
role.textContent = userInfo[0].role

fetch("http://localhost/orange-pets/php/controller/getUserAddress.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }, body: `id=${userInfo[0].id}`,
})
    .then((response) => response.json())
    .then((res) => {
        // console.log(res);
      console.log(res);
      ad1.textContent += res.address_line1
      ad2.textContent += res.address_line2
      city.textContent += res.city
      country.textContent += res.country
      postal.textContent += res.postal_code
    })