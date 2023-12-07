var username = localStorage.getItem('username');



// Verificar se o nome de usuário está disponível
if (username) {
    // Exibir o nome de usuário no label
    document.getElementById('profile-username').innerText = username;
} else { document.getElementById('profile-username').innerText ='não logado'}



// Carregar a imagem do armazenamento local ao iniciar a página
loadImageFromLocalStorage();

photo.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', () => {
    if (file.files.length <= 0) {
        return;
    }

    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;

        // Salvar a imagem no armazenamento local
        saveImageToLocalStorage(reader.result);
    }

    reader.readAsDataURL(file.files[0]);
});



document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search');
    searchInput.value = ' ';

    // Adiciona um ouvinte de eventos para filtrar os produtos quando o usuário digitar
    searchInput.addEventListener('input', function() {
      filterProducts();
    });
  });

  function filterProducts() {
    var searchTerm = document.getElementById('search').value.toLowerCase();
    var produtos = document.querySelectorAll('.tamanho');

    produtos.forEach(function(produto) {
      var produtoId = produto.id.toLowerCase();

      // Verifica se o ID do produto contém o termo de pesquisa
      if (produtoId.includes(searchTerm)) {
        produto.style.display = 'block'; // Exibe a div do produto
      } else {
        produto.style.display = 'none'; // Oculta a div do produto
      }
    });
  }
  //scrollar a barra de categorias//
  const scrollContainer = document.getElementById('scroll-container');

function scrollUp() {
    scrollContainer.scrollTop -= 50; // Ajuste conforme necessário
}

function scrollDown() {
    scrollContainer.scrollTop += 50; // Ajuste conforme necessário
}