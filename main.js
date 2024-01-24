document.addEventListener('DOMContentLoaded', function ()
{
    // greeting section 
    const greetingElement = document.getElementById('greeting');
    const currentTime = new Date().getHours();
    if (currentTime > 12) {
        greetingElement.textContent = 'Good Morning';
    } else if (currentTime < 18) {
        greetingElement.textContent = 'Good Afternoon';
    } else {
        greetingElement.textContent = 'Good Evening';
    }

    // weather info
    const weatherElement = document.getElementById('weather');

    function updateLocalTime() {
         const hoursElement = document.querySelector('.time-number[data-time="hours"]');
         const minutesElement = document.querySelector('.time-number[data-time="minutes"]');
         const secondsElement = document.querySelector('.time-number[data-time="seconds"]');

            let date = new Date();
            let hours =date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            //12 hour clock
            if (hours > 12) {
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
         }
         hoursElement.textContent = hours;
         minutesElement.innerHTML = minutes;
         secondsElement.innerHTML = seconds;
         setTimeout(currentTime, 1000);
    };
    updateLocalTime();
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
