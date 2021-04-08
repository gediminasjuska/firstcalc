alert("Note: double-click on screen to clear");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");

const sum = document.getElementById("sum");
const sub = document.getElementById("sub");
const div = document.getElementById("div");
const mul = document.getElementById("mul");
const mod = document.getElementById("mod");
const result = document.getElementById("result");

let screen = document.getElementById("screen");
let userInput = document.getElementById("user-inputs");
let output = document.getElementById("output");
let x = 0;
let y = 0;
let numbers = [];
let n = 0;
let needsReset = 0;

num1.addEventListener("click", function () {
  if (needsReset === 0) {
    userInput.innerHTML += 1;
    numbers.push(1);
  }
});

num2.addEventListener("click", function () {
  if (needsReset === 0) {
    userInput.innerHTML += 2;
    numbers.push(2);
  }
});

num3.addEventListener("click", function () {
  if (needsReset === 0) {
    userInput.innerHTML += 3;
    numbers.push(3);
  }
});

num4.addEventListener("click", function () {
  if (needsReset === 0) {
    userInput.innerHTML += 4;
    numbers.push(4);
  }
});

num5.addEventListener("click", function () {
  if (needsReset === 0) {
    userInput.innerHTML += 5;
    numbers.push(5);
  }
});
num6.addEventListener("click", function () {
  if (needsReset === 0) {
    userInput.innerHTML += 6;
    numbers.push(6);
  }
});
num7.addEventListener("click", function () {
  if (needsReset === 0) {
    userInput.innerHTML += 7;
    numbers.push(7);
  }
});
num8.addEventListener("click", function () {
  if (needsReset === 0) {
    userInput.innerHTML += 8;
    numbers.push(8);
  }
});
num9.addEventListener("click", function () {
  if (needsReset === 0) {
    userInput.innerHTML += 9;
    numbers.push(9);
  }
});
num0.addEventListener("click", function () {
  if (needsReset === 0) {
    userInput.innerHTML += 0;
    numbers.push(0);
  }
});

sum.addEventListener("click", function () {
  if (n === 0) {
    userInput.innerHTML += "+";
    x = numbers.reduce((total, num) => total + "" + num);
    numbers = [];
    numbers.push("+");
    n = 1;
  }
  return x;
});

sub.addEventListener("click", function () {
  if (n === 0) {
    userInput.innerHTML += "-";
    x = numbers.reduce((total, num) => total + "" + num);
    numbers = [];
    numbers.push("-");
    n = 1;
  }
  return x;
});

div.addEventListener("click", function () {
  if (n === 0) {
    userInput.innerHTML += "/";
    x = numbers.reduce((total, num) => total + "" + num);
    numbers = [];
    numbers.push("/");
    n = 1;
  }
  return x;
});

mul.addEventListener("click", function () {
  if (n === 0) {
    userInput.innerHTML += "*";
    x = numbers.reduce((total, num) => total + "" + num);
    numbers = [];
    numbers.push("*");
    n = 1;
  }
  return x;
});

mod.addEventListener("click", function () {
  if (n === 0) {
    userInput.innerHTML += "%";
    x = numbers.reduce((total, num) => total + "" + num);
    numbers = [];
    numbers.push("%");
    n = 1;
  }
  return x;
});

result.addEventListener("click", function () {
  if ((n === 1) & (needsReset === 0)) {
    let op = numbers[0];
    numbers.splice(0, 1);
    y = numbers.reduce((total, num) => total + "" + num);

    if (op === "+") {
      output.innerHTML = Number(x) + Number(y);
    } else if (op === "-") {
      output.innerHTML = Number(x) - Number(y);
    } else if (op === "/") {
      output.innerHTML = Number(x) / Number(y);
    } else if (op === "*") {
      output.innerHTML = Number(x) * Number(y);
    } else if (op === "%") {
      output.innerHTML = Number(x) % Number(y);
    }
  }
  needsReset = 1;
});

//clear screen and array
screen.addEventListener("dblclick", function () {
  userInput.innerHTML = "";
  output.innerHTML = "";
  numbers = [];
  n = 0;
  needsReset = 0;
});
