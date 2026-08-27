// ==============================
// Animação da Home
// ==============================
window.addEventListener("load", () => {
  const homeContent = document.querySelector(".home-content");
  if (!homeContent) return;
  
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
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
 // Parallax suave do texto da Home
window.addEventListener("scroll", () => {
  const homeContent = document.querySelector(".home-content");
  if (!homeContent) return;
  const scrollY = window.scrollY;

  // quanto menor o divisor, mais rápido ele se move
  homeContent.style.transform = `translateY(${scrollY * 0.3}px)`;
});
 let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (!header) return;
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollY && currentScroll > 100) {
    // descendo
    header.classList.add("hide");
  } else {
    // subindo
    header.classList.remove("hide");
  }

  lastScrollY = currentScroll;
});
