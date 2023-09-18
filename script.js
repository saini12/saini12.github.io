// JavaScript shopping cart functionality

let cart = [];
let total = 0;

function addToCart(productId, productName, productPrice) {
    cart.push({ id: productId, name: productName, price: productPrice });
    total += productPrice;
    updateCartView();
}

function removeFromCart(productId, productPrice) {
    cart = cart.filter(item => item.id !== productId);
    total -= productPrice;
    updateCartView();
}

function updateCartView() {
    const cartList = document.getElementById('cart');
    const totalAmount = document.getElementById('total');
    
    cartList.innerHTML = '';
    
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart('${item.id}', ${item.price})">Remove</button>`;
        cartList.appendChild(listItem);
    });

    totalAmount.innerText = `$${total.toFixed(2)}`;
}

function checkout() {
    alert(`Total amount: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCartView();
}
