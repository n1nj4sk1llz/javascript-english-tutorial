console.log('Hello world!')

// const, let and var

// const is a type of variable that you can't change

// let is a type of variable that you can change

// var is like let but it has different behaviour in relation to the scope

const name = 'Matt'
console.log('My name is', name)

let name2 = 'Matt'
name2 = 'Bob'
console.log('My name is', name2)

// primitive data types
const name3 = 'Tom' // a string is text
const number = 12 // this is a number
const number2 = '12' // a string
const boolean1 = true // a boolean is true or false
const nulldatatype1 = null // reserves the space on memory but there is nothing
let undefined1;
console.log(undefined1)

// non-primitive data types
const object1 = { // you can set multiple properties
    name: 'Lewis',
    age: 33
}

logData()

// old way of defining a function
function logData(){
    console.log('line 1') // every line is a statement
    console.log('line 2')
}

// arrow functions
const logDataArrowFunctions = () => {
    console.log('line 1') // every line is a statement
    console.log('line 2')
}

logDataArrowFunctions()