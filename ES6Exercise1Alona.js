// //Exercise 1
// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, years: age, isAdmin = false } = user;
// console.log(name, age, isAdmin);

///////////////////////////////////////////////////////

//Exercise 2
// const planet = "Earth";
// let currentVisitorName = "John";

////////////////////////////////////////

// Exercise 3
// let phrase = "Hello";

// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi(); // Hello, John

/////////////////////////////////

// // Exercise 4
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// console.log(user);
// user.name = "Pete";
// console.log(user);
// delete user.name;
// console.log(user);

/////////////////////////////////////

//Exercise 5

// const user = {
//   name: "John",
// };

// // does it work? - IT WILL WORK AS WE ARE CAHNGING THE VALUES OF THE KEYS NOT THE OBJECT DIRECTLY
// user.name = "Pete";

/////////////////////////////////////////

//Exercise 6
// let salaries = {
//   Fred: 100,
//   Ted: 160,
//   Ghaith: 130,
// };
// let sum = 0;
// for (let keys in salaries) {
//   sum += salaries[keys];
// }
// console.log(sum);

///////////////////////////////////////////////

//Exercise 7

// let result = a + b < 4 ? "Below" : "Over";

//////////////////////////////////////////////////

// Exercise 8
// let message;

// let message =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//     ? "Greetings"
//     : login == ""
//     ? "No login"
//     : "";
