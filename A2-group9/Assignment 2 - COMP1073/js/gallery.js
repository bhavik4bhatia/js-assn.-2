// Array of image objects containing the source, thumbnail, and caption
const images = [
    {
        src: 'images/image1.jpg',
        thumbnail: 'images/thumb1.jpg',
        caption: 'Image 1: A beautiful sunrise over the mountains.'
    },
    {
        src: 'images/image2.jpg',
        thumbnail: 'images/thumb2.jpg',
        caption: 'Image 2: A serene beach with crystal clear water.'
    },
    {
        src: 'images/image3.jpg',
        thumbnail: 'images/thumb3.jpg',
        caption: 'Image 3: A bustling cityscape at night with bright lights.'
    },
    {
        src: 'images/image4.jpg',
        thumbnail: 'images/thumb4.jpg',
        caption: 'Image 4: A tranquil forest path covered in autumn leaves.'
    },
    {
        src: 'images/image5.jpg',
        thumbnail: 'images/thumb5.jpg',
        caption: 'Image 5: A picturesque lake surrounded by snow-capped mountains.'
    }
];

// Get the featured image and caption elements
const featuredImage = document.getElementById('featured');
const caption = document.getElementById('caption');
const thumbnails = document.getElementById('thumbnails');

// Dynamically build the thumbnail list
images.forEach((image, index) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.thumbnail;
    img.alt = image.caption;
    img.classList.add('thumbnail');
    img.addEventListener('click', () => {
        setActiveImage(index);
    });
    li.appendChild(img);
    thumbnails.appendChild(li);
});

// Function to set the active image
function setActiveImage(index) {
    // Update the featured image and caption
    featuredImage.src = images[index].src;
    caption.textContent = images[index].caption;

    // Update the active thumbnail
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Set the first image as the active image on page load
setActiveImage(0);
