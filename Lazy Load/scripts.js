// // Get all images with data-src attribute
// const imagesToLoad = document.querySelectorAll("[data-src]");

// // Optional parameters being set for the IntersectionalObserver
// const imgOptions = {
//     threshold = 0,
//     rootMargin: "0px 0px 50px 0px"
// };

// const loadImages = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => {image.removeAttribute('data-src');};
// };

// // First check to see if Intersection Observer is supported
// if ('IntersectionObserver' in window) {
//     const imgObserver = new IntersectionObserver((items, observer) => {
//         items.forEach((item) => {
//         });
//     }, imgOptions);

//     // loop through each img and check status and load if necessary
//     imagesToLoad.forEach((img) => {
//         imgObserver.observe(img);
//     });
// }
// else { // just load ALL images if not supported
// };

// // ---------------------------------------------------------------------

const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})