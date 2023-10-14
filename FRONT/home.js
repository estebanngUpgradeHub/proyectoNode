// fetch('http://localhost:5051/juegos')
//   .then((response) => {
//     return response.json();
//   })
//   .then((games) => {
//     console.log(games);
//   });

//   const $carusel = document.querySelector('.foto_random')

//   for (let i = 0; i < games; i++) {
//     const game = games[i];
//     $carusel.setAttribute('src', game.image)
    
//   }

async function getGames(){
  let allGames = [];
  for (let i = 0; i < 30; i++) {
    const response = await fetch ('http://localhost:5051/juegos')
    const resultado = await response.json()
    allGames.push(resultado);
  }
  console.log(allGames)
  return allGames;
}
