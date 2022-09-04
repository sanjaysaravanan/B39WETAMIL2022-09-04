// function hoisting

DoSomething();

function DoSomething() {
  console.log("Doing Something")
}

// var

console.log(sum);

var sum;

sum = 100;

console.log(sum);


console.log(num); // Throws ReferenceError exception as the variable value is uninitialized

let num = 6;



