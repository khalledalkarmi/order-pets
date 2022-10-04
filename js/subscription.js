let subButton = document.getElementById("sub");

let session = JSON.parse(sessionStorage.getItem("user"));
let userId = session[0].id;

if (session[0]) {
  subButton.onclick = () => {

    fetch("http://localhost/orange-pets/php/controller/setSubscriptionOrder.php", {
        method:"POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",    
    },
    body: `id=${userId}`,
})

.then((response) => response.text())
    .then((res) => {
      // Do something ;
      console.log(res);
    });


    // window.location.href = "/orange-pets/checkout.html";
  };
} else {
  window.location.href = "/orange-pets/login.html";
}
