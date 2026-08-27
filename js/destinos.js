const destinosContainer = document.getElementById("destinosContainer");
const estadoVazio = document.getElementById("estadoVazio");
const buscaDestino = document.getElementById("buscaDestino");
const filtroCategoria = document.getElementById("filtroCategoria");
const filtroPreco = document.getElementById("filtroPreco");
const btnPromocoes = document.getElementById("btnPromocoes");
const modalPacote = document.getElementById("modalPacote");

const formatarPreco = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0
});

let destinos = [];
let mostrarSomentePromocoes = false;

async function carregarDestinos() {
  try {
    const resposta = await fetch("dados/destinos.json");

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar os destinos.");
    }

    destinos = await resposta.json();
    renderizarDestinos(destinos);
  } catch (erro) {
    destinosContainer.innerHTML = `
      <p class="erro-carregamento">
        Não foi possível carregar os pacotes. Abra o projeto usando um servidor local.
      </p>
    `;
  }
}

function criarCard(destino) {
  const imagens = destino.imagens.map((imagem, index) => `
    <img
      src="${imagem}"
      class="${index === 0 ? "active" : ""}"
      alt="${destino.nome}"
      loading="lazy"
    >
  `).join("");

  const itens = destino.itens.map((item) => `<li>${item}</li>`).join("");
  const badgePromocao = destino.promocao ? '<span class="badge-promocao">Promoção</span>' : "";

  return `
    <article class="destino-card" data-id="${destino.id}">
      <div class="carousel">
        <button class="carousel-btn prev" type="button" aria-label="Imagem anterior de ${destino.nome}">❮</button>
        <div class="carousel-images">${imagens}</div>
        <button class="carousel-btn next" type="button" aria-label="Próxima imagem de ${destino.nome}">❯</button>
      </div>

      <div class="destino-info">
        <div class="destino-topo">
          <h2>${destino.nome}</h2>
          ${badgePromocao}
        </div>
        <p class="destino-tipo">${destino.tipo} • ${destino.categoria}</p>
        <p class="preco">A partir de <strong>${formatarPreco.format(destino.preco)}</strong></p>
        <ul>${itens}</ul>
        <button class="btn-destino" type="button" data-ver-pacote="${destino.id}">Ver pacote</button>
      </div>
    </article>
  `;
}

function renderizarDestinos(lista) {
  destinosContainer.innerHTML = lista.map(criarCard).join("");
  estadoVazio.hidden = lista.length > 0;
  configurarCarrosseis();
}

function filtrarDestinos() {
  const termo = buscaDestino.value.trim().toLowerCase();
  const categoria = filtroCategoria.value;
  const preco = filtroPreco.value;

  const filtrados = destinos.filter((destino) => {
    const correspondeBusca = destino.nome.toLowerCase().includes(termo);
    const correspondeCategoria = categoria === "todos" || destino.categoria === categoria;
    const correspondePromocao = !mostrarSomentePromocoes || destino.promocao;

    let correspondePreco = true;

    if (preco === "ate3000") {
      correspondePreco = destino.preco <= 3000;
    } else if (preco === "ate7000") {
      correspondePreco = destino.preco <= 7000;
    } else if (preco === "acima7000") {
      correspondePreco = destino.preco > 7000;
    }

    return correspondeBusca && correspondeCategoria && correspondePreco && correspondePromocao;
  });

  renderizarDestinos(filtrados);
}

function configurarCarrosseis() {
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const images = carousel.querySelectorAll(".carousel-images img");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    let index = 0;

    if (!images.length || !prevBtn || !nextBtn) return;

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
}

function abrirModal(destino) {
  document.getElementById("modalImagem").src = destino.imagens[0];
  document.getElementById("modalImagem").alt = destino.nome;
  document.getElementById("modalCategoria").textContent = `${destino.tipo} • ${destino.categoria}`;
  document.getElementById("modalTitulo").textContent = destino.nome;
  document.getElementById("modalPreco").textContent = `A partir de ${formatarPreco.format(destino.preco)}`;
  document.getElementById("modalDescricao").textContent = destino.descricao;
  document.getElementById("modalItens").innerHTML = destino.itens.map((item) => `<li>${item}</li>`).join("");

  modalPacote.hidden = false;
  document.body.classList.add("modal-aberto");
}

function fecharModal() {
  modalPacote.hidden = true;
  document.body.classList.remove("modal-aberto");
}

buscaDestino.addEventListener("input", filtrarDestinos);
filtroCategoria.addEventListener("change", filtrarDestinos);
filtroPreco.addEventListener("change", filtrarDestinos);

btnPromocoes.addEventListener("click", () => {
  mostrarSomentePromocoes = !mostrarSomentePromocoes;
  btnPromocoes.classList.toggle("active", mostrarSomentePromocoes);
  filtrarDestinos();
});

destinosContainer.addEventListener("click", (event) => {
  const botao = event.target.closest("[data-ver-pacote]");
  if (!botao) return;

  const destino = destinos.find((item) => item.id === botao.dataset.verPacote);
  if (destino) abrirModal(destino);
});

modalPacote.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) {
    fecharModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalPacote.hidden) {
    fecharModal();
  }
});

carregarDestinos();
