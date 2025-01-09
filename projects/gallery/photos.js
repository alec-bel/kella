// Camera constants
const CAMERAS = { 
    OLYMPUS: "Olympus Stylus",
    CANON: "Canon AE-1",
    PENTAX: "Pentax Espio",
    NIKON: "Nikon F3"
};

// Array of photos with metadata (camera, location, and src)
const photoData = [ 
    { src: "/img/film/20/1.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "/img/film/20/2.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "/img/film/20/3.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "/img/film/20/4.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "/img/film/20/5.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "/img/film/20/6.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "/img/film/20/7.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "/img/film/20/8.jpg", camera: CAMERAS.PENTAX, location: "Kyoto, Japan" },
    { src: "/img/film/19/6.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "/img/film/19/24.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "/img/film/19/9.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "/img/film/19/12.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "/img/film/19/25.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "/img/film/19/8.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "/img/film/19/11.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "/img/film/19/7.jpg", camera: CAMERAS.NIKON, location: "Seaside, OR" },
    { src: "/img/film/18/1.jpg", camera: CAMERAS.OLYMPUS, location: "Portland, OR" },
    { src: "/img/film/18/2.jpg", camera: CAMERAS.OLYMPUS, location: "Portland, OR" },
    { src: "/img/film/18/3.jpg", camera: CAMERAS.OLYMPUS, location: "Tumalo Falls, OR" },
    { src: "/img/film/18/4.jpg", camera: CAMERAS.OLYMPUS, location: "Tumalo Falls, OR" },
    { src: "/img/film/18/5.jpg", camera: CAMERAS.OLYMPUS, location: "Red Rocks, NV" },
    { src: "/img/film/18/6.jpg", camera: CAMERAS.OLYMPUS, location: "Zion, UT" },
    { src: "/img/film/18/7.jpg", camera: CAMERAS.OLYMPUS, location: "Zion, UT" },
    { src: "/img/film/18/8.jpg", camera: CAMERAS.OLYMPUS, location: "Zion, UT" },
    { src: "/img/film/16/1.jpg", camera: CAMERAS.OLYMPUS, location: "Plainview, OR" },
    { src: "/img/film/16/2.jpg", camera: CAMERAS.OLYMPUS, location: "Willamette Forest, OR"},
    { src: "/img/film/16/3.jpg", camera: CAMERAS.OLYMPUS, location: "Plainview, OR" },
    { src: "/img/film/16/4.jpg", camera: CAMERAS.OLYMPUS, location: "Willamette Forest, OR"},
    { src: "/img/film/13/1.jpg", camera: CAMERAS.PENTAX, location: "Mount Bachelor, OR" },
    { src: "/img/film/16/7.jpg", camera: CAMERAS.OLYMPUS, location: "Willamette Forest, OR"},
    { src: "/img/film/16/6.jpg", camera: CAMERAS.CANON, location: "Mount Rainer, OR"},
    { src: "/img/film/16/5.jpg", camera: CAMERAS.OLYMPUS, location: "Willamette Forest, OR"},
    { src: "/img/film/15/1.jpg", camera: CAMERAS.PENTAX, location: "Bend, OR"},
    { src: "/img/film/15/2.jpg", camera: CAMERAS.PENTAX, location: "Bend, OR"},
    { src: "/img/film/15/3.jpg", camera: CAMERAS.PENTAX, location: "Santa Cruz, CA"},
    { src: "/img/film/15/4.jpg", camera: CAMERAS.PENTAX, location: "Santa Cruz, CA"},
    { src: "/img/film/15/5.jpg", camera: CAMERAS.PENTAX, location: "Folsom, CA"},
    { src: "/img/film/15/6.jpg", camera: CAMERAS.PENTAX, location: "Folsom, CA"},
    { src: "/img/film/15/7.jpg", camera: CAMERAS.PENTAX, location: "Folsom, CA"},
    { src: "/img/film/15/8.jpg", camera: CAMERAS.PENTAX, location: "Folsom, CA"},
];

photoData.forEach((photo, index) => {
  photo.id = index + 1; // Add a unique ID starting from 1
});

