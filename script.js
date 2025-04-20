
function fadeOutContainer() {
  const container = document.querySelector('.container');
  const main = document.querySelector('.main');
  
  container.style.transition = 'opacity 1s ease-out';
  container.style.opacity = '0';
  
  setTimeout(() => {
    container.style.display = 'none';
    main.classList.add('visible');
  }, 1000);
}
