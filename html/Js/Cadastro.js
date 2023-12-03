function validateEmail() {
    var emailInput = document.getElementById('email');
    var resultMessage = document.getElementById('result');
    var errorMessage = document.getElementById('error-message');
    var gmail = document.getElementById('email')
    var email = emailInput.value.toLowerCase();

    if (email.includes('@gmail') || email.includes('@outlook') || email.includes('@')) {
      resultMessage.style.color = 'green';
      localStorage.setItem('gmail', gmail);
      resultMessage.textContent = 'Bem vindo.';

      // Redirecionar para outra página
      window.location.href = '/html/index.html';
      
      // Limpar mensagem de erro se existir
      errorMessage.textContent = '';
    } else {
      resultMessage.textContent = ''; // Limpar mensagem de resultado
      errorMessage.textContent = 'O email deve conter "@".';
    }
  }

  function login() {
    // Obter o valor do nome de usuário do input
    var username = document.getElementById('username').value;

    // Verificar se o nome de usuário foi fornecido
    if (username.trim() === "") {
        alert("Por favor, insira um nome de usuário.");
        return;
    }

    // Armazenar o nome de usuário no armazenamento local
    localStorage.setItem('username', username);
}

function senha(){
    var senha = document.getElementById('senha').value;
    if (senha.trim() === "") {
        alert("Por favor, insira uma senha.");
        return;
}
localStorage.setItem('senha', senha);
}
