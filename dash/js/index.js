let addProduct = document.getElementById('addProduct');

addProduct.onclick = e => {
    let productName = document.getElementById('productName').value;
    let productDescription = document.getElementById('productDescription').value;
    let productCategory = document.getElementById('productCategory').value;
    let productDiscount = document.getElementById('productDiscount').value;
    let productQuantity = document.getElementById('productQuantity').value;
    let productPrice = document.getElementById('productPrice').value;
    let productImage1 = document.getElementById('productImage1').value.split(/(\\|\/)/g).pop().replace(' ', '');
    let productImage2 = document.getElementById('productImage2').value.split(/(\\|\/)/g).pop().replace(' ', '');
    let productImage3 = document.getElementById('productImage3').value.split(/(\\|\/)/g).pop().replace(' ', '');
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
            console.log(res);
        })
}


let AllUsersTable = document.getElementById('AllUsersTable');
fetch("http://localhost/orange-pets/php/controller/getAllUsers.php", {
    method: "GET",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }
})
    .then((response) => response.json())
    .then((res) => {
        //TODO: handle user or admin
        console.log(res);
        res.forEach(user => {
            generateUserRow(user);
        });
    })


function generateUserRow(user) {
    let tr = document.createElement('tr');
    tr.setAttribute('id', `user${user.id}`)
    AllUsersTable.append(tr);

    let tdEmail = document.createElement('td');
    tdEmail.textContent = user.email;
    tr.append(tdEmail);

    let tdFirstName = document.createElement('td');
    tdFirstName.textContent = user.first_name;
    tr.append(tdFirstName);


    let tdLastName = document.createElement('td');
    tdLastName.textContent = user.last_name;
    tr.append(tdLastName);

    let tdMobile = document.createElement('td');
    tdMobile.textContent = user.mobile;
    tr.append(tdMobile);

    let tdCreateAt = document.createElement('td');
    tdCreateAt.textContent = user.create_at;
    tr.append(tdCreateAt);


    let tdRole = document.createElement('td');
    tdRole.textContent = user.role;
    tr.append(tdRole);


    let tdAction = document.createElement('td');
    tdAction.className = 'd-flex gap-1';
    tr.append(tdAction);

    let update = document.createElement('a');
    update.className = 'btn btn-sm btn-warning mt-2';
    update.textContent = 'Update';
    update.setAttribute('onclick', 'update(' + user.id + ')')
    tdAction.append(update);

    let deleteU = document.createElement('a');
    deleteU.className = 'btn btn-sm btn-warning mt-2';
    deleteU.textContent = 'Delete';
    deleteU.setAttribute('onclick', 'deleteU(' + user.id + ')')

    tdAction.append(deleteU);
}

function update(id) {

}

function deleteU(id) {
    let userRow = document.getElementById(`user${id}`)
    fetch("http://localhost/orange-pets/php/controller/deleteUserById.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }, body: `id=${id}`
    })
        .then((response) => response.text())
        .then((res) => {
            //TODO: handle user or admin
            console.log(res);

        })
    userRow.remove();
}


fetch("http://localhost/orange-pets/php/controller/getAllProduct.php", {
    method: "GET",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }
})
    .then((response) => response.json())
    .then((res) => {
        //TODO: handle user or admin
        console.log(res);
        res.forEach(product => {
            generateProductRow(product);
        });
    })


let AllProductTable = document.getElementById('AllProductTable');
function generateProductRow(product) {
    let tr = document.createElement('tr');
    tr.setAttribute('id', `product${product.id}`)
    AllProductTable.append(tr);

    let tdEmail = document.createElement('td');
    tdEmail.textContent = product.name;
    tr.append(tdEmail);

    let tdFirstName = document.createElement('td');
    tdFirstName.textContent = product.description;
    tdFirstName.style.height = '100px'
    tdFirstName.style.overflow = 'auto'

    tr.append(tdFirstName);


    let tdLastName = document.createElement('td');
    tdLastName.textContent = product.category;
    tr.append(tdLastName);

    let tdMobile = document.createElement('td');
    tdMobile.textContent = product.quantity;
    tr.append(tdMobile);

    let tdCreateAt = document.createElement('td');
    tdCreateAt.textContent = product.price;
    tr.append(tdCreateAt);


    let tdRole = document.createElement('td');
    tdRole.textContent = product.created_at;
    tr.append(tdRole);


    let tdAction = document.createElement('td');
    tdAction.className = 'd-flex gap-1';
    tr.append(tdAction);

    let update = document.createElement('a');
    update.className = 'btn btn-sm btn-warning mt-5';
    update.textContent = 'Update';
    update.setAttribute('onclick', 'updateP(' + product.id + ')')
    update.setAttribute('data-bs-toggle', 'modal')
    update.setAttribute('data-bs-toggle', 'modal')
    update.setAttribute('href', '#exampleModalToggle')
    update.setAttribute('role', 'button')
    tdAction.append(update);

    //data-bs-toggle="modal" href="#exampleModalToggle" role="button"

    let deleteU = document.createElement('a');
    deleteU.className = 'btn btn-sm btn-warning mt-5';
    deleteU.textContent = 'Delete';
    deleteU.setAttribute('onclick', 'deleteP(' + product.id + ')')
    tdAction.append(deleteU);
}

function deleteP(id) {
    let productRow = document.getElementById(`product${id}`)
    fetch("http://localhost/orange-pets/php/controller/deleteProductById.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }, body: `id=${id}`
    })
        .then((response) => response.text())
        .then((res) => {
            //TODO: handle user or admin
            console.log(res);

        })
    productRow.remove();
}
let idA=0;
function updateP(id) {
    fetch("http://localhost/orange-pets/php/controller/getProductById.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }, body: `id=${id}`
    })
        .then((response) => response.json())
        .then((res) => {
            console.log(res);
            let editName = document.getElementById('editName');
            let editDescription = document.getElementById('editDescription');
            let editCategory = document.getElementById('editCategory');
            let editPrice = document.getElementById('editPrice');
            let editQuantity = document.getElementById('editQuantity');
            editName.value = res.name;
            editDescription.value = res.description;
            editCategory.value = res.category;
            editPrice.value = res.price;
            editQuantity.value = res.quantity;
            idA=res.id;
        })

        
}



function updateBtn() {
    let editName = document.getElementById('editName');
    let editDescription = document.getElementById('editDescription');
    let editCategory = document.getElementById('editCategory');
    let editPrice = document.getElementById('editPrice');
    let editQuantity = document.getElementById('editQuantity');
    let name = editName.value
    let dis = editDescription.value
    let category = editCategory.value
    let price = editPrice.value
    let quantity = editQuantity.value

    fetch("http://localhost/orange-pets/php/controller/updateProductById.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }, body: `id=${idA}&productName=${name}&productDescription=${dis}&productCategory=${category}&productDiscount=${productDiscount}
        &productQuantity=${quantity}&productPrice=${price}`,
    })
        .then((response) => response.text())
        .then((res) => {
            console.log(res);
            window.location.href = '/orange-pets/dash/'
        })
}