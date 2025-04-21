function goToNAME(link) {
  const parsedLink = link + ".html";
  window.location.href = parsedLink;
}

/*
window.onload = () => {
  const cards = document.querySelectorAll('.card');

  // Assign IDs based on position
  cards.forEach((card, index) => {
    card.id = `game-${cards.length - index}`;
  });

  window.addEventListener('scroll', () => {
    let foundId = null;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      // Ensure the card is within the visible area of the viewport
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        foundId = card.id; // Store the ID of the card currently in viewport

        // Check if the iframe is loaded
        const iframe = card.querySelector('iframe');
        if (iframe && !iframe.dataset.loaded) {
          // Set a 'loaded' dataset attribute once the iframe loads
          iframe.onload = () => {
            iframe.dataset.loaded = true;
            const newUrl = `tournament.html#${foundId}`;
            history.pushState(null, null, newUrl); // Update URL
          };
        }
      }
    });

    if (foundId) {
      const newUrl = `tournament.html#${foundId}`;
      history.pushState(null, null, newUrl); // Alternative update
    }
  });
};
*/