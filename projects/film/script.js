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
    { src: "../img/film/18/1.jpg", camera: CAMERAS.OLYMPUS, location: "Portland, OR" },
    { src: "../img/film/18/2.jpg", camera: CAMERAS.OLYMPUS, location: "Portland, OR" },
    { src: "../img/film/18/3.jpg", camera: CAMERAS.OLYMPUS, location: "Tumalo Falls, OR" },
    { src: "../img/film/18/4.jpg", camera: CAMERAS.OLYMPUS, location: "Tumalo Falls, OR" },
    { src: "../img/film/18/5.jpg", camera: CAMERAS.OLYMPUS, location: "Red Rocks, NV" },
    { src: "../img/film/18/6.jpg", camera: CAMERAS.OLYMPUS, location: "Zion, UT" },
    { src: "../img/film/18/7.jpg", camera: CAMERAS.OLYMPUS, location: "Zion, UT" },
    { src: "../img/film/18/8.jpg", camera: CAMERAS.OLYMPUS, location: "Zion, UT" },
    { src: "../img/film/16/1.jpg", camera: CAMERAS.OLYMPUS, location: "Plainview, OR" },
    { src: "../img/film/16/2.jpg", camera: CAMERAS.OLYMPUS, location: "Willamette Forest, OR"},
    { src: "../img/film/16/3.jpg", camera: CAMERAS.OLYMPUS, location: "Plainview, OR" },
    { src: "../img/film/16/4.jpg", camera: CAMERAS.OLYMPUS, location: "Willamette Forest, OR"},
    { src: "../img/film/13/1.jpg", camera: CAMERAS.PENTAX, location: "Mount Bachelor, OR" },
    { src: "../img/film/16/7.jpg", camera: CAMERAS.OLYMPUS, location: "Willamette Forest, OR"},
    { src: "../img/film/16/6.jpg", camera: CAMERAS.CANON, location: "Mount Rainer, OR"},
    { src: "../img/film/16/5.jpg", camera: CAMERAS.OLYMPUS, location: "Willamette Forest, OR"},
];

// Render gallery dynamically
function renderGallery(data) {
    const gallery = document.getElementById('gallery');
    const columnCount = getColumnCount();
    gallery.innerHTML = ''; // Clear existing content

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
            img.dataset.src = photo.src;
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

// Determine the number of columns based on screen width
function getColumnCount() {
    return window.innerWidth < 768 ? 2 : 4;
}

// Variable for determing if resize needed
let columnWidth = null

// Initialize the gallery on page load and resize
function initializeGallery() {
    if (columnWidth == null) { 
        renderGallery(photoData);
        columnWidth = getColumnCount()
    }
    else if (columnWidth != getColumnCount()) {
        document.getElementById('gallery').innerHTML = ''; // Clear existing content
        renderGallery(photoData);
        columnWidth = getColumnCount()
    }
}

window.addEventListener('DOMContentLoaded', initializeGallery);
window.addEventListener('resize', initializeGallery);

// Stop hover effects when scrolling
let isScrolling;

function handleScroll() {
    document.body.classList.add('no-hover');

    clearTimeout(isScrolling);

    // Remove the class 500ms after scrolling stops
    isScrolling = setTimeout(() => {
        document.body.classList.remove('no-hover');
    }, 500);
}

window.addEventListener('scroll', handleScroll);
