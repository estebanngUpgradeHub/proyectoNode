let games = [];
let currentIndex = 0;

const $carusel = document.querySelector('.foto_random');


//Home
fetch('http://localhost:5051/juegos')
    .then((response) => response.json())
    .then((fetchedGames) => {
        games = fetchedGames;
        setInterval(updateCarusel, 3000);
    });

function updateCarusel() {
    $carusel.setAttribute('src', games[currentIndex].image);

    currentIndex = (currentIndex + 1) % games.length;
}

