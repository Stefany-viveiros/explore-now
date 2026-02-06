console.log("JS do contato carregado com sucesso");


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContato");
  const mensagemSucesso = document.getElementById("mensagemSucesso");

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const mensagem = document.getElementById("mensagem");

  function mostrarErro(input) {
    const group = input.parentElement;
    group.classList.remove("success");
    group.classList.add("error");
  }

  function mostrarSucesso(input) {
    const group = input.parentElement;
    group.classList.remove("error");
    group.classList.add("success");
  }

  function limparEstados() {
    document.querySelectorAll(".input-group").forEach(group => {
      group.classList.remove("error", "success");
    });
  }

  function validarEmail(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valido = true;

    if (nome.value.trim() === "") {
      mostrarErro(nome);
      valido = false;
    } else {
      mostrarSucesso(nome);
    }

    if (!validarEmail(email.value.trim())) {
      mostrarErro(email);
      valido = false;
    } else {
      mostrarSucesso(email);
    }

    if (telefone.value.trim().length < 10) {
      mostrarErro(telefone);
      valido = false;
    } else {
      mostrarSucesso(telefone);
    }

    if (mensagem.value.trim().length < 10) {
      mostrarErro(mensagem);
      valido = false;
    } else {
      mostrarSucesso(mensagem);
    }

    if (valido) {
      mensagemSucesso.style.display = "block";
      form.reset();
      limparEstados();

      setTimeout(() => {
        mensagemSucesso.style.display = "none";
      }, 4000);
    }
  });
});
