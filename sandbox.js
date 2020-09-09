/*// Loops

// for loop

for(let i = 0; i < 5; i++){
    console.log(i);
}

const names = ['Alex', 'Deniss', 'Max', 'Ivan'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// while loop

let j = 0;

while(j < 5){
    console.log(`Current number: ${j}`);
    j++;
}

//if statement

const age = 18;

if (age > 21){
    console.log('Welcome to our page');
}

const workers = ['Deniss', 'Alex', 'Ina', 'Maria'];

if (workers.length > 3){
    console.log('That is big company');
}

// else if 

const password = 'pssword123121';

if(password.length > 12 && password.includes('@')){
    console.log('password is strong');
} else if(password.length > 8 || password.includes('@')){
    console.log('Password is too short or not strong');
} else if(!password.length == 10){
    console.log('We do not like your password');
} else {
    console.log('Password is weak');
}

console.log(!true);
console.log(!false);

//let ages = [9, 18, 35, 15]
//Loops through all elemnt (ages) and
// print if this person can drink alcohol

let ages = [9, 18, 35, 15];
let time = 21;
//If time > 22 - age doesn't matter, no alco
for (let i = 0; i < ages.length; i++){
    if(ages[i] >= 18){
        console.log(`You can drink alco, you are ${ages[i]}`);
    } else {
        console.log('You too young for alco');
    }
}


// Functions

//Function declaration

function greet(){
    console.log('Hello there!');
}
//greet();
//greet();


//function expression

const speak = function(name = 'Max', surname = 'Petrovs'){

    console.log(`Hello ${name} ${surname}`);
};

speak('Denis');
speak('Katja', 'Livcane');
speak('Maris');

const calculateArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
}
const myCircle = calculateArea(5);
console.log(myCircle);

//arrow function

const arrowCalculateArea = (radius) => {
    return 3.14 * radius**2;

};
// or
//const arrowCalculateArea = radius => return 3.14 * radius**2;

console.log(`Area is: ${arrowCalculateArea(10)}`)

const bill = (product, tax) => {
    total = 0;
    for(let i = 0; i < product.length; i++){
        total += product[i] + product[i] * tax;
}     
return total;
}
    console.log(bill(3, 2)) 
    
    //for Each
    
    let people = ['Max', 'Alex', 'Denis', 'Ivan'];

    for (let i = 0; i < people.length; i++){
        console.log(people[i]);

    };
//or
    people.forEach(person => {
        console.log(person);
    });


// Objects

let user = {
  name: "Deniss",
  age: 30,
  email: "deniss@gmail.com",
  location: "Latvia",
  blogs: ["Why 2020 is the best year", "Why burgers are good"],
  login: function () {
    console.log("The user logged in");
  },
  logout() {
    console.log("The user logged out");
  },
  logBlogs: function () {
    console.log(this);
  },
};

console.log(this.blogs);

console.log(user.blogs);

user.name = "Alex";
console.log(user.login(), user.name);

const key = "age";
console.log(user[key]);

//Create object

let car = {
  brand: "AUDI",
  model: "A8",
  year: "2015",

  methodOne() {
    console.log("Your car is cool");
  },
  methodTwo() {
    console.log("Your car is not cool");
  },
};

console.log(car.methodOne(), car.brand);
console.log(car.methodTwo(), car.year);

//Math object

console.log(Math);
console.log(Math.PI);

const number = 7.7;

console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.trunc(number));

// random number

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

let array = [
  { name: "Deniss", age: 27 },
  { name: "Max", age: 23 },
];
console.log(array[0].name);

let letters = [
  { title: "N", score: 1 },
  { title: "K", score: 5 },
  { title: "Z", score: 10 },
  { title: "X", score: 8 },
  { title: "D", score: 2 },
  { title: "A", score: 1 },
  { title: "E", score: 1 },
];

const sumOfScores = (scores) => {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i].score;
  }
  return total;
};

console.log(sumOfScores(letters));

// primitive type vs reference type

//primitive types
//numbers, strings, booleans

let rectangle = {};
rectangle.edge1 = 3;
rectangle.edge2 = 5;
let circle = {};
circle.radius = 5;
let square = {};
square.edge = 5;

getArea()
getInfo()

function getCircleArea(circle.radius) {
return Math.PI * circle.radius**
};

function getSquareArea(edge) {
return square.edge**
};
*/

function calculateRectangleArea(x, y) {
  return x * y;
}

function calculateCircleArea(x) {
  return Math.PI * x * x;
}

function calculateSquareArea(x) {
  return x * x;
}

if (calculateRectangleArea.name === true)
  (function calculateRectangleArea(x, y) {
    return [x * y];
  });
if (calculateSquareArea.name === true)
  (function calculateSquareArea(x) {
    return [x * x];
  });
else
  (function calculateCircleArea(x) {
    return [Math.PI * x * x];
  });

console.log(calculateRectangleArea(10, 5));
console.log(calculateSquareArea(10));
console.log(calculateCircleArea(10));
