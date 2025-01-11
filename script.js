// Preload images
const images = [
    'images/banner1.jpg',
    'images/banner2.jpg',
    'images/banner3.jpg'
];

const = Prelaoding = [];
images.forEach((image) => {
    const img = new Image();
    img.src = image;
   Prelaoding.push(img);
});

// Cycling banner
let currentIndex = 0;
const bannerImage = document.getElementById('banner-image');

function cycleBanner() {
    currentIndex = (currentIndex + 1) % images.length;
    bannerImage.src = images[currentIndex];
}

setInterval(cycleBanner, 3000); // Change image every 3 seconds
