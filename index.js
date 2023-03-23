const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");



function getPokemon(){
  fetch("http://localhost:3000/characters")
  .then(response => response.json())
  .then(characters => {
    characters.forEach(function (character) {
      renderPokemon(character);
    });
  });
}


getPokemon();

pokeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = document.querySelector("#img-input").value;

  //create a new character with the udpated id, name, img, and likes
  let newChar = {
    id: pokemon.length + 1, //or uuidv4()
    name: name,
    img: img,
    likes: 0,
  };

  renderPokemon(newChar);
  pokeForm.reset();
});

pokemon.forEach(function (character) {
  renderPokemon(character);
});

function showCharacter(character){
  fetch(`http://localhost:3000/characters/${character.id}`)
  .then(response => response.json())
  .then(character => {
    const pokeCard = renderPokemon(character);
    pokeCard.id = "poke-show-card";
    pokeContainer.replaceChildren(pokeCard);
  });
}


function renderPokemon(char) {
  const pokeCard = document.createElement("div");
  pokeCard.className = "poke-card";
  pokeCard.id = `poke-${char.id}`;
  pokeCard.addEventListener("click", () => {
    showCharacter(char);
  })

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
  likesBttn.addEventListener("click", function (e) {
    //use e.stopPropogation() to stop the event from bubbling up to the parent element
    e.stopPropagation();
    // increment the characters number of likes
    ++char.likes;
    // update the DOM to reflect the new number of likes
    likesNum.textContent = char.likes;
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-bttn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function (e) {
    //use e.stopPropogation() to stop the event from bubbling up to the parent element
    e.stopPropagation();
    pokeCard.remove();
  });

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn, deleteBtn);
  pokeContainer.appendChild(pokeCard);
  return pokeCard;
}