// Add your JavaScript code here
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
