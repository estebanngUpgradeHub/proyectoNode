const $header = document.querySelector('.foto_random');
const $desc = document.querySelector('.gameDesc');
const $titulo = document.querySelector('.titulo');
const $genre = document.querySelector('.genre');
const $dev = document.querySelector('.dev');
const $date = document.querySelector('.date');
const $player = document.querySelector('.player');


const urlParams = new URLSearchParams(window.location.search);
const gameID = urlParams.get('gameID');

fetch(`http://localhost:5051/juegos/${gameID}`)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);

    $header.setAttribute('src', myJson.image)
    $desc.textContent = myJson.description
    $titulo.textContent = myJson.title
    $genre.textContent = myJson.genre
    $dev.textContent = myJson.developer
    $date.textContent = myJson.releaseDate
    if (myJson.playerNumber){
    $player.textContent = myJson.playerNumber
    } else if (!myJson.playerNumber){
        $player.textContent = "Unlimited"
    }
  });


