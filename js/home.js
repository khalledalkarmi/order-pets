let productRoot = document.getElementById('productRoot');



// get product from database 
fetch("http://localhost/orange-pets/php/controller/getAllProduct.php", {
    method: "GET",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }
})
    .then((response) => response.json())
    .then((res) => {
        console.log(res);
        res.forEach(product => {
            // generate product card 
            generateProduct(product);
        });

    })


let sessionStorageData = JSON.parse(sessionStorage.getItem('user'));
let loginLink = document.getElementById('loginLink');
if (sessionStorageData[0].id) {
    loginLink.textContent = 'My Account'
    loginLink.href = './profile.html';
}

// show logout link when the user is logged in 
let logout = document.getElementById('logout');
if(sessionStorageData[0].id){
    logout.textContent = "logout";
    logout.setAttribute('src', '../index.html')
}
// redirect the user to main 
logout.onclick = () =>{ 
    sessionStorage.clear();
}


function generateProduct(product) {

    let divContainer = document.createElement('div');
    divContainer.className = 'col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men';
    productRoot.append(divContainer);

    let divBlock = document.createElement('div');
    divBlock.className = 'block2';
    divContainer.append(divBlock);

    let divImage = document.createElement('div');
    divImage.className = 'block2-pic hov-img0 label-new';
    divImage.setAttribute('data-label','New');
    //data-label="New"
    divBlock.append(divImage);

    let productImage = document.createElement('img');
    productImage.src =`/orange-pets/ProductImage/${product.image}`;
    divImage.append(productImage);

    // let quickView = document.createElement('a');
    // quickView.href = '#';
    // quickView.className = 'block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1';
    // quickView.textContent = 'Quick View'
    // divImage.append(quickView);


    let blockText = document.createElement('div');
    blockText.className = 'block2-txt flex-w flex-t p-t-14';
    divBlock.append(blockText);

    let blockTextChildOne = document.createElement('div');
    blockTextChildOne.className = 'block2-txt-child1 flex-col-l';
    blockText.append(blockTextChildOne);

    let productLinkDetails = document.createElement('a');
    productLinkDetails.href = 'product-detail.html?id=' + `${product.id}`
    productLinkDetails.textContent = product.name;
    blockTextChildOne.append(productLinkDetails);

    let price = document.createElement('span');
    price.className = 'stext-105 cl3';
    price.textContent = product.price;
    blockTextChildOne.append(price);

    let blockTextChildTwo = document.createElement('div');
    blockTextChildTwo.className = 'block2-txt-child2 flex-r p-t-3';
    blockText.append(blockTextChildTwo);

    let wishList = document.createElement('a');
    wishList.className = 'btn-addwish-b2 dis-block pos-relative js-addwish-b2';
    blockTextChildTwo.append(wishList);

    // let heart1 = document.createElement('img');
    // heart1.className = 'icon-heart1 dis-block trans-04';
    // heart1.src = 'images/icons/icon-heart-01.png';
    // wishList.append(heart1);

    // let heart2 = document.createElement('img');
    // heart2.className = 'icon-heart2 dis-block trans-04 ab-t-l';
    // heart2.src = 'images/icons/icon-heart-02.png';
    // wishList.append(heart2);

}

/*
    <div class="block2-pic hov-img0">
                <img src="images/product-01.jpg" alt="IMG-PRODUCT">

                <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                  Quick View
                </a>
              </div>
*/