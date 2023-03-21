const pokemon = [
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

const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");

pokemon.forEach(function (character) {
  renderPokemon(character);
});

function renderPokemon(char) {
  const pokeCard = document.createElement("div");
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = char.img;
  pokeImg.alt = `${char.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = char.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "likes-num";
  likesNum.textContent = char.likes;
  
  const likesBttn = document.createElement("button");
  likesBttn.className = "like-bttn";
  likesBttn.textContent = "♥";
  likesBttn.addEventListener('click', () => {
    likesNum.textContent = ++char.likes;
  })

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-bttn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener('click', () => pokeCard.remove())

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn, deleteBtn);
  pokeContainer.appendChild(pokeCard);
}

pokeForm.addEventListener('submit', submitNewPokemon);

function submitNewPokemon(e) {
  e.preventDefault();
  //select name
  const name = document.querySelector('#name-input').value;

  //select image using selector
  const image = document.querySelector('#img-input').value;

  //create a new object with the new data
  const newData = {
    id: 6,
    name: name,
    img: image,
    likes: 0,
  }

  //pass the object to the renderPokemon
  renderPokemon(newData);

  //reset the form
  pokeForm.reset();
}
