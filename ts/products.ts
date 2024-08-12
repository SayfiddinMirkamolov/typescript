// Example list of products
const products: Product[] = [
	{ id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
	{ id: 2, name: "Phone", price: 699.99, category: "Electronics" },
	{ id: 3, name: "Headphones", price: 199.99, category: "Electronics" },
	{ id: 4, name: "Shoes", price: 49.99, category: "Apparel" },
	{ id: 5, name: "Book", price: 14.99, category: "Books" }
];

// Function to display products on the page
function displayProducts(): void {
	const productsList = document.getElementById('products-list') as HTMLDivElement;

	products.forEach(product => {
			const productItem = document.createElement('div');
			productItem.classList.add('col-md-4', 'mb-4');

			productItem.innerHTML = `
					<div class="card">
							<div class="card-body">
									<h5 class="card-title">${product.name}</h5>
									<p class="card-text">Category: ${product.category}</p>
									<p class="card-text">Price: $${product.price.toFixed(2)}</p>
									<button class="btn btn-primary" onclick="addToCart(${product.id}, 1)">Add to Cart</button>
							</div>
					</div>
			`;

			productsList.appendChild(productItem);
	});
}

// Initialize products display
displayProducts();
