// Define the Product type
type Product = {
	id: number;
	name: string;
	price: number;
	category: string;
};

// Define the CartItem type
type CartItem = {
	product: Product;
	quantity: number;
};

// Shopping Cart Array
let shoppingCart: CartItem[] = [];

// Function to add a product to the cartfunction addToCart(productId: number, quantity: number): void {
	function addToCart(productId: number, quantity: number): void {
    const product = products.find(p => p.id === productId);

    if (product) {
        const existingItem = shoppingCart.find(item => item.product.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            shoppingCart.push({ product, quantity });
        }
        updateCartUI();
    } else {
        console.error(`Product with id ${productId} not found.`);
    }
}



// Function to remove a product from the cart
function removeFromCart(productId: number): void {
	shoppingCart = shoppingCart.filter(item => item.product.id !== productId);
	updateCartUI();
}

// Function to update the cart UI
function updateCartUI(): void {
	const cartContainer = document.getElementById('cart-items') as HTMLDivElement;
	cartContainer.innerHTML = '';

	shoppingCart.forEach(item => {
			const cartItem = document.createElement('div');
			cartItem.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'border-bottom', 'pb-2', 'mb-2');
			
			cartItem.innerHTML = `
					<div>
							<h5>${item.product.name}</h5>
							<p class="mb-1">Category: ${item.product.category}</p>
							<p class="mb-1">Price: $${item.product.price.toFixed(2)}</p>
							<p class="mb-1">Quantity: ${item.quantity}</p>
					</div>
					<button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.product.id})">Remove</button>
			`;

			cartContainer.appendChild(cartItem);
	});

	const totalPrice = shoppingCart.reduce((total, item) => total + item.product.price * item.quantity, 0);
	document.getElementById('total-price')!.innerText = `Total Price: $${totalPrice.toFixed(2)}`;
}
