//Review
// callback functions
function divide(a, b) {
  console.log(a / b)
}

function operation(val1, val2, callback) {
  callback(val1, val2)
}

operation(6, 5, sum)

//nested functions

function addNumber(x,y)
{

  function showMessage(text)
  {
    console.log(text);
  }

  let sum=x+y;
showMessage("sum is " + sum)
}

addNumber(5,6)
showMessage("20")

function displayCounter() {
  let count = 0;

  increment = function () {
    return ++count;
  };

  return increment;
}
counter = displayCounter()
console.log(counter())

// array methods
//create an array list of random names
const names = ["John", "Paul", "George", "Ringo", "Pete", "Stuart", "Mick", "Keith"];
// push a new name to the array
console.log(names.push("Brian"));

//unshift a new name to the array
console.log(names.unshift("Eric"));

//use the spread operator and copy the names array to a new array
const newNames = [...names];
console.log(newNames);

//remove the first element from the array
console.log(names.shift());

//remove the last element from the array
console.log(names.pop());

//use the slice method to copy the first 3 elements of the array
const firstThree = names.slice(0, 3);
console.log(firstThree);

//use the splice method to remove the first 3 elements of the array
console.log(names.splice(0, 3));








// How to select single elements
// use querySelector("")
// this will traverse the DOM and return the first element
// that matches the tag, class, or id

//Select by tag using querySlector
const query = document.querySelector('div');
console.log(query)

//Select by class using querySlector
const query2 = document.querySelector('.form-label')
console.log(query2)

// You can also use getElementById
//Select by id
const query3 = document.getElementById('poke-form-container')
console.log(query3)


//How to select multiple elements
//Select all elements
const query4 = document.querySelectorAll('div')
console.log(query4)


//Select elements by tag name

const query5 = document.getElementsByTagName('label')
console.log(query5)

//Select elements by class name
const query6 = document.getElementsByClassName('form-label')
console.log(query5)


//change the text of a div using textContent
const div1 = document.querySelector('div')
div1.textContent = "Dragon Ball Z"


//change the text using innerText
const div2 = document.querySelector('div')
div2.innerText = "Pokemon"
//create a new element, and add text to it
const newDiv = document.createElement('div')
newDiv.textContent = "My New Div"
document.body.appendChild(newDiv)

//change the content of a div using innerHTML
newDiv.innerHTML = '<p> use with caution </p>'

// remove elements using remove() and innerHTML()
newDiv.remove()
newDiv.innerHTML = ""


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
const pokeForm = document.getElementById("poke-form");

// 2. Select the div element with id `poke-container` using the .querySelector() method 
// and store in the variable `pokeContainer`.
const pokeContainer = document.querySelector("poke-container");
// 3. Select the label elements with class name `form-label` using the .getElementsByClassName() 
// and store in the variable `labels`.
const labels = document.getElementsByClassName("form-label");

// 4. Select all the div elements using the .querySelectorAll() method 
// and store in the variable `allDivs`.
const allDivs = document.querySelectorAll("div");

// 5. Select the div element with id `lecture-goals` 
// and use the .remove() method to remove the element from the DOM.
const lectureGoals = document.getElementById("lecture-goals");
lectureGoals.remove();

// 6. Define a function `renderPokemon()` that will generate the HTML for each character card
function renderPokemon(){
  // create the card is a div  pokeCard

  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${char.id}`;
  pokeCard.className = "poke-card";

  // inside the pokeCard, need to create an img element
  const pokeImg = document.createElement("img");
  pokeImg.src = char.img;
  pokeImg.alt = `${char.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = char.name;

  // add the img to the DOM
  pokeCard.append(pokeImg);

  // slap the pokeCard on the DOM
  pokeContainer.appendChild(pokeCard);

}

