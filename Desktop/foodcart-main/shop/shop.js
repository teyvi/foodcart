
  // script.js
const allAgriculturalProducts = [
    // Your product data (allAgriculturalProducts) goes here
  
    { name: 'Maize (Corn)', price: 5.50, category: 'Cereals and Grains' },
    { name: 'Rice (Local)', price: 8.00, category: 'Cereals and Grains' },
    { name: 'Millet', price: 4.20, category: 'Cereals and Grains' },
    { name: 'Tomatoes', price: 3.80, category: 'Fruits and Vegetables' },
    { name: 'Cabbage', price: 2.50, category: 'Fruits and Vegetables' },
    { name: 'Pineapple', price: 6.00, category: 'Fruits and Vegetables' },
    { name: 'Broiler Chicken', price: 20.00, category: 'Livestock and Poultry' },
    { name: 'Eggs (Medium)', price: 1.50, category: 'Livestock and Poultry' },
    { name: 'Goat Meat', price: 25.00, category: 'Livestock and Poultry' },
    { name: 'Cassava', price: 2.80, category: 'Root Crops and Tubers' },
    { name: 'Sweet Potatoes', price: 3.50, category: 'Root Crops and Tubers' },
    { name: 'Yam', price: 6.20, category: 'Root Crops and Tubers' },
    { name: 'Ginger', price: 7.80, category: 'Herbs and Spices' },
    { name: 'Garlic', price: 9.50, category: 'Herbs and Spices' },
    { name: 'Chili Pepper', price: 4.00, category: 'Herbs and Spices' }
  
  
];


  
  const searchInput = document.getElementById('searchInput');
  const productContainer = document.querySelector('.product-list');
  
  searchInput.addEventListener('input', handleSearch);
  
  window.onload = () => {
    productContainer.innerHTML = ''; // Clear on page load
  };
  
  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const searchRegex = new RegExp(searchTerm, 'i'); // Case-insensitive search
  
    const filteredProducts = allAgriculturalProducts.filter(product =>
      searchRegex.test(product.name) || searchRegex.test(product.category)
    );
  
    productContainer.innerHTML = ''; // Clear existing cards
  
    if (filteredProducts.length === 0) {
      productContainer.innerHTML = '<p>No products found.</p>';
    } else {
      filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
          <h3>${product.name}</h3>
          <p class="price">$${product.price.toFixed(2)}</p>
          <p>${product.category}</p>
          `;
        productContainer.appendChild(productCard);
      });
    }
  }
  