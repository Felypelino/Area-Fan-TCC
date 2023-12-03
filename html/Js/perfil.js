

//foto//
    let photo = document.getElementById('imgPhoto');
    let file = document.getElementById('flImage');
    
    // Função para salvar a imagem no armazenamento local
    function saveImageToLocalStorage(dataURL) {
        localStorage.setItem('cachedImage', dataURL);
    }
    
    // Função para carregar a imagem do armazenamento local, se existir
    function loadImageFromLocalStorage() {
        const cachedImage = localStorage.getItem('cachedImage');
        if (cachedImage) {
            photo.src = cachedImage;
        }
    }
    
//TEM QUE TER EM TODO INICIO DE JS (codigo a baixo)//
    // Obter o nome de usuário do armazenamento local
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

    let cachedImageDiv = document.getElementById('divCachedImage');

function loadAndDisplayImageFromLocalStorage() {
    const cachedImage = localStorage.getItem('cachedImage');
    if (cachedImage) {
        cachedImageDiv.style.backgroundImage = `url(${cachedImage})`;
        // Pode ser necessário ajustar estilos adicionais, como largura e altura
    }
}
