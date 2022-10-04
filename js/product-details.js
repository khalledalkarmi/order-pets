function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

let sessionStorageData = JSON.parse(sessionStorage.getItem('user'));
let loginLink = document.getElementById('loginLink');
let userId;
if (sessionStorageData[0].id) {
    userId = sessionStorageData[0].id;
    loginLink.textContent = 'My Account'
    loginLink.href = './profile.html';
}

let productId = GetURLParameter('id');

console.log(productId);

let product;

fetch("http://localhost/orange-pets/php/controller/getProductById.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }, body: `id=${productId}`,
})
    .then((response) => response.json())
    .then((res) => {
        // console.log(res);
        product = res;
        let image1 = document.getElementById('image1');
        let image2 = document.getElementById('image2');
        let image3 = document.getElementById('image3');
        let productName = document.getElementById('productName');
        let price = document.getElementById('price');
        let details = document.getElementById('details');

        image1.src = `/orange-pets/ProductImage/${res.image}`;
        image2.src = `/orange-pets/ProductImage/${res.imageTow}`;
        image3.src = `/orange-pets/ProductImage/${res.imageThree}`;
        productName.textContent = res.name
        price.textContent = '$' + res.price
        details.textContent += res.description
    })

let cart = document.getElementById('cart');
let totalPrice = 0;
let total = document.getElementById('total');
function itemInCart(product) {
    // console.log(product);
    let li = document.createElement('li');
    li.className = 'header-cart-item flex-w flex-t m-b-12';
    cart.append(li);

    let div = document.createElement('div');
    div.className = 'header-cart-item-img';
    div.setAttribute('onclick', 'remove(this)');
    li.append(div);

    let image = document.createElement('img');
    image.src = `/orange-pets/ProductImage/${product.image}`;
    div.append(image);

    let divText = document.createElement('div');
    divText.className = 'header-cart-item-txt p-t-8';
    li.append(divText);

    let a = document.createElement('a');
    a.className = 'header-cart-item-name m-b-18 hov-cl1 trans-04';
    a.textContent = product.name;
    divText.append(a);

    let price = document.createElement('span');
    price.className = 'header-cart-item-info';
    price.textContent = '$' + product.price;
    divText.append(price);

    totalPrice+= Number(product.price);
    console.log(totalPrice);
     total.textContent= '$' +totalPrice ;

}

let addToCart = document.getElementById('addToCart');
let cartItem = document.getElementById('cartItem');
addToCart.onclick = e => {
    let i = cartItem.getAttribute('data-notify');
    let n = Number(i) + 1;
    cartItem.setAttribute('data-notify', `${n}`);

    itemInCart(product);

    addItemToDatabase();
}

function addItemToDatabase() {
    fetch("http://localhost/orange-pets/php/controller/addToCart.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }, body: `userId=${userId}&productId=${productId}&quantity=${1}`,
    })
        .then((response) => response.json())
        .then((res) => {
            console.log(res);
        })

}

// let remove = document.getElementById('remove');

// remove element from database 
function remove(e) {
    console.log("h");
    e.parentElement.remove();
    let i = cartItem.getAttribute('data-notify');
    let n = Number(i) - 1;
    cartItem.setAttribute('data-notify', `${n}`);
    // send post request to remove product from  database
    fetch("http://localhost/orange-pets/php/controller/removeItemFromCart.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }, body: `userId=${userId}&productId=${productId}`,
    })
        .then((response) => response.text())
        .then((res) => {
            console.log(res);
         
        
        })
}

// get all user product from database 
fetch("http://localhost/orange-pets/php/controller/getUserProduct.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }, body: `userId=${userId}`,
})
    .then((response) => response.json())
    .then((res) => {

        // console.log(res);
        res.forEach(element => {
            fetch("http://localhost/orange-pets/php/controller/getProductById.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                }, body: `id=${element.product_id}`,
            })
                .then((response) => response.json())
                .then((res) => {
                    // console.log(res);
                    itemInCart(res);
                    let i = cartItem.getAttribute('data-notify');
                    let n = Number(i) + 1;
                    cartItem.setAttribute('data-notify', `${n}`);
                })
        });
    })


