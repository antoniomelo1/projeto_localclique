const imagens = document.querySelectorAll(".sidebar ul li img");
const redeSociais = document.querySelectorAll(".redes-sociais a");

for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener("mouseover", (event) => {
    event.target.style.cursor = "pointer"; // Altera o cursor para ponteiro
    event.target.style.opacity = 0.8; // Adiciona um leve fade à imagem
  });

  imagens[i].addEventListener("mouseout", (event) => {
    event.target.style.cursor = "default"; // Volta o cursor ao normal
    event.target.style.opacity = 1; // Remove o fade
  });
}

for (let i = 0; i < redeSociais.length; i++) {
  redeSociais[i].addEventListener("mouseover", (event) => {
    event.target.style.cursor = "pointer"; // Altera o cursor para ponteiro
    event.target.style.opacity = 0.8; // Adiciona um leve fade à imagem
  });

  redeSociais[i].addEventListener("mouseout", (event) => {
    event.target.style.cursor = "default"; // Volta o cursor ao normal
    event.target.style.opacity = 1; // Remove o fade
  });
}

function toggleFormVisibility() {
  var formulario = document.getElementById("formulario-contato");
  formulario.classList.toggle("mostrar-formulario");
}

var botaoMostrarFormulario = document.getElementById("botao-mostrar-formulario");
botaoMostrarFormulario.addEventListener("mouseenter", toggleFormVisibility);

function enviarContato(event) {
  event.preventDefault();

  // Recupere os valores do formulário
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;

  // Simplesmente imprime os valores no console neste exemplo
  console.log("Nome: " + nome);
  console.log("E-mail: " + email);
  console.log("Mensagem: " + mensagem);

  // Poderia enviar os dados para um servidor aqui usando AJAX ou Fetch API

  // Opcional: fechar o formulário após o envio
  toggleFormVisibility();
}