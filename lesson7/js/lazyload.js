const images = document.querySelectorAll("img[data-src]");
function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
}
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px",
};

if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  }, imgOptions);

  images.forEach((image) => {
    imgObserver.observe(image);
  });
} else {
    images.forEach((image) => {
        preloadImage(image);
      });
}
/*const imagesToLoad = document.querySelectorAll("img[data-src]");
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {

}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}*/
