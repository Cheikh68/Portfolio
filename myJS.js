const carousels = {
    1: {
        images: [
            "assets/Hifdh Partner/Screenshot_20250509_172250.png",
            "assets/Hifdh Partner/Screenshot_20250509_172505.png",
            "assets/Hifdh Partner/Screenshot_20250509_172538.png",
            "assets/Hifdh Partner/Screenshot_20250509_172617.png",
            "assets/Hifdh Partner/Screenshot_20250509_172626.png",
            "assets/Hifdh Partner/Screenshot_20250509_172712.png"
        ],
    index: 1
    },

    2: {
        images: [
        "assets/Notes/Screenshot_20250509_173659.png",    
        "assets/Notes/Screenshot_20250509_173540.png",
        "assets/Notes/Screenshot_20250509_173608.png",
        "assets/Notes/Screenshot_20250509_173636.png"
        ],
    index: 1
    },

    3: {
        images: [
        "assets/TicTacToe/Screenshot_20250509_173159.png",    
        "assets/TicTacToe/Screenshot_20250509_173311.png",
        "assets/TicTacToe/Screenshot_20250509_173337.png"
    ],
    index: 1
    }
};

function renderCarousel(id) {
    const carousel = carousels[id];
    const track = document.querySelector(`.carousel[data-carousel-id="${id}"] .carousel-track`);
    track.innerHTML = '';

    const { images, index } = carousel;
    const left = images[(index - 1 + images.length) % images.length];
    const center = images[index];
    const right = images[(index + 1) % images.length];

    track.innerHTML += `<img src="${left}" class="carousel-img left">`;
    track.innerHTML += `<img src="${center}" class="carousel-img center">`;
    track.innerHTML += `<img src="${right}" class="carousel-img right">`;
}

function prevSlide(id) {
    carousels[id].index = (carousels[id].index - 1 + carousels[id].images.length) % carousels[id].images.length;
    renderCarousel(id);
}

function nextSlide(id) {
    carousels[id].index = (carousels[id].index + 1) % carousels[id].images.length;
    renderCarousel(id);
}

// Initialize all carousels
Object.keys(carousels).forEach(id => renderCarousel(id));