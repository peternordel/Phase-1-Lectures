// Functions consists of statements/tasks that return a value or undefined



// Function declaration
//Create a greeting function that returns a greeting
function greeting(){
    return "Hello World"
} 

// Function expression
//To invoke a function call its name and use parenthesis
console.log(greeting())


//create a greeting function that console logs a greeting
function say_goodbye(){
    console.log("Goodbye")
}
say_goodbye()
greeting()

//console.log and return do different things
//console.log only logs something to the console
//return only returns the value of the function


//Functions can take variables called parameters
//When the function is called, it is passed arugments that become the value of the parameter


//Create a function called squareNum
//that takes one parameter and returns the squared number of that parameter
function squareNum(number){
    return number * number
}
console.log(squareNum(2))

//Functions can take multiple parameters
//Create a function called addNums, that takes two parameters and returns the sum of those two parameters
function addNums(number1, number2){
    return number1 + number2
}

console.log(addNums(4,5))

//Whats another way to write a function?




//Arrow functions
// Arrow functions are shorter to write
// Arrow functions with a single parameter do not need parenthesis
//The benefits of functions are that they are reusable and can be called anywhere in your code


//create a arrow function that takes one parameter and returns your favorite food, assign it to a variable
const favorite_food = (food) => {
    return food
}

console.log(favorite_food("Pizza"))

//Functions are just like variables
//They can be passed into other functions, assigned to variables, and returned from other functions
//This makes them first class functions



// A function that returns a function is called a Higher-Order Function.
//create a funtion that returns a function
function create_function(){
    return function(){
        return "Hello"
    }
}

//Create a function called max that takes two numbers as arguments 
//the function should return a string with the largest number
//if the numbers are equal, return a string that says the numbers are equal
function max(number1, number2){
    if(number1 > number2){
        return "The largest number is " + number1
    }
    else if(number2 > number1){
        return "The largest number is " + number2
    }
    else {
        return "The numbers are equal"
    }
}
console.log(max(6,9))
console.log(max(10,10))


//A function that is taken as an argument is a callback
//create a greeting function, that take a callback as an argument and returns the callback
function greet(name, callback){
    console.log("Hello" + " " + name) 
    console.log(callback())
}

function callMe(){
   return "I am the callback function"
}



//console.log(greet("Stephen", callMe))
greet("Stephen", create_function)


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
console.log(inventory[4])
console.log(inventory[5].price)
//hoisting
console.log(price_formater(inventory[5]))
function price_formater(book){
    return "$" + book.price
}
const printDetails = (book) => { return  `${book.title} by ${book.author} is on sale!` }
console.log(printDetails(inventory[3]))

const discountPrice = (discount,book) => Math.floor(book.price/discount)
console.log("The discounted price is " + discountPrice(2, inventory[0]))

//global scope
const newTitle = "The JavaScript Cookbook"


function buildBook(title, price, author, imageUrl){
    //function scope
    const bookObj = {}
    bookObj.title = title
    bookObj.price = price
    bookObj.author = author
    bookObj.inventory = 0
    bookObj.reviews = []

    if(!imageUrl){
        //block scope
        const defaultImage = "placeholder"
        bookObj.imageUrl = defaultImage
    }
    else{
        bookObj.imageUrl = imageUrl
        console.log(defaultImage)
    }
    return bookObj;
}
console.log(inventory.push(buildBook(newTitle, 32, "Sam Waters", false)))
console.log(inventory)

function mapOverArray(bookArray, cb){
    const newArray = []
    for(let book of bookArray){
        newArray.push(cb(book))
    }
    return newArray
}
function mapTitle(book){
    return book.title
}
console.log(mapOverArray(inventory, (book) => book.title))
console.log(mapOverArray(inventory, (book)=> book.author))


function maps(bookArray){
    for(let book of bookArray){
        console.log(book.title)
    }
}
//maps(inventory)
inventory.map((x) => console.log(x.title))
//console.log(array)


