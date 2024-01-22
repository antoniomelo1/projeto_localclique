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