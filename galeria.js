document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery-img");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
  
    let currentImageIndex = 0;
  
    function showImage(index) {
      galleryImages.forEach((img, i) => {
        if (i === index) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });
    }
  
    showImage(currentImageIndex);
  
    prevButton.addEventListener("click", function() {
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(currentImageIndex);
    });
  
    nextButton.addEventListener("click", function() {
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
      showImage(currentImageIndex);
    });
  });
  