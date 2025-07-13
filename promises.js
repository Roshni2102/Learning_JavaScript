/* https://dummy-json.mock.beeceptor.com/todos
   https://dummy-json.mock.beeceptor.com/posts
   https://dummy-json.mock.beeceptor.com/continents
*/

// const firstObj = fetch("https://dummy-json.mock.beeceptor.com/todos")
//                  .then(response => response.json());
                
// const secondObj = fetch("https://dummy-json.mock.beeceptor.com/posts")
//                  .then(response => response.json());

// const thirdObj = fetch("https://dummy-json.mock.beeceptor.com/todos")
//                   .then(response => response.json());

// Promise.all([firstObj, secondObj, thirdObj])
//        .then(responses => {
//         for (const response of responses) {
//             console.log(response);
//         }
//        }).catch(err => console.log(`Failed to fatch ${err}`));

// function fetchData1() {
//     // Return a Promise that resolves after 1 second
//     return new Promise ((resolve, reject)=> {
//         setTimeout(() => {
//             console.log("Data from fetchData1.");
//         }, 1000);
//     })
// }

// function fetchData2() {
//     // Return a Promise that resolves after 2 seconds
//     return new Promise ((resolve, reject)=> {
//         setTimeout(() => {
//             console.log("Data from fetchData2.");
//         }, 2000);
//     })
// }

// function fetchData3() {
//     // Return a Promise that resolves after 3 seconds
//     return new Promise ((resolve, reject)=> {
//         setTimeout(() => {
//             console.log("Data from fetchData3.");
//         }, 3000);
//     })
// }

// function fetchAllData() {
//     // Use Promise.all() to execute all fetchData functions concurrently
// Promise.all([fetchData1(), fetchData2(), fetchData3()])
//     // Handle the resolved results
//     .then((result)=> console.log(result))
//     // Handle any rejected Promise
//     .catch((error)=> console.log("Promises is rejected"))
// }
// fetchAllData();

// const firstObject = fetch("https://dummy-json.mock.beeceptor.com/todos")
//                  .then(response => response.json());

// const secondObject = fetch("https://fake-json-api.mock.beeceptor.com/companies")
//                   .then(response => response.json());

// const thirdObject = fetch("https://fake-json-api.mock.beeceptor.com/users")
//                   .then(response => response.json());
                  

// Promise.any([firstObject, secondObject, thirdObject])
//          .then(response => {
           
//                 console.log(response);
            
//          }).catch(error=> console.log(`Failed to fetch ${error}`));


// function fetchData1() {
//     // Return a Promise that rejects after 1 second
//     return new Promise ((_, reject)=> {
//         setTimeout(()=> {
//             reject("Error from fetchData1")
//         }, 1000);
//     })
// }

// function fetchData2() {
//     // Return a Promise that resolves after 2 seconds
//      return new Promise ((resolve)=> {
//         setTimeout(()=> {
//             resolve("Data from fetchData2")
//         }, 2000);
//     })
// }

// function fetchData3() {
//     // Return a Promise that resolves after 3 seconds
//     return new Promise ((resolve)=>{
//         setTimeout(()=>{
//             resolve("Data from fetchData3")
//         })
//     }, 3000);
// }

// function fetchAnyData() {
//     // Use Promise.any() to execute all fetchData functions concurrently
// Promise.any([fetchData1(), fetchData2(), fetchData3()])

//     // Handle the resolved result
//     .then(result => console.log(result))
//     // Handle any rejected Promise
//     .catch(error => console.log(error))
// }

// fetchAnyData();