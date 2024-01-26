// Traditional function expression
function add(x, y) {
  return x + y;
}

// Arrow function
const addArrow = (x, y) => x + y;

// Usage
console.log(add(5, 3)); // Outputs: 8
console.log(addArrow(5, 7)); // Outputs: 8

//Before arrow function
helloWithoutArrow = function () {
  return "Hello World!";
};

//With Arrow Function
hello = () => {
  return "Hello World!";
};

//It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
hello = () => "Hello World ! ";

console.log(helloWithoutArrow());
console.log(hello());

//Arrow Function With Parameters
hello = (val) => "Hello " + val;

console.log(hello("Universe!"));
