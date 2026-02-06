document.querySelectorAll(".carousel").forEach((carousel) => {
  const images = carousel.querySelectorAll(".carousel-images img");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");

  let index = 0;

  function showImage(i) {
    images.forEach((img) => img.classList.remove("active"));
    images[i].classList.add("active");
  }

  prevBtn.addEventListener("click", () => {
    index = index === 0 ? images.length - 1 : index - 1;
    showImage(index);
  });

  nextBtn.addEventListener("click", () => {
    index = index === images.length - 1 ? 0 : index + 1;
    showImage(index);
  });
});
