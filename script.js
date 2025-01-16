let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Hide current slide
    slides[currentSlide].classList.remove('active');

    // Update current slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Show new slide
    slides[currentSlide].classList.add('active');

    // Update the transform property to slide
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}
