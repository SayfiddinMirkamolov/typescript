// Shopping Cart Array
var shoppingCart = [];
// Function to add a product to the cartfunction addToCart(productId: number, quantity: number): void {
function addToCart(productId, quantity) {
    var product = products.find(function (p) { return p.id === productId; });
    if (product) {
        var existingItem = shoppingCart.find(function (item) { return item.product.id === productId; });
        if (existingItem) {
            existingItem.quantity += quantity;
        }
        else {
            shoppingCart.push({ product: product, quantity: quantity });
        }
        updateCartUI();
    }
    else {
        console.error("Product with id ".concat(productId, " not found."));
    }
}
// Function to remove a product from the cart
function removeFromCart(productId) {
    shoppingCart = shoppingCart.filter(function (item) { return item.product.id !== productId; });
    updateCartUI();
}
// Function to update the cart UI
function updateCartUI() {
    var cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    shoppingCart.forEach(function (item) {
        var cartItem = document.createElement('div');
        cartItem.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'border-bottom', 'pb-2', 'mb-2');
        cartItem.innerHTML = "\n\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h5>".concat(item.product.name, "</h5>\n\t\t\t\t\t\t\t<p class=\"mb-1\">Category: ").concat(item.product.category, "</p>\n\t\t\t\t\t\t\t<p class=\"mb-1\">Price: $").concat(item.product.price.toFixed(2), "</p>\n\t\t\t\t\t\t\t<p class=\"mb-1\">Quantity: ").concat(item.quantity, "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class=\"btn btn-danger btn-sm\" onclick=\"removeFromCart(").concat(item.product.id, ")\">Remove</button>\n\t\t\t");
        cartContainer.appendChild(cartItem);
    });
    var totalPrice = shoppingCart.reduce(function (total, item) { return total + item.product.price * item.quantity; }, 0);
    document.getElementById('total-price').innerText = "Total Price: $".concat(totalPrice.toFixed(2));
}
