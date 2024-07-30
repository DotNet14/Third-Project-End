// Create a JavaScript file (e.g., script.js) and link it to your HTML

// Select DOM elements
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselImages = document.querySelectorAll('.carousel img');
let currentImageIndex = 0;

// Function to show the current image
function showCurrentImage() {
    carouselImages.forEach((image, index) => {
        image.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}

// Event listeners for navigation buttons
prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showCurrentImage();
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showCurrentImage();
});

// Initial setup
showCurrentImage();


