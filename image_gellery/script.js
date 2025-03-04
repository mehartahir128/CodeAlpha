let currentIndex = 0;
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg'
];

// Change Main Image on Thumbnail Click
function changeImage(imageSrc) {
  document.getElementById('main-image').src = imageSrc;
  currentIndex = images.indexOf(imageSrc);
}

// Navigate to Previous Image
function prevImage() {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  document.getElementById('main-image').src = images[currentIndex];
}

// Navigate to Next Image
function nextImage() {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  document.getElementById('main-image').src = images[currentIndex];
}

// Open Image in Lightbox
document.getElementById('main-image').addEventListener('click', function() {
  openLightbox(this.src);
});

// Open Lightbox with Larger Image
function openLightbox(src) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-image').src = src;
}

// Close Lightbox
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
