// console.log(`Hello`);
// window.alert(`this is an aleart`);

/* this 
is a 
comment */

// document.getElementById(`myh1`).textContent = `hello`;

// let x;
// x = 100;
// console.log(x);

// let price = 10.99;
// console.log(`The price is $${price}`);
// console.log(typeof price);

// let email = `bro123@gmail.com`;
// console.log(typeof email);
// console.log(`Your email is ${email}`);

// let online = false;
// console.log(`Bro is online: ${online}`);
// let forSale = true;
// console.log(`Is the car for sale: ${forSale}`);

// Varriables
let fullname = `Sma Bari`;
let age = 19;
let isStudent = true;
document.getElementById(`p1`).textContent = `Bro's name is ${fullname}`;
document.getElementById(`p2`).textContent = `Bro's age is ${age}`;
document.getElementById(`p3`).textContent = `Bro is a student: ${isStudent}`;

// Arithmetic Operators
let students = 30;
students = students + 1;
students += 1;
// students ++;
// All 3 lines are the same
students -= 1;
students --;
students *= 2;
students /= 2;
// To the power
students **= 2;
// The remainder of devision
// let extrastudents = students % 3;
// students %= 2;
console.log(`The number of students is ${students}`)


// Inputs:
// let username;
// username = window.prompt(`What is your username?`)
// console.log(username)

let username;
document.getElementById(`mySubmit`).onclick = function(){
    username = document.getElementById(`myText`).value;
    document.getElementById(`myH2`).textContent = `Hello ${username}`;
}


// Converting Inputs:
let x;
let y;
let z;
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// Constant:
const PI = 3.14159;
let radius;
let circumference;
document.getElementById(`submitRadius`).onclick = function(){
    radius = document.getElementById(`valueofRadius`).value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById(`circumferencevalue`).textContent = circumference + `cm`;
}



// Math:
let a = 3;
let b = 2;
let c = 1;
// z = Math.round(a);
// z = Math.floor(a);
// z = Math.ceil(a);
// z = Math.trunc(a);
// z = Math.pow(a , b);
// z = Math.sqrt(a);
// z = Math.log(a);
// z = Math.sin(a);
// z = Math.cos(a);
// z = Math.abs(a);
// z = Math.sign(a);
let max = Math.max(a,b,c);
let min = Math.min(a,b,c);
console.log(min);
console.log(max);