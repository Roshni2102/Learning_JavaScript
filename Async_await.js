
async  function awaitObject(city){
    const apiKey = "98ea14f12b135c2969c8466e6f7d69b3";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=mumbai=${apiKey}&units=metric`
    const response = await fetch(`${apiUrl}`);
    const result = await response.json();
    console.log(result);
}
awaitObject();

// Handling error
// async function awaiterrorHandling() {
//     try{
//        const response = await fetch("https://fake-json-api.mock.beeceptor.coms/companies");
//     const result = await response.json();
//     console.log(result); 
//     }catch(error){
//           console.log(error);
//     }
    
// }
// awaiterrorHandling();

// function fetchUserData(success) {
//     // Return a Promise
//     return new Promise ((resolve, reject)=> {
       
//         setTimeout(()=> {
//           if(success){
//             resolve({id: 1, name: 'John Doe'});
//           }else{
//             reject('Failed to fetch user data');
//           }
//         }, 2000);
//     })

//     // Simulate a network request with setTimeout

//     // Resolve or reject the Promise based on the success flag
// }

// async function getUserData(success) {
//     // Try to call fetchUserData with await
// try{
//     const result = await fetchUserData(success);
//     console.log(result);
// }catch(err){
//     console.log(err);
// }
//     // Log the user data if successful

//     // Catch and log the error if the request fails
// }

// // Demonstrate successful request
// getUserData(true);

// // Demonstrate failed request
// getUserData(false);
