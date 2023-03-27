//Review how to run json server, fetch from a db.json, or an external api call
//installs json-server globally
// npm install -g json-server

//fetches data from a db.json file

fetch("http://localhost:3000/names")
.then(res => res.json())
.then(names => {
    names.forEach((name)=>{
        renderNames(name)

    })
})

function renderNames(name){
    //const newDiv = document.createElement("div")
    //newDiv.className = "nameDiv"
    const header = document.createElement("h4")
    header.textContent = name.firstname
    const nameDiv = document.getElementById("poke-container")
    nameDiv.append(header)

}

fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json())
.then(dog => {
    console.log(dog)
})

