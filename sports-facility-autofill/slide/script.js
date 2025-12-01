// Slide Navigation
let currentSlide = 1;
const totalSlides = 5;

// DOM Elements
const slides = document.querySelectorAll('.slide');
const progressFill = document.getElementById('progressFill');

// Initialize
function init() {
    updateSlide();
    updateProgress();
}

// Update active slide
function updateSlide() {
    slides.forEach((slide, index) => {
        if (index + 1 === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Update progress bar
function updateProgress() {
    const progress = (currentSlide / totalSlides) * 100;
    progressFill.style.width = `${progress}%`;
}

// Navigate to specific slide
function goToSlide(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
        currentSlide = slideNumber;
        updateSlide();
        updateProgress();
    }
}

// Next slide
function nextSlide() {
    if (currentSlide < totalSlides) {
        goToSlide(currentSlide + 1);
    }
}

// Previous slide
function prevSlide() {
    if (currentSlide > 1) {
        goToSlide(currentSlide - 1);
    }
}

// Event Listeners (keyboard, touch, and mouse wheel only)

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'PageUp':
            e.preventDefault();
            prevSlide();
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(1);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(totalSlides);
            break;
        // Number keys for direct navigation
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
            e.preventDefault();
            goToSlide(parseInt(e.key));
            break;
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - previous slide
            prevSlide();
        }
    }
}

// Mouse wheel navigation (optional)
let isScrolling = false;
document.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    isScrolling = true;
    setTimeout(() => {
        isScrolling = false;
    }, 500);

    if (e.deltaY > 0) {
        nextSlide();
    } else if (e.deltaY < 0) {
        prevSlide();
    }
});

// Prevent accidental navigation when interacting with links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// Add animation to feature cards on slide 3
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Add entrance animation to conclusion items on slide 5
const conclusionItems = document.querySelectorAll('.conclusion-item');
conclusionItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
});

// Fullscreen toggle (F key)
document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
});

// Initialize on load
init();

// Log keyboard shortcuts to console for reference
console.log(`
🎯 Keyboard Shortcuts:
- Arrow Right / Space / PageDown: Next slide
- Arrow Left / PageUp: Previous slide
- Home: First slide
- End: Last slide
- 1-5: Jump to specific slide
- F: Toggle fullscreen
- Mouse wheel: Navigate slides
`);
