let games = [];
let currentIndex = 0;


const $carusel = document.querySelector('.foto_random');
const $nuevos = document.querySelector('.nuevos');
const $popular = document.querySelector('.populares');

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

//Category
function newGames() {
  fetch('http://localhost:5051/juegos/category/new')
    .then((response) => {
      return response.json();
    })
    .then((newCategory) => {
      console.log(newCategory);

      for (let i = 0; i < newCategory.length; i++) {

        const $card = document.createElement('article');
        const $images = document.createElement('img');
        const $desc = document.createElement('p');
        const $price = document.createElement('h3');
        $images.setAttribute('src', newCategory[i].image);
        $nuevos.appendChild($card);
        $card.appendChild($images);
        $card.appendChild($desc);
        $card.appendChild($price);
        $card.classList.add('card-content');
        $images.classList.add('imagesNew');
        // $desc.textContent = newCategory[i].description;
        const maxCharacters = 150; // Adjust as needed
        const descriptionText = newCategory[i].description;

        $card.addEventListener('click', clickJuego)

        function clickJuego(){
        const gameID = newCategory[i]._id;
        window.location.href = `oneGame.html?gameID=${gameID}`;
        }

        if (descriptionText.length > maxCharacters) {
          $desc.textContent = descriptionText.substring(0, maxCharacters) + '...';
        } else {
          $desc.textContent = descriptionText;
        }
        $price.textContent = newCategory[i].price + "€";

      }

    });

}


       

function popularGames() {
  fetch('http://localhost:5051/juegos/category/popular')
    .then((response) => {
      return response.json();
    })
    .then((popularCategory) => {
      console.log(popularCategory);

      for (let i = 0; i < popularCategory.length; i++) {

        const $card = document.createElement('article');
        const $images = document.createElement('img');
        const $desc = document.createElement('p');
        const $price = document.createElement('h3');

        $images.setAttribute('src', popularCategory[i].image);
        $card.appendChild($images);
        $card.appendChild($desc);
        $card.appendChild($price);
        $popular.appendChild($card);
        $card.classList.add('card-content');
        $images.classList.add('imagesNew');
        // $desc.textContent = popularCategory[i].description;
        const maxCharacters = 150; // Adjust as needed
        const descriptionText = popularCategory[i].description;

        if (descriptionText.length > maxCharacters) {
          $desc.textContent = descriptionText.substring(0, maxCharacters) + '...';
        } else {
          $desc.textContent = descriptionText;
        }
        $price.textContent = popularCategory[i].price + "€";

      }

    });

}
popularGames();
newGames();