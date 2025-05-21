
let cart = [];

// Find all Add to Cart buttons
const buttons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const productTitle = button.getAttribute('data-title');
        cart.push(productTitle);
        cartCount.textContent = cart.length;
        alert(`${productTitle} added to cart!`);
    });
});
