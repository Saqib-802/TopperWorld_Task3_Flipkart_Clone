// Sample product data (replace with actual data)
const products = [
    { id: 1, name: "Product 1", price: 10.99, image: "https://media.gq.com/photos/648a0e67a4cff646f27e29a0/master/w_1280,c_limit/Lady-White-Co.-Lite-Jersey-Tee.jpg" },
    { id: 2, name: "Product 2", price: 19.99, image: "https://media.gq.com/photos/648a0e60f8b3d9b70b3723c0/master/w_1280,c_limit/Camber-Finest-Long-Sleeve-T-Shirt.jpg" },
    { id: 3, name: "Product 3", price: 5.99, image: "https://media.gq.com/photos/648a0e61aef5b2abababc799/master/w_1280,c_limit/Camber-Max-Weight-Jersey-Pocket-T-Shirt.jpg" },
    { id: 4, name: "Product 4", price: 10.99,image:"https://media.gq.com/photos/648a0e6786fb14a13de76946/master/w_1280,c_limit/Jungmaven-Jung-Tee.jpg" },
    { id: 5, name: "Product 5", price: 19.99,image: "https://media.gq.com/photos/648b60b8d025dc7de1c5f399/master/w_1280,c_limit/everybodyworld-straight-sleeve-long-sleeve.jpg" },
    { id: 6, name: "Product 6", price: 5.99,image:"https://media.gq.com/photos/648a0e603d6f5645d708435f/master/w_1280,c_limit/Buck-Mason-Field-Spec-Cotton-Heavy-Tee.jpg" },
    { id: 7, name: "Product 7", price: 10.99,image:"https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.jpg?s=612x612&w=0&k=20&c=bBMILbCpLkhIxbL7sAAXaFOaFaSXFCt80ccHgl7iiWM=" },
    { id: 8, name: "Product 8", price: 19.99,image:"https://media.istockphoto.com/id/940320814/photo/domestic-kitchen.jpg?s=2048x2048&w=is&k=20&c=01e_HnNd6yMxWf8QNc2cy7_U1eaR03lvWcSuNZUA7X8=" },
    { id: 9, name: "Product 9", price: 5.99,image:"https://5.imimg.com/data5/XL/RM/DB/SELLER-16425730/home-appliances-500x500.jpg" },
    { id: 10, name: "Product 10", price: 10.99,image:"https://m.economictimes.com/thumb/msid-98534952,width-1200,height-900,resizemode-4,imgsize-40712/1.jpg" },
    { id: 11, name: "Product 11", price: 19.99,image:"https://media.istockphoto.com/id/1196974664/photo/set-of-home-kitchen-appliances-in-the-room-on-the-wall-background.jpg?s=612x612&w=0&k=20&c=dUSAMg-LUh6j-4437kz30w8k7KgJiR8yrTTXhGiFh0s=" },
    { id: 12, name: "Product 12", price: 5.99,image:"https://5.imimg.com/data5/WK/BL/MY-78796760/astar-red-wht-500x500.jpg"},
    { id: 13, name: "Product 13", price: 10.99, image: "https://5.imimg.com/data5/WK/BL/MY-78796760/astar-red-wht-500x500.jpg" },
    { id: 14, name: "Product 14", price: 19.99, image: "https://5.imimg.com/data5/GC/QU/MY-78796760/astar-ylw-wht-500x500.jpg" },
    { id: 15, name: "Product 15", price: 5.99, image: "https://5.imimg.com/data5/WK/BL/MY-78796760/astar-red-wht-500x500.jpg" },
    { id: 16, name: "Product 16", price: 10.99, image: "https://5.imimg.com/data5/UM/SN/MY-78796760/astar-rbl-wht-500x500.jpg" },
    { id: 17, name: "Product 17", price: 19.99, image: "https://www.bdprice.com.bd/wp-content/uploads/2021/06/Dizo-Star-500.jpg" },
    { id: 18, name: "Product 18", price: 5.99, image: "https://5.imimg.com/data5/SELLER/Default/2022/4/VD/WG/LM/77881932/oneplus-nord-2-5g-gray-sierra-mobile-phone-500x500.jpeg" },
    { id: 19, name: "Product 19", price: 19.99, image: "https://tiimg.tistatic.com/fp/1/007/921/android-triple-camera-screen-size-16-15-centimeter-4-gb-and-battery-500-mah-processor-helio-p35-vivo-mobile-phones-300.jpg" },
    { id: 20, name: "Product 20", price: 5.99, image: "https://5.imimg.com/data5/AX/AB/NX/SELLER-60320290/realme-c1-touch-screen-mobile-phone-500x500.jpg" },
    { id: 21, name: "Product 21", price: 19.99, image: "https://5.imimg.com/data5/SELLER/Default/2021/2/IE/OU/BM/37857901/vivo-mobile-phones4-500x500.jpg" },
    
    // Add more products here
  ];
  
  function generateProductHTML(product) {
    return `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Price: $${product.price.toFixed(2)}</p>
      </div>
    `;
  }
  
  function displayProductListing() {
    const productList = document.getElementById("product-list");
  
    products.forEach(product => {
      const productHTML = generateProductHTML(product);
      productList.innerHTML += productHTML;
    });
  }
  
  displayProductListing();

// Add event listener for filtering
const categorySelect = document.getElementById('category-select');
categorySelect.addEventListener('change', filterProducts);

function filterProducts() {
    const selectedCategory = categorySelect.value;
    const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);
    renderProducts(filteredProducts);
}

// Add event listener for search
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', searchProducts);

function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const searchResults = products.filter(product => product.title.toLowerCase().includes(searchInput));
    renderProducts(searchResults);
}

const cartItemsList = document.querySelector('.cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

const cart = [];

function addToCart(product) {
    cart.push(product);
    renderCart();
}

function renderCart() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.title} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

checkoutButton.addEventListener('click', () => {
    alert('Checkout process initiated. Thank you for shopping with us!');
    cart.length = 0;
    renderCart();
});

// Initial rendering
renderProducts();
