// const gamesContainer = document.querySelector('.derecha');
// function allGames() {
//     fetch ('http://localhost:5051/juegos')
//     .then((response) => {
//         return response.json();
//     }) 
//     .then((allGames) =>{
//         console.log(allGames);

//         for (let i = 0; i < allGames.length; i++) {
//             const juego = allGames[i];
    
//             const $card = document.createElement('div');
//             $card.classList.add('card');
    
//             const $image = document.createElement('img');
//             $image.src = juego.image; 
    
//             $card.classList.add('card-content');
    
//             const $title = document.createElement('h2');
//             $title.textContent = juego.title; 
    
//             const $description = document.createElement('p');
//             $description.textContent = juego.description; 

//             const $price = document.createElement('h3');
//             $card.appendChild($image);
//             $card.appendChild($title);
//             $card.appendChild($description);
//             $card.appendChild($price);

//             const maxCharacters = 150;
//             const descriptionText = juego.description;

//         $card.addEventListener('click', clickJuego)
//             function clickJuego(){
//                 const gameID = juego._id;
//                 window.location.href = `oneGame.html?gameID=${gameID}`;
//                 }
        
        
//                 if (descriptionText.length > maxCharacters) {
//                   $description.textContent = descriptionText.substring(0, maxCharacters) + '...';
//                 } else {
//                   $description.textContent = descriptionText;
//                 }
//                 $price.textContent = juego.price + "€";
        
    
//             gamesContainer.appendChild($card);
//         }
//     })
    
// }

// allGames();
allGames();
const gamesContainer = document.querySelector('.derecha');
const searchInput = document.getElementById('searchInput'); // Get the search input field

let allGamess = []; // Array to store all games

function allGames() {
    fetch('http://localhost:5051/juegos')
        .then((response) => {
            return response.json();
        })
        .then((games) => {
            allGamess = games; // Store all games in the array
            displayGames(allGamess); // Display all games initially
            console.log(allGamess)

            searchInput.addEventListener('input', () => {
                const query = searchInput.value.toLowerCase();
                const filteredTitle = allGamess.filter(function(game){
                    return game.title.toLowerCase().includes(query)
                    
                });
            
                displayGames(filteredTitle); // Display the filtered games
                
            });

            searchGenre.addEventListener('input', () => {
                const query = searchGenre.value.toLowerCase();
                const filteredGenre = allGamess.filter(function(game){
                    return game.genre.toLowerCase().includes(query) 
                    
                });
            
                // Display the filtered games
                displayGames(filteredGenre)
            });
            
        });
}

function displayGames(games) {
    gamesContainer.innerHTML = ''; // Clear the container

    for (const juego of games) {
        // Create and append cards for each game
        const $card = document.createElement('div');
        $card.classList.add('card');

        const $image = document.createElement('img');
        $image.src = juego.image;

        $card.classList.add('card-content');

        const $title = document.createElement('h2');
        $title.textContent = juego.title;

        const $description = document.createElement('p');
        $description.textContent = juego.description;

        const $price = document.createElement('h3');
        $card.appendChild($image);
        $card.appendChild($title);
        $card.appendChild($description);
        $card.appendChild($price);

        const maxCharacters = 150;
        const descriptionText = juego.description;

        $card.addEventListener('click', clickJuego);

        function clickJuego() {
            const gameID = juego._id;
            window.location.href = `oneGame.html?gameID=${gameID}`;
        }

        if (descriptionText.length > maxCharacters) {
            $description.textContent = descriptionText.substring(0, maxCharacters) + '...';
        } else {
            $description.textContent = descriptionText;
        }
        $price.textContent = juego.price + '€';

        gamesContainer.appendChild($card);
    }
}

// Initial fetch of all games


// Listen for input events on the search bar
// searchInput.addEventListener('input', () => {
//     const query = searchInput.value.toLowerCase();
//     const filteredGames = allGamess.filter((game) => {
//         return (
//             game.title.toLowerCase().includes(query) ||
//             game.genre.toLowerCase().includes(query) ||
//             game.category.toLowerCase().includes(query)
//         );
//     });

//     displayGames(filteredGames); // Display the filtered games
// });



const $logo = document.querySelector('.logo');
$logo.addEventListener('click', clicklogo);

function clicklogo(){
  window.location.href = `home.html`
}

const $login = document.querySelector('.log');
$login.addEventListener('click', clicklogin);

function clicklogin(){
  window.location.href = `login.html`
}

const $register = document.querySelector('.reg');
$register.addEventListener('click', clickregister);

function clickregister(){
  window.location.href = `register.html`
}

window.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const loginSuccess = urlParams.get("login");
  
    const loggedIn = localStorage.getItem("loggedIn");
  
  
      
  
    if (loggedIn === "true") {
      const contentToChange = document.getElementById("contentToChange");
      contentToChange.innerHTML = "";
      const $userInfo = document.createElement("div");
      const $userAvatar = document.createElement("img");
      const $showname = document.createElement("h3");
      $userInfo.appendChild($userAvatar);
      $userInfo.appendChild($showname);
      const $logoutdiv = document.createElement("div");
      const $logout = document.createElement("h3");
      $logoutdiv.appendChild($logout);
      contentToChange.appendChild($userInfo);
      contentToChange.appendChild($logoutdiv);
  
      $userInfo.classList.add("userInfo");
      $logoutdiv.classList.add("logout");
  
      $logout.textContent = "Log out";
  
      $logoutdiv.addEventListener('click', clearUserData)
  
      function clearUserData(){
        localStorage.clear();
        location.reload();
      }
  
      const usernames = localStorage.getItem("username");
      const genders = localStorage.getItem("gender");
      console.log(usernames);
      console.log(genders)
      $showname.textContent = usernames;
      if (genders == "Female") {
        $userAvatar.setAttribute(
          "src",
          "https://res.cloudinary.com/dizd9f3ky/image/upload/v1697206194/imageFemale_hcrk1j.png"
        );
      } else if (genders == "Male") {
        $userAvatar.setAttribute(
          "src",
          "https://res.cloudinary.com/dizd9f3ky/image/upload/v1697206175/imageMale_mqwzhf.png"
        );
      }
    }
    
  });