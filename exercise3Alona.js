// / Exercise 1

const checkAge = (age) =>
  age > 18
    ? true
    : confirm("Do you have your parents permission to access this page?");

// Exercise 2

function pow(x, n) {
  if (n < 1) {
    return "The number should be natural";
  }
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= x;
  }
  return res;
}
console.log(pow(3, 3));

// Exercise 3

const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

// Exercise 4

let calculator = {
  read() {
    this.a = Number(prompt("Enter the first value"));
    this.b = Number(prompt("Enter the second value"));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Exercise 5

const min = (a, b) => (a < b ? a : b);
console.log(min(2, 5));
