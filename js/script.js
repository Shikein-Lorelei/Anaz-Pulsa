const carousel = document.getElementById('carousel3d');
const items = carousel.children;
const itemCount = items.length;
const theta = 360 / itemCount;
let angle = 0;

function rotateCarousel(direction) {
    angle += theta * direction;
    updateCarousel();
}

function updateCarousel() {
    for (let i = 0; i < itemCount; i++) {
        const itemAngle = theta * i + angle;
        items[i].style.transform = `rotateY(${itemAngle}deg) translateZ(500px)`;
    }
}

// Initial position
updateCarousel();

// Auto-rotate every 30 seconds
setInterval(() => {
    rotateCarousel(1);
}, 5000);