// Functions consists of statements/tasks that return a value or undefined
// Function declarations (How to declare a function)
//Create a greeting function that returns a greeting
function greeting(){
    return "Hello World"
}

// Function expression
//To invoke a function call its name and use parenthesis
greeting()

//create a greeting function that console logs a greeting

function hello_world(){
    console.log("Hello World")
}
hello_world()

//console.log and return do different things
//console.log only logs something to the console
//return only returns the value of the function


//Functions can take variables called parameters
//When the function is called, it is passed arugments that become the value of the parameter


//Create a function called squareNum
//that takes one parameter and returns the squared number of that parameter
function squareNum(num){
    return num * num
}
squareNum(2)

//Functions can take multiple parameters
//Create a function called addNums, that takes two parameters and returns the sum of those two parameters
function addNums(num1, num2){
    return num1 + num2
}
addNums(2, 3)

//Whats another way to write a function?




//Arrow functions
// Arrow functions are shorter to write
// Arrow functions with a single parameter do not need parenthesis
//The benefits of functions are that they are reusable and can be called anywhere in your code


//create a arrow function that takes one parameter and returns your favorite food
//assign it to a variable
const fav_food = (food) => {
    return food
}
console.log(fav_food("Pizza"))

//Functions are just like variables
//They can be passed into other functions, assigned to variables
//and returned from other functions
//This makes them first class functions



// A function that returns a function is called a Higher-Order Function.
//create a funtion that returns a function
function create_funtion(){
    return function(){
        console.log("Hello World")
    }
}

//Create a function called max that takes two numbers as arguments 
//the function should return the a string with the largest number
//if the numbers are equal, return a string that says the numbers are equal

function max(num1, num2){
    if(num1 > num2){
        return "The largest number is " + num1
    }else if(num2 > num1){
        return "The largest number is " + num2
    }else{
        return "The numbers are equal"
    }
}

//A function that is taken as an argument is a callback
//create a greeting function, that take a callback as an argument and returns the callback
// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);


// Lets talk about Data 
const inventory = [
    {
        id:1,
        title: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marjin Haverbeke',
        price: 10.00,
        reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
        inventory: 10,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        
    },
    {
        id:2,
        title: 'JavaScript & JQuery: Interactive Front-End Web Development',
        author: 'Jon Duckett',
        price: 45.75,
        reviews: [{userID: 15, content:'good way to learn JQuery'}],
        inventory: 2,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
    },
    {
        id:3,
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        price: 36.00,
        reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
        inventory: 8,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    },
    {
        id:4,
        title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        price: 25.50,
        reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
        inventory: 0,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
        
    },
    {
        id:5,
        title: 'You Don’t Know JS',
        author: 'Kyle Simpson',
        price: 6.00,
        reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
        inventory: 7,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
    }, 
    {
        id:6,
        title: 'Learn Enough JavaScript to Be Dangerous',
        author: 'Michael Hartl',
        price: 24.00,
        reviews: [{userID: 50, content:'pretty good'}],
        inventory: 5,
        imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

    },
    {
        id:7,
        title: 'Cracking the Coding Interview',
        author: 'Gayle Laakmann McDowell',
        price: 49.95,
        reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
        inventory: 20,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

    }
]
//demo hoisting

function priceFormatter(book){
    return "$" + book.price

}
console.log(priceFormatter(inventory[0]))

const printAdd = book => `${book.title} by ${book.author} is on sale!`
printAdd(inventory[0])
console.log(printAdd(inventory[0]))

//* Create an arrow function with two parameters
const discountPrice = (discount, book) => Math.floor(book.price/discount)

console.log(discountPrice(2, inventory[0]))

//* Demo scope 
//Global
const newTitle = 'The JavaScript Cookbook'

function buildBook(title, price, author, imageUrl){
    // Function scope
    // Variables inside a function become local 
    const bookObj = {}
    bookObj.title = title
    bookObj.price = price
    bookObj.author = author
    bookObj.inventory = 0
    bookObj.reviews = []

    if(!imageUrl){
        //Block Scope
        const defaultImage = 'placeHolderImage.jpg'
        bookObj.imageUrl = defaultImage    
    } else {
        bookObj.imageUrl = imageUrl
    }
    return bookObj
}
console.log(inventory.push(buildBook(newTitle, 32, 'Shelly Powers', false)))
console.log(inventory)

//* Demo another callback
function mapOverArray(bookArray, cb){
    const newArray = []
    for(let book of bookArray){
        newArray.push(cb(book))
    }
    return newArray
}
console.log(mapOverArray(inventory, (book) => book.title))













