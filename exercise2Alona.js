//Exercise 1
let arrOne = [1, 5, 7, 8];
function filterRange(arr, a, b) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}
console.log(filterRange(arrOne, 1, 5));
console.log(filterRange(arrOne, 7, 10));

// Exercises 2

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((x) => x.name);
console.log(names);

// Exercises 3

let arr = [john, pete, mary];

function getAverageAge(users) {
  let totalAge = 0;
  let age = users.map((x) => x.age);
  for (let i = 0; i < age.length; i++) {
    totalAge += age[i];
  }
  let avrAge = totalAge / age.length;
  return avrAge;
}
console.log(getAverageAge(users));
