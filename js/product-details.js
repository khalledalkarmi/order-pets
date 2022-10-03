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

let productId = GetURLParameter('id');

console.log(productId);

let product ;

fetch("http://localhost/orange-pets/php/controller/getProductById.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }, body: `id=${productId}`,
})
    .then((response) => response.json())
    .then((res) => {
        //TODO: handle user or admin
        console.log(res);
        product = res;
        let image1 = document.getElementById('image1');
        let image2 = document.getElementById('image2');
        let image3 = document.getElementById('image3');
        let productName = document.getElementById('productName');
        let price = document.getElementById('price');
        let details = document.getElementById('details');
        image1.src = res.image;
        image2.src = res.imageTow;
        image3.src = res.imageThree;
        productName.textContent = res.name
        price.textContent = '$' + res.price
        details.textContent += res.description
    })

let cart = document.getElementById('cart');

function itemInCart(product) {
    console.log(product);
    let li = document.createElement('li');
    li.className = 'header-cart-item flex-w flex-t m-b-12';
    cart.append(li);

    let div = document.createElement('div');
    div.className = 'header-cart-item-img';
    div.setAttribute('onclick','remove(this)');
    li.append(div);

    let image = document.createElement('img');
    image.src = product.image;
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
    price.textContent = '$'+product.price;
    divText.append(price);

}

let addToCart = document.getElementById('addToCart');
let cartItem = document.getElementById('cartItem');
addToCart.onclick = e => {
    let i = cartItem.getAttribute('data-notify');
    let n = Number(i) + 1;
    cartItem.setAttribute('data-notify', `${n}`);

    itemInCart(product);
}


// let remove = document.getElementById('remove');

function remove(e){
    console.log("h");
    e.parentElement.remove();
    let i = cartItem.getAttribute('data-notify');
    let n = Number(i) - 1;
    cartItem.setAttribute('data-notify', `${n}`);
}



