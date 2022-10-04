let productRoot = document.getElementById("root");

// get product from database
fetch("http://localhost/orange-pets/php/controller/getAllProduct.php", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    res.forEach((product) => {
      // generate product card
      generateProduct(product);
    });
  });

function generateProduct(product) {
  let divContainer = document.createElement("div");
  divContainer.className = "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men";
  productRoot.append(divContainer);

  let divBlock = document.createElement("div");
  divBlock.className = "block2";
  divContainer.append(divBlock);

  let divImage = document.createElement("div");
  divImage.className = "block2-pic hov-img0 label-new";
  divImage.setAttribute("data-label", "New");
  //data-label="New"
  divBlock.append(divImage);

  let productImage = document.createElement("img");
  productImage.src =`/orange-pets/ProductImage/${product.image}`;
  divImage.append(productImage);

  // let quickView = document.createElement("a");
  // quickView.href = "#";
  // quickView.className =
  //   "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1";
  // quickView.textContent = "Quick View";
  // divImage.append(quickView);

  let blockText = document.createElement("div");
  blockText.className = "block2-txt flex-w flex-t p-t-14";
  divBlock.append(blockText);

  let blockTextChildOne = document.createElement("div");
  blockTextChildOne.className = "block2-txt-child1 flex-col-l";
  blockText.append(blockTextChildOne);

  let productLinkDetails = document.createElement("a");
  productLinkDetails.href = "product-detail.html?id=" + `${product.id}`;
  productLinkDetails.textContent = product.name;
  blockTextChildOne.append(productLinkDetails);

  let price = document.createElement("span");
  price.className = "stext-105 cl3";
  price.textContent = product.price;
  blockTextChildOne.append(price);

  let blockTextChildTwo = document.createElement("div");
  blockTextChildTwo.className = "block2-txt-child2 flex-r p-t-3";
  blockText.append(blockTextChildTwo);

  let wishList = document.createElement("a");
  wishList.className = "btn-addwish-b2 dis-block pos-relative js-addwish-b2";
  blockTextChildTwo.append(wishList);

  // let heart1 = document.createElement("img");
  // heart1.className = "icon-heart1 dis-block trans-04";
  // heart1.src = "images/icons/icon-heart-01.png";
  // wishList.append(heart1);

  // let heart2 = document.createElement("img");
  // heart2.className = "icon-heart2 dis-block trans-04 ab-t-l";
  // heart2.src = "images/icons/icon-heart-02.png";
  // wishList.append(heart2);
}

let all = document.getElementById("all");
let price0to50 = document.getElementById("price0to50");
let price50to100 = document.getElementById("price50to100");
let price100to150 = document.getElementById("price100to150");
let price150to200 = document.getElementById("price150to200");
let priceAbove200 = document.getElementById("priceAbove200");

all.onclick = (event) => {
  // get product from database
  fetch("http://localhost/orange-pets/php/controller/getBetween.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `price1=${0}&price2=${3000}`,
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      productRoot.innerHTML = "";
      res.forEach((product) => {
        // generate product card
        generateProduct(product);
      });
    });
};

price0to50.onclick = (event) => {
  // get product from database
  fetch("http://localhost/orange-pets/php/controller/getBetween.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `price1=${0}&price2=${50}`,
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      productRoot.innerHTML = "";
      res.forEach((product) => {
        // generate product card
        generateProduct(product);
      });
    });
};

price50to100.onclick = (event) => {
  // get product from database
  fetch("http://localhost/orange-pets/php/controller/getBetween.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `price1=${50}&price2=${100}`,
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      productRoot.innerHTML = "";
      res.forEach((product) => {
        // generate product card
        generateProduct(product);
      });
    });
};

price100to150.onclick = (event) => {
  // get product from database
  fetch("http://localhost/orange-pets/php/controller/getBetween.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `price1=${100}&price2=${150}`,
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      productRoot.innerHTML = "";
      res.forEach((product) => {
        // generate product card
        generateProduct(product);
      });
    });
};

price150to200.onclick = (event) => {
  // get product from database
  fetch("http://localhost/orange-pets/php/controller/getBetween.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `price1=${150}&price2=${200}`,
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      productRoot.innerHTML = "";
      res.forEach((product) => {
        // generate product card
        generateProduct(product);
      });
    });
};

priceAbove200.onclick = (event) => {
  // get product from database
  fetch("http://localhost/orange-pets/php/controller/getBetween.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `price1=${200}&price2=${3000}`,
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      productRoot.innerHTML = "";
      res.forEach((product) => {
        // generate product card
        generateProduct(product);
      });
    });
};

//Filltiring the cats and dogs
let allproducts = document.getElementById("allproduct");
let catsanddogs = document.getElementById("catsanddogs");
let food = document.getElementById("food");
let supplies = document.getElementById("supplies");
let dogsaccessories = document.getElementById("dogsaccessories");
let catsaccessories = document.getElementById("catsaccessories");

allproduct.onclick = (event) => {
  // get the product from the database
  fetch("http://localhost/orange-pets/php/controller/getAllProduct.php", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      productRoot.innerHTML = "";
      res.forEach((product) => {
        // generate product card
        generateProduct(product);
      });
    });
};

// get only cats and dogs from database 
catsanddogs.onclick = (event) => {
  // get the product from the database
  fetch("http://localhost/orange-pets/php/controller/getAllProductByCategory.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `ca=catsanddogs`
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      productRoot.innerHTML = "";
      res.forEach((product) => {
        // generate product card
        generateProduct(product);
      });
    });
};


// get only the food from the database 
food.onclick = (event) => {
  // get the product from the database
  fetch("http://localhost/orange-pets/php/controller/getAllProductByCategory.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `ca=food`
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      productRoot.innerHTML = "";
      res.forEach((product) => {
        // generate product card
        generateProduct(product);
      });
    });
};

// get only the supplies from the database 
supplies.onclick = (event) => {
  // get the product from the database
  fetch("http://localhost/orange-pets/php/controller/getAllProductByCategory.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `ca=supplies`
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      productRoot.innerHTML = "";
      res.forEach((product) => {
        // generate product card
        generateProduct(product);
      });
    });
};

// get only the dogs accessories from the database 
dogsaccessories.onclick = (event) => {
  // get the product from the database
  fetch("http://localhost/orange-pets/php/controller/getAllProductByCategory.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `ca=dogsaccessories`
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      productRoot.innerHTML = "";
      res.forEach((product) => {
        // generate product card
        generateProduct(product);
      });
    });
};

// get only the cats accessories from the database 
catsaccessories.onclick = (event) => {
  // get the product from the database
  fetch("http://localhost/orange-pets/php/controller/getAllProductByCategory.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: `ca=catsaccessories`
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      productRoot.innerHTML = "";
      res.forEach((product) => {
        // generate product card
        generateProduct(product);
      });
    });
};


