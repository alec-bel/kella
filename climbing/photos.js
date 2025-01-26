
// Array of photos with metadata (src, location, date, size)
const photoData = [ 
    { src: "/images/photo-gallery/iceberg.jpeg", location: "Antarctica", date: "December, 2014", width: 3, height: 2 },
    { src: "/images/photo-gallery/albatross-sunset.jpeg", location: "Antarctica", date: "December, 2014", width: 3, height: 1 },
    { src: "/images/photo-gallery/desert-tortoise.jpeg", location: "Joshua Tree National Park, CA", date: "April, 2023", width: 2, height: 1 },
    { src: "/images/photo-gallery/elk-marin-headlands.jpeg", location: "Marin Headlands, CA", date: "May, 2019", width: 1, height: 1 },
    { src: "/images/photo-gallery/leopard-seal.jpeg", location: "Antarctica", date: "January, 2015", width: 2, height: 1 },
    { src: "/images/photo-gallery/river-beauty-willowherb.jpeg", location: "Russel Glacier, Greenland", date: "June, 2019", width: 2, height: 2 },
    { src: "/images/photo-gallery/trail-ten-falls-waterfall-0.jpeg", location: "Trail of Ten Falls, OR", date: "March, 2021", width: 1, height: 2},

];

photoData.forEach((photo, index) => {
  photo.id = index + 1; // Add a unique ID starting from 1
});

