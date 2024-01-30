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

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('cadastroForm');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Adicione aqui o código para processar os dados do formulário, por exemplo, enviar para o servidor.
        // Você pode acessar os valores dos campos usando formulario.nomeDoCampo.value
        // Exemplo: const nomeNegocio = formulario.nomeNegocio.value;
    });
});

function validarFormulario() {
  var nomeNegocio = document.getElementById('nomeNegocio').value;
  var tipoNegocio = document.getElementById('tipoNegocio').value;
  var endereco = document.getElementById('endereco').value;
  var telefone = document.getElementById('telefone').value;
  var descricao = document.getElementById('descricao').value;

  if (!nomeNegocio || !tipoNegocio || !endereco || !telefone || !descricao) {
    exibirPopup();
    return false; // Impede o envio do formulário se algum campo estiver vazio
  }

  return true; // Permite o envio do formulário se todos os campos estiverem preenchidos
}

function exibirPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function fecharPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  // Obtém todos os campos de entrada do formulário
  var camposObrigatorios = document.querySelectorAll('input[required], textarea[required]');

  // Adiciona um ouvinte de evento para cada campo
  camposObrigatorios.forEach(function (campo) {
    campo.addEventListener("focus", function () {
      exibirMensagemPopup();
    });

    campo.addEventListener("input", function () {
      fecharPopup();
    });

  });

  // Função para exibir a mensagem de popup
  function exibirMensagemPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }

  // Função para fechar o popup
  window.fecharPopup = function () {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  };
});