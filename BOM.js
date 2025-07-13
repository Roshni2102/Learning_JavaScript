// Browser Object Model (BOM) - JavaScript
// altert, confirm, prompt, location, history, navigator, screen
alert("Hello, World!!");
alert("Enter Your Name");
// const result = prompt("Enter your Name");
// console.log(result);
//  

const FullName = prompt("Enter your Full Name");
const inConsole = confirm("Do you want to see your Full Name in console?");
if (inConsole){
    console.log(FullName);
}else{
    console.log("permission denied");
}