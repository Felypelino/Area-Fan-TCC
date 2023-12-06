//pagamento//
function mostrarForm() {
    var sumiuTudo = document.getElementById("sumiu")
    var formContainer = document.getElementById('form-container');
    formContainer.style.display = 'unset';
    sumiuTudo.style.display = "none"
  }

  //frete//
  function aleatorizarNumero() {
    // Gera um número aleatório de 2 a 8
    var numeroAleatorio = Math.floor(Math.random() * 7) + 2;

    // Exibe o resultado em um elemento <b>
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent =  numeroAleatorio;
  }

  var botaoSelecionado = null;

  function mudarCor(botao) {
    // Restaura o botão anterior para o estado original
    if (botaoSelecionado !== null) {
      botaoSelecionado.classList.remove('selecionado');
    }

    // Seleciona o novo botão
    botaoSelecionado = botao;
    botaoSelecionado.classList.add('selecionado');
  }
//Nome do usuario//
  var username = localStorage.getItem('username');



  // Verificar se o nome de usuário está disponível
  if (username) {
      // Exibir o nome de usuário no label
      document.getElementById('profile-username').innerText = username;
  } else { document.getElementById('profile-username').innerText ='não logado'}
  