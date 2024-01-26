document.addEventListener('DOMContentLoaded', function ()
{

  //navigation toogle


    // greeting section 
    const greetingElement = document.getElementById('greeting');
    const currentTime = new Date().getHours();
    if (currentTime > 12) {
        greetingElement.textContent = 'Good Morning';
    } else if (currentTime <= 18) {
        greetingElement.textContent = 'Good Afternoon';
    } else {
        greetingElement.textContent = 'Good Evening';
    }

    // weather info
    const weatherElement = document.getElementById('weather');


   function updateLocalTime() {
    const timeElements = document.querySelectorAll('.time-number');
     const now = new Date();
    
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const seconds = now.getSeconds();

     timeElements[0].innerHTML = hours;
     timeElements[1].innerHTML = (minutes < 10) ? '0' + minutes : minutes;
     timeElements[2].innerHTML = (seconds < 10) ? '0' + seconds : seconds;
  }

  setInterval(updateLocalTime, 1000);


 const galleryImages = [
    './assets/gallery/image1.jpg',
    './assets/gallery/image2.jpg',
    './assets/gallery/image3.jpg',
  ];

  const gallerySection = document.getElementById('gallery');
  const galleryImage = gallerySection.querySelector('img');
  const thumbnailsContainer = gallerySection.querySelector('.thumbnails');

  function updateGallery(index) {
    galleryImage.src = galleryImages[index];
    galleryImage.alt = `Image ${index + 1}`;

    thumbnailsContainer.innerHTML = '';

    galleryImages.forEach((image, i) => {
      const thumbnail = document.createElement('img');
      thumbnail.src = image;
      thumbnail.alt = `Thumbnail ${i + 1}`;
      thumbnail.addEventListener('click', () => updateGallery(i));
      thumbnailsContainer.appendChild(thumbnail);
    });
  }

  updateGallery(0);
    
    
    
    // products list
    const products = [
        { name: 'Product 1', type: 'all', price: 15.99, image: './assets/products/img1.png' },
        { name: 'Product 2', type: 'free', price: 22.00, image: './assets/products/img2.png' },
        { name: 'Product 3', type: 'paid', price: 12.99, image: './assets/products/img3.png' },
        { name: 'Product 4', type: 'paid', price: 59.99, image: './assets/products/img4.png' },
        { name: 'Product 5', type: 'free', price: 49.99, image: './assets/products/img5.png' },
        { name: 'Product 6', type: 'paid', price: 17.99, image: './assets/products/img6.png' },
    ];

    const productsSection = document.getElementById('products');
    const productsArea = productsSection.querySelector('.products-area');
    const productsFilter = productsSection.querySelector('.products-filter');
    
  function updateProducts(type) {
    productsArea.innerHTML = '';

    const filteredProducts = type === 'all' ? products : products.filter(product => product.type === type);

    filteredProducts.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'product';
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.type === 'free' ? 'Free' : `$${product.price.toFixed(2)}`}</p>
      `;
      productsArea.appendChild(productElement);
    });
  }

  productsFilter.addEventListener('change', function (event) {
    const selectedType = event.target.id;
    updateProducts(selectedType);
  });

  updateProducts('all');
});




// side bar navigation  
