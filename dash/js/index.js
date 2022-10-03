let addProduct = document.getElementById('addProduct');

addProduct.onclick = e => {
    let productName = document.getElementById('productName').value;
    let productDescription = document.getElementById('productDescription').value;
    let productCategory = document.getElementById('productCategory').value;
    let productDiscount = document.getElementById('productDiscount').value;
    let productQuantity = document.getElementById('productQuantity').value;
    let productPrice = document.getElementById('productPrice').value;
    let productImage1 = document.getElementById('productImage1').value.split(/(\\|\/)/g).pop().replace(' ','');
    let productImage2 = document.getElementById('productImage2').value.split(/(\\|\/)/g).pop().replace(' ','');
    let productImage3 = document.getElementById('productImage3').value.split(/(\\|\/)/g).pop().replace(' ','');
//.split(/(\\|\/)/g).pop()
    console.log(productImage1);
    fetch("http://localhost/orange-pets/php/controller/addProduct.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }, body: `productName=${productName}&productDescription=${productDescription}&productCategory=${productCategory}&productDiscount=${productDiscount}
        &productQuantity=${productQuantity}&productPrice=${productPrice}&productImage1=${productImage1}&productImage2=${productImage2}&productImage3=${productImage3}`,
    })
        .then((response) => response.text())
        .then((res) => {
            //TODO: handle user or admin
            console.log(res);
        })
}