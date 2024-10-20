// Camera constants
const CAMERAS = {
    OLYMPUS: "Olympus Stylus",
    CANON: "Canon AE-1",
    PENTAX: "Pentax Espio",
    NIKON: "Nikon F3"
};

// Array of photos with metadata (camera, location, and src)
const photoData = [
    { src: "../img/film/0026_26.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "../img/film/flag_house.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "../img/film/0027_27.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "../img/film/0031_31.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "../img/film/seiko_clock.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "../img/film/boating.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "../img/film/river_mountain.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "../img/film/2_boys_in_a_boat.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "../img/film/19/6.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "../img/film/19/24.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "../img/film/19/9.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "../img/film/19/12.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "../img/film/19/25.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "../img/film/19/8.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "../img/film/19/11.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "../img/film/19/7.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
];

// Determine the number of columns based on screen width
function getColumnCount() {
    return window.innerWidth < 768 ? 2 : 4;
}

// Render gallery dynamically
function renderGallery(data) {
    const gallery = document.getElementById('gallery');
    const columnCount = getColumnCount();
    const columns = Array.from({ length: columnCount }, () => []);

    data.forEach((photo, index) => {
        columns[index % columnCount].push(photo);
    });

    columns.forEach(column => {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('gallery__column');

        column.forEach(photo => {
            const link = document.createElement('a');
            link.href = photo.src;
            link.target = "_blank";
            link.classList.add('gallery__link');

            const figure = document.createElement('figure');
            figure.classList.add('gallery__thumb');

            const img = document.createElement('img');
            img.dataset.src = photo.src; // Store src for lazy loading
            img.alt = `${photo.camera} | ${photo.location}`;
            img.classList.add('gallery__image', 'lazy');

            const caption = document.createElement('figcaption');
            caption.classList.add('gallery__caption');
            caption.textContent = `${photo.camera} | ${photo.location}`;

            figure.appendChild(img);
            figure.appendChild(caption);
            link.appendChild(figure);
            columnDiv.appendChild(link);
        });

        gallery.appendChild(columnDiv);
    });

    lazyLoadImages();
}

// Lazy load images using IntersectionObserver
function lazyLoadImages() {
    const images = document.querySelectorAll('.lazy');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('lazy-loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => observer.observe(img));
}

// Initialize the gallery on page load and window resize
function initializeGallery() {
    document.getElementById('gallery').innerHTML = ''; // Clear existing content
    renderGallery(photoData);
}

window.addEventListener('DOMContentLoaded', initializeGallery);
window.addEventListener('resize', initializeGallery);
