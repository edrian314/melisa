const addProductBtn = document.getElementById('addProductBtn');
const modalBg = document.getElementById('modalBg');
const closeModalBtn = document.getElementById('closeModal');
const productForm = document.getElementById('productForm');
const productsGrid = document.getElementById('productsGrid');

// Scroll to sections smoothly
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Show modal to add new product
addProductBtn.onclick = () => {
  modalBg.classList.add('active');
};

// Close modal
closeModalBtn.onclick = () => {
  modalBg.classList.remove('active');
};
modalBg.onclick = (e) => {
  if (e.target === modalBg) {
    modalBg.classList.remove('active');
  }
};

// Add product card creation with price
function createProductCard(name, desc, imageUrl, price) {
  const card = document.createElement('div');
  card.className = 'product-card';

  const img = document.createElement('img');
  img.className = 'product-image';
  img.src = imageUrl;
  img.alt = name;

  const info = document.createElement('div');
  info.className = 'product-info';

  const title = document.createElement('h4');
  title.textContent = name;

  const description = document.createElement('p');
  description.textContent = desc;

  const priceEl = document.createElement('p');
  priceEl.innerHTML = `<strong>Price:</strong> $${price}`;

  info.appendChild(title);
  info.appendChild(description);
  info.appendChild(priceEl);

  card.appendChild(img);
  card.appendChild(info);

  return card;
}

// Handle form submission to add product
productForm.onsubmit = (e) => {
  e.preventDefault();
  const name = productForm.productName.value.trim();
  const desc = productForm.productDesc.value.trim();
  const imageUrl = productForm.productImage.value.trim();
  const price = productForm.productPrice.value.trim();

  if (!name || !desc || !imageUrl || !price) return alert('Please fill in all fields.');

  const newProduct = createProductCard(name, desc, imageUrl, price);
  productsGrid.appendChild(newProduct);

  productForm.reset();
  modalBg.classList.remove('active');
};

// Example initial products with price
const initialProducts = [
  {
    name: 'Tesla Model S',
    desc: 'An all-electric five-door liftback sedan produced by Tesla.',
    image: 'https://www.topgear.com/sites/default/files/2023/05/WhatsApp Image 2023-05-04 at 15.53.19.jpeg',
    price: 89999
  },
  {
    name: 'Ford Mustang',
    desc: 'An iconic American muscle car with aggressive styling and powerful performance.',
    image: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/02/ford-mustang-dark-horse.jpg',
    price: 55999
  },
  {
    name: 'Porsche 911',
    desc: 'A legendary sports car known for its timeless design and thrilling performance.',
    image: 'https://cdni.autocarindia.com/ExtraImages/20240312054442_Porsche_911_S_T.jpg',
    price: 119999
  }
];

// Load initial products dynamically
function loadInitialProducts() {
  initialProducts.forEach(p => {
    const productCard = createProductCard(p.name, p.desc, p.image, p.price);
    productsGrid.appendChild(productCard);
  });
}

loadInitialProducts();

// Contact form submission
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name.length < 2 || message.length < 5 || !validateEmail(email)) {
    alert('Please fill out all fields correctly.');
    return;
  }

  successMessage.style.display = 'block';
  contactForm.reset();

  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 5000);
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
