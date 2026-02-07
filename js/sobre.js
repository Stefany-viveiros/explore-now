// seleciona os elementos que queremos animar..
const elementsToAnimate = document.querySelectorAll('.sobre-content, .cards-diferenciais .card');

function animateOnScroll() {
  const windowHeight = window.innerHeight;

  elementsToAnimate.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const triggerPoint = windowHeight - 100;

    if (elementTop < triggerPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active'); // remove se sair da tela
    }
  });
}

// Dispara ao carregar e ao rolar
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
