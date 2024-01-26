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

function onUsernameChange() {
  document.getElementById('username-error').innerText = '';
  document.getElementById('username').classList.remove('highlight');
}

function onEmailChange() {
  document.getElementById('email-error').innerText = '';
  document.getElementById('email').classList.remove('highlight');
}

function validateForm() {
  document.getElementById('username-error').innerText = '';
  document.getElementById('email-error').innerText = '';
  document.getElementById('username').classList.remove('highlight');
  document.getElementById('email').classList.remove('highlight');

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;

  if (username.trim() === '') {
      document.getElementById('username-error').innerText = 'Por favor, insira um nome de usuário';
      document.getElementById('username').classList.add('highlight');
  }

  if (email.trim() === '') {
      document.getElementById('email-error').innerText = 'Por favor, insira um endereço de e-mail';
      document.getElementById('email').classList.add('highlight');
  } else if (!isValidEmail(email)) {
      document.getElementById('email-error').innerText = 'Por favor, insira um endereço de e-mail válido';
      document.getElementById('email').classList.add('highlight');
  }
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}