"use strict";

/* named function with one parameter that logs to the console. */
function sayHello1(name) {
console.log("Hello " + name);
}
let sayHello2 = function(name) {
console.log("Hello " + name);
}
let sayHello3 = (name) => {
console.log("Hello " + name);
}
/* Equivalent function with no parens because there is only 1 parameter */
let sayHello4 = name => { console.log("Hello " + name); }
let sayHello5 = () => { console.log("Hello!"); };

//Parameter passing to Event Handlers
let button1 = document.getElementById("button1");
button1.addEventListener('click', function() {
  console.log("Button1");
});

let button2 = document.getElementById("button2");
button2.addEventListener("click", () => {
  console.log("Button2");
});

