function changecolor(){
const buttons = document.querySelectorAll('.color-button');
const navbar = document.querySelector('.navbar');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const gradientClass = button.classList[1];
    navbar.className = 'navbar';
    navbar.classList.add(gradientClass);
  });
});}