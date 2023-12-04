function login() {
    // Obter o valor do senha e do email dos inputs
    var enteredsenha = document.getElementById('senha').value;
    var enteredEmail = document.getElementById('email').value;
    // Obter o senha e o email armazenados no armazenamento local
    var storedSenha = localStorage.getItem('senha');
    var storedEmail = localStorage.getItem('gmail');
    if (enteredsenha === storedSenha && enteredEmail === storedEmail) {
        alert("Login bem-sucedido!");
        window.location.href = '/index.html';
    } else {
        alert("O email ou senha esta incorreto, tente novamente.");
    }
}