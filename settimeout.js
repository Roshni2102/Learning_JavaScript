// function timeset(){
//     console.log("This is a message that will be logged immediately.");
// const time = setTimeout(() => {
//     console.log("This is a message that will be logged after 2 seconds.");
// }, 2000);
// console.log("This is a message that will be logged immediately after the setTimeout call.");
// }
// timeset();


// console.log("Hello JavaScript!");
// setTimeout(() => {
//     console.log("Course from Internshala");
// }, 2000);
// // Fetching data from an API of browser
// fetch is in microtask queue 
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res => res.json())
//     .then(json => console.log(json))
// console.log("Welcome to the course!");

// console.log("Hello JavaScript!");
// setTimeout(() => {
//     console.log("This is a message that will be logged after 2 second.");
// }, 2000);   
// setTimeout(() => {
//     console.log("This is a message that will be logged after 1 second.");
// }, 1000);
// setTimeout(() => {
//     console.log("This is a message that will be logged after 3 seconds.");
// }, 3000);
// setTimeout(() => {
//     console.log("This is a message that will be logged after 0 seconds.");
// }, 0);
// console.log("Welcome to the course!");

// callback
// callback function is  a function in javaScript which is passed as an argument to ather function.

// function createMessage(name, callback) {
//     setTimeout(() => {
//       const message = `Hello, ${name}!.`;
//       callback(message);
//     // return message;  
//     }, 1000); 
// }

// function displayMessage(message){
//     console.log(message);
// }
// createMessage("john", displayMessage); // This will log the message after 1 second
// const message = createMessage("john");
// displayMessage(message);

// function createMessage(name) {
//     const  message = `Hello, ${name}!`;
//     return message;
// }
// function displayMessage(message) {
//     setTimeout(() =>
//     {
//         console.log(message);
//     }, 1000);
// }
// const message = createMessage();
// displayMessage(message); // This will log the message after 1 secondQ

// // callback hell
// function firstFunction(val) {
//     setTimeout(() => {
     
//     }, 1000); // Simulating an asynchronous operation
    
// }
// function secondFunction(val) {
//     return val + 2;
// }
// function thirdFunction(val) {
//     return val + 3;
// }
// function doOperations() {
//     let result = 0;
//      result = firstFunction(result);
//      result = secondFunction(result);
//      result = thirdFunction(result);
//      console.log(`The final result is: ${result}`);
// }
// doOperations(); // This will log "The final result is: 6"

// callback hell mecanism
// function firstFunction(val, callback) {
//     setTimeout(() => {
//      const result1 = val + 1;
//      callback(result1);
//     }, 1000); // Simulating an asynchronous operation
    
// }
// function secondFunction(val, callback) {
//     const result2 = val + 2;
//     callback(result2);
// }
// function thirdFunction(val, callback) {
//    const result3 = val + 3;
//    callback(result3);
// }
// // pyramid of doom
// function doOperations() {
//     firstFunction(0, (result) => {
//         secondFunction(result, (result1) => {
//             thirdFunction(result1, (result2) => {
//                 console.log(`The final result is: ${result2}`);
//             })
//         } )
//     })
// }
// doOperations(); // This will log "The final result is: 6"

// function processNumbers(numbers, callback) {
// 	// write your code here
//     const result = [];
//     for (let i = 0; i < numbers.length; i++) {
//         result.push(callback(numbers[i]));
//     }
//     return result;
// }

// function square(number) {
//     // Return the square of the number
//       return number ** 2;

         
// }

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = processNumbers(numbers, square);
// console.log(squaredNumbers);

// // promise
// const promise1 = new Promise((resolve, reject) => {
//     let PromiseResult;
//     setTimeout(() => {
//          PromiseResult = false;
//         if (PromiseResult) {
//             resolve("Promise resolved successfully!");
//         }
//         else {
//             reject("Promise rejected!");
//         }
//     }, 1000);
// });

// // consuming the promise
// promise1
//     .then((result) => {
//         console.log(result); // This will log "Promise resolved successfully!" after 1 second
//     })
//     .catch((error) => {
//         console.error(error); // This will log "Promise rejected!" if the promise is rejected
//     });

// const promise = new Promise(function(resolve, rejected) {
//     let promiseResult;
//     setTimeout(() => {
//         promiseResult = true;
//         if (promiseResult) {
//             resolve("Promise resolved successfully!");
//         }else {
//             rejected("Promise rejected!");
//         }
//     }, 2000);
// })
// // consuming the promise
// promise.then(result => console.log(result)); 
// promise.catch(err => console.log(err));
// console.log("hello");
// console.log("promise", promise);

// promise is of three states
// 1. pending   
// 2. resolved
// 3. rejected

// function simplePromiseDemo(success) {
//     // Return a Promise
// return new Promise((resolve, rejected) => {
//     console.log("Promise is pending...");
//   setTimeout(() =>{
    
//     if(success){
//         resolve("fulfilled");
//     }else{
//         rejected("rejected");
//     }
// }, 0)  
// });
// }
// // Log "Promise is pending..."

//     // Simulate a network request with setTimeout

// simplePromiseDemo(true) // Change to false to test rejection
// .then((result) => console.log(result)); 

// simplePromiseDemo(false) // Change to true to test resolution
// .catch((err)=> console.log(err)); // Resolve or reject the Promise based on the success flag


// simplePromiseDemo(true)
// .then((result) => console.log(result)); // This will log "fulfilled" if the promise is resolved

// simplePromiseDemo(false)
// .catch((err) => console.log(err)); // This will log "rejected" if the promise is rejected

// fetch
// let promiseObject = fetch("https://jsonplaceholder.typicode.com/posts/1");
// // promiseObject.then(response => response.json()).then(result => console.log(result))
// // .catch(err => console.log(err)); // This will log the fetched data or an error if the fetch fails
// console.log(promiseObject);
// // promiseObject.then(response => console.log(response));

// function fetchData(success) {
//     // Return a Promise
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//               if(success){
//                 resolve("Data fetched successfully");
//               }else{
//                 reject("Error fetching data!")
//               }
//         }, 1000);
//     })
    
//     // Simulate a network request with setTimeout
    
//     // Resolve or reject the Promise based on the success flag
// }

// function processData(success) {
//     // Call fetchData
//     fetchData(success)
//     // Handle the success case with .then()
//     .then((message) => {
//         console.log(message);
//     })    
//     // Handle the failure case with .catch()
//     // fetchData(false)
//     .catch((error) => {
//         console.log(error);
//     })
// }
// // Simulate a successful request
// processData(true);
// processData(false);

