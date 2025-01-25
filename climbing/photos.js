
// Array of photos with metadata (src, location, date)
const photoData = [ 
    { src: "/images/photo-gallery/iceberg.jpeg", location: "Antarctica", date: "December, 2014" },
];

photoData.forEach((photo, index) => {
  photo.id = index + 1; // Add a unique ID starting from 1
});

