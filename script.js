// Lightbox for Gallery
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = img.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox-modal').style.display = 'none';
}

// Mobile Navigation Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const nav = document.querySelector('header nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Testimonial Carousel
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showSlide(currentSlide);
    }, 3000);
});
