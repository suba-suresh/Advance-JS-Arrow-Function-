/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
 const  addTwoNumbers = (a, b) => {
    // code block
    return a+b;
 }
 let sum = addTwoNumbers(3,5)
 console.log(sum);
// Arrow Function With Parameters

// Single Line Arrow Function With Parameters
const  addTwoNumbers2 = (a, b) => a+b;

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello there!");

const sayHello = () =>console.log("Hello!");
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (

   '<p>this is a multiline string! </p>'


)
console.log(returnMultipleLines());