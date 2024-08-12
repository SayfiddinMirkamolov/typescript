// Example list of products
var products = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
    { id: 2, name: "Phone", price: 699.99, category: "Electronics" },
    { id: 3, name: "Headphones", price: 199.99, category: "Electronics" },
    { id: 4, name: "Shoes", price: 49.99, category: "Apparel" },
    { id: 5, name: "Book", price: 14.99, category: "Books" }
];
// Function to display products on the page
function displayProducts() {
    var productsList = document.getElementById('products-list');
    products.forEach(function (product) {
        var productItem = document.createElement('div');
        productItem.classList.add('col-md-4', 'mb-4');
        productItem.innerHTML = "\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">".concat(product.name, "</h5>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\">Category: ").concat(product.category, "</p>\n\t\t\t\t\t\t\t\t\t<p class=\"card-text\">Price: $").concat(product.price.toFixed(2), "</p>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" onclick=\"addToCart(").concat(product.id, ", 1)\">Add to Cart</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t");
        productsList.appendChild(productItem);
    });
}
// Initialize products display
displayProducts();
