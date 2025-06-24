// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image: "https://via.placeholder.com/150?text=Headphones"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 99.99,
    image: "https://via.placeholder.com/150?text=Smart+Watch"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 29.99,
    image: "https://via.placeholder.com/150?text=Speaker"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 39.99,
    image: "https://via.placeholder.com/150?text=Mouse"
  }
];

// Cart data
let cart = {
  items: 0,
  total: 0
};

// DOM elements
const productsContainer = document.getElementById('products');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Render product cards
function renderProducts() {
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-name">${product.name}</div>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;

    productsContainer.appendChild(card);
  });
}

// Update cart display
function updateCartDisplay() {
  cartCount.textContent = cart.items;
  cartTotal.textContent = cart.total.toFixed(2);
}

// Add product to cart handler
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.items += 1;
    cart.total += product.price;
    updateCartDisplay();
  }
}

// Setup event listeners on buttons
function setupEventListeners() {
  productsContainer.addEventListener('click', event => {
    if (event.target.classList.contains('add-to-cart')) {
      const id = parseInt(event.target.getAttribute('data-id'), 10);
      addToCart(id);
    }
  });
}

// Initialize app
function init() {
  renderProducts();
  updateCartDisplay();
  setupEventListeners();
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', init);
