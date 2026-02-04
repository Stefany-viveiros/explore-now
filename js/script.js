// ==============================
// Animação da Home
// ==============================
window.addEventListener("load", () => {
  const homeContent = document.querySelector(".home-content");
  
  // delay antes de mostrar o conteúdo
  setTimeout(() => {
    homeContent.classList.add("show");
  }, 500); // 500ms = 0.5s, pode aumentar se quiser mais lento
});

// ==============================
// Header muda ao rolar a página
// ==============================
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
