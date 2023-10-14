fetch('http://localhost:5051/juegos')
  .then((response) => {
    return response.json();
  })
  .then((games) => {
    console.log(games);
  });

  const $carusel = document.querySelector('.foto_random')
  let allGames = [];
  for (const game of allGames) {
    const img$ = document.createElement('img');
    img$.src = game.imagen; 
    document.body.appendChild(`[class="carusel_foto"]`); 
  }



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
