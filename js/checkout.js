
let sessionStorageData = JSON.parse(sessionStorage.getItem('user'));
let loginLink = document.getElementById('loginLink');
let userId;
if (sessionStorageData[0].id) {
    userId = sessionStorageData[0].id;
    loginLink.textContent = 'My Account'
    loginLink.href = './profile.html';
}




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
                     console.log(res);
                    itemInCart(res);
                    let i = cartItem.getAttribute('data-notify');
                    let n = Number(i) + 1;
                    cartItem.setAttribute('data-notify', `${n}`);
                })
        });
    })

    let cartB = document.getElementById('cartB');

    function itemInCart(product) {
        // console.log(product);
        let li = document.createElement('li');
        li.className = 'header-cart-item flex-w flex-t m-b-12';
        // console.log(li);
        cartB.append(li);
    
        let div = document.createElement('div');
        div.className = 'header-cart-item-img';
        div.setAttribute('onclick', 'remove(this)');
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
        price.textContent = '$' + product.price;
        divText.append(price);
    
    }