const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];

// 1. Select the form element with id `poke-form` using the .getElementById() method 
// and store in the variable `pokeForm`. 
const pokeForm = document.getElementById('poke-form');

// 2. Select the div element with id `poke-container` using the .querySelector() method 
// and store in the variable `pokeContainer`.
const pokeContainer = document.querySelector('#poke-container');

// 3. Select the label elements with class name `form-label` using the .getElementsByClassName() 
// and store in the variable `labels`.
const labels = document.getElementsByClassName('form-label');

// 4. Select all the div elements using the .querySelectorAll() method 
// and store in the variable `allDivs`.
const allDivs = document.querySelectorAll('div');

// 5. Select the div element with id `lecture-goals` 
// and use the .remove() method to remove the element from the DOM.
document.getElementById('lecture-goals').remove();

// 6. Define a function `renderPokemon()` that will generate the HTML for each character card

//This function uses for in to iterate over the array.
/*
function renderPokemon() {
  for (const key in pokemons) {
    const pokeCard = document.createElement('div');

    pokeCard.id = `poke-${pokemons[key].id}`;
    pokeCard.className = 'poke-card';

    const pokeImage = document.createElement('img');
    pokeImage.src = pokemons[key].img;

    const pokeName = document.createElement('h3');
    pokeName.textContent = pokemons[key].name;

    const pokeLikes = document.createElement('h3');
    pokeLikes.textContent = pokemons[key].likes;

    pokeCard.append(pokeImage, pokeName, pokeLikes);
    pokeContainer.append(pokeCard);
  }
}
*/

//this function uses forEach to iterate over the array.
function renderPokemon() {
  pokemons.forEach((poke) => {
    const pokeCard = document.createElement('div');

    pokeCard.id = `poke-${poke.id}`;
    pokeCard.className = 'poke-card';

    const pokeImage = document.createElement('img');
    pokeImage.src = poke.img;

    const pokeName = document.createElement('h3');
    pokeName.textContent = poke.name;

    const pokeLikes = document.createElement('h3');
    pokeLikes.textContent = poke.likes;

    pokeCard.append(pokeImage, pokeName, pokeLikes);
    pokeContainer.append(pokeCard);
  })
}
renderPokemon();
