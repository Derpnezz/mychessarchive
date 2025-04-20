function goToNAME(link) {
  const container = document.querySelector('.container');
  const main = document.querySelector('.main');
  const actLink = link + ".html";

  container.style.transition = 'opacity 1s ease-out';
  container.style.opacity = '0';

  setTimeout(() => {
    container.style.display = 'none';
    main.classList.add('visible');
    window.location.href = actLink; // Redirect to the specified link
  }, 1000);
}