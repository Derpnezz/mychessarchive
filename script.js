function goToNAME(link) {
  const parsedLink = link + ".html";
  window.location.href = parsedLink;
}

// load the games based on div card gameID
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const gameID = card.getAttribute('gameID').replace(/\D/g, "");

        if (gameID) {
            // Create iframe
            const iframe = document.createElement('iframe');
            iframe.id = gameID;
            iframe.setAttribute('allowtransparency', 'true');
            iframe.setAttribute('frameborder', '0');
            iframe.style.width = '100%';
            iframe.style.border = 'none';
            iframe.src = `https://www.chess.com/emboard?id=${gameID}`;

            // Create script
            const script = document.createElement('script');
            script.setAttribute('nonce', 'chesscom-diagram');
            script.textContent = `
                window.addEventListener("message", e => {
                    if (e.data && "${gameID}" === e.data.id && document.getElementById("${gameID}")) {
                        document.getElementById("${gameID}").style.height = e.data.frameHeight + 37 + "px";
                    }
                });
            `;

            // Append to card
            card.appendChild(iframe);
            card.appendChild(script);
        }
    });
});