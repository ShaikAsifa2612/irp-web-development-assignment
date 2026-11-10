"use strict";

// JS National Bank - Bank Account Simulator
// Run with: node bank.js


// PART 1: Types & Coercion

// "5" + 2 gives "52" because + with a string joins (concatenates) the values.
// "5" - 2 gives 3 because - only works on numbers, so "5" is converted to 5.
// typeof null === "object" is an old JavaScript bug that was never fixed,
// so null needs its own check and cannot be found using typeof.
console.log('"5" + 2 =', "5" + 2);
console.log('"5" - 2 =', "5" - 2);
console.log("typeof null =", typeof null);
console.log("");

function parseAmount(input) {
  // Step 1: null and undefined mean the user gave no value at all.
  if (input === null || input === undefined) {
    throw new Error("Amount is required.");
  }

  // Step 2: only strings and numbers are allowed.
  if (typeof input !== "string" && typeof input !== "number") {
    throw new Error("Invalid type: amount must be a string or a number.");
  }

  // Step 3: remove outer spaces if the input is a string.
  let value = input;
  if (typeof value === "string") {
    value = value.trim();

    // Step 4: Number("") gives 0, so an empty string must be rejected here.
    if (value === "") {
      throw new Error("Amount cannot be empty.");
    }
  }

  // Step 5: Number() converts text to a number. Bad text gives NaN.
  const amount = Number(value);
  if (Number.isNaN(amount)) {
    throw new Error("Amount must be a valid number.");
  }

  // Step 6: an amount must be greater than zero.
  if (amount <= 0) {
    throw new Error("Amount must be greater than zero.");
  }

  // Step 7: the value is safe to use.
  return amount;
}

// Testing parseAmount. Each input is tried inside its own try/catch block.
const testInputs = ["500", " 250 ", "", "abc", null, undefined, "12.5.3"];

testInputs.forEach(function (testInput) {
  try {
    const result = parseAmount(testInput);
    console.log("Input:", JSON.stringify(testInput), "-> Returns:", result);
  } catch (error) {
    console.log("Input:", JSON.stringify(testInput), "-> Error:", error.message);
  }
});

console.log("");


// PART 2: Scoping & Hoisting

// Step 1: Main Declarations

// const is used for the bank name because it never changes.
const BANK_NAME = "JS National Bank";

// let is used for the counter because its value goes up with every transaction.
let transactionCounter = 0;

console.log("Bank name:", BANK_NAME);
transactionCounter++;
console.log("Transactions so far:", transactionCounter);
console.log("");


// HOISTING DEMO

// 1. var: the declaration is hoisted, so the name exists but its value is undefined.
console.log("var before declaration:", hoistedVar);
var hoistedVar = "I am var";

// 2. let: it is hoisted but stays in the Temporal Dead Zone until its line runs,
// so reading it early throws a ReferenceError.
try {
  console.log(hoistedLet);
  let hoistedLet = "I am let";
} catch (error) {
  console.log("let before declaration:", error.name + " - " + error.message);
}

// 3. Function declaration: the whole function is hoisted, so calling it early works.
announce();

function announce() {
  console.log("Function declaration: announce() worked before its definition.");
}

// 4. Function expression: only the var name is hoisted (as undefined),
// so calling notify() early is like calling undefined and gives a TypeError.
try {
  notify();
  var notify = function () {
    console.log("This line will never run.");
  };
} catch (error) {
  console.log("Function expression:", error.name + " - " + error.message);
}

// 5. Why this happens: JavaScript works in two phases. First the creation phase
// sets up memory (var = undefined, functions stored fully, let/const not usable yet).
// Then the execution phase runs the code line by line.

console.log("");


// Step 3: The Asynchronous Loop Bug

// var is scoped to the function/global, so all 3 callbacks share ONE variable i.
// By the time setTimeout runs, the loop has finished and i is 3, so it prints 3, 3, 3.
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var loop:", i);
  }, 0);
}

// let creates a fresh i for every loop turn (a new lexical binding),
// so each callback remembers its own value and prints 0, 1, 2.
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("let loop:", i);
  }, 0);
}
