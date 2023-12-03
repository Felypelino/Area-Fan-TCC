
    // Obter o nome de usuário do armazenamento local
    var username = localStorage.getItem('username');

    // Verificar se o nome de usuário está disponível
    if (username) {
        // Exibir o nome de usuário no label
        document.getElementById('profile-username').innerText = username;
    } else { document.getElementById('profile-username').innerText ='não logado'}


    //contagem do banner//
let count = 1;
document.getElementById("radio1").checked = true;
setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}


//teste//
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