// // Local Storage
// localStorage.setItem("name", "Roshni");
// const value = localStorage.getItem("name");
// console.log(name); // Roshni
// const value1 = localStorage.getItem("age1");
// console.log(value1);
// localStorage.setItem("age", "24");
// // localStorage.removeItem("age");
// // localStorage.clear(); // Clears all items in localStorage

// console.log(localStorage.length);
// console.log(localStorage.key(0));
// localStorage.hobby = "Reading";
// delete localStorage.hobby; // Deletes the hobby item

// Session Storage

// sessionStorage.setItem("name", "Roshni");
// sessionStorage.getItem("name");

const field = document.getElementById("textField");
console.log(field.value); // Gets the value of the input field

field.addEventListener("change", function() {
    sessionStorage.setItem("textField", field.value);

})