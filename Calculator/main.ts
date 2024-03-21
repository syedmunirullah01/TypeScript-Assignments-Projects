#!/usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  {
    message: "Enter Your First Number",
    type: "number",
    name: "firstName",
  },

  {
    message: "Enter Your Second Number",
    type: "number",
    name: "secondNumber",
  },

  {
    message: "Select Your Specific Operator",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operators === "Addition") {
  console.log(answer.firstName + answer.secondNumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstName - answer.secondNumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstName * answer.secondNumber);
} else {
  console.log(answer.firstName / answer.secondNumber);
}
