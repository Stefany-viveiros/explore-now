//formulário para contato

const form = document.getElementById("formContato");
const mensagemSucesso = document.getElementById("mensagemSucesso");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");

// funções
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

// Para validar ...
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarTelefone(tel) {
  return tel.length >= 10;
}


form.addEventListener("submit", function (e) {
  e.preventDefault();

  let formularioValido = true;

  // Nome....
  if (nome.value.trim() === "") {
    mostrarErro(nome);
    formularioValido = false;
  } else {
    mostrarSucesso(nome);
  }

  // Email...
  if (!validarEmail(email.value.trim())) {
    mostrarErro(email);
    formularioValido = false;
  } else {
    mostrarSucesso(email);
  }

  // Telefone....
  if (!validarTelefone(telefone.value.trim())) {
    mostrarErro(telefone);
    formularioValido = false;
  } else {
    mostrarSucesso(telefone);
  }

  // Mensagem....
  if (mensagem.value.trim().length < 10) {
    mostrarErro(mensagem);
    formularioValido = false;
  } else {
    mostrarSucesso(mensagem);
  }

 
  if (formularioValido) {
    mensagemSucesso.style.display = "block";

    form.reset();
    limparEstados();

    setTimeout(() => {
      mensagemSucesso.style.display = "none";
    }, 4000);
  }
});
