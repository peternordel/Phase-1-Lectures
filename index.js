const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");

//TODO: Create the getPokemon function
//Makes a 'GET' request to http://localhost:3000/characters and receives a response of all the characters
//Invokes renderPokemon() for each returned character
//break the problem down into steps

function getPokemon(){
  fetch("http://localhost:3000/characters")
  .then(response => response.json())
  .then(characters => {
    characters.forEach(function (character) {
      renderPokemon(character);
    });
  });
}

// call the function
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

/*pokemon.forEach(function (character) {
  //renderPokemon(character);
});*/
renderPokemon(character);


//TODO: Create the showCharacter function
//Make a 'GET' request for a single pokemon character data via `http://localhost:3000/characters/:id`
//Invoke renderPokemon() for the returned character
//Update the id of the card returned by renderPokemon() to 'poke-show-card'
//Replace `pokeContainer` innerHTML with the matched character only. HINT: use `.replaceChildren()`
//break the problem down into steps

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
  //TODO: Create an event listener for the pokeCard div, that invokes the showCharacter function
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
    //return the pokeCard
  return pokeCard;
}