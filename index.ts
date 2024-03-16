import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "Secondnumber" },
  { message: "Enter third number", type: "number", name: "thirdnumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
console.log(answer);

// Conditional statement
if (answer.operators === "Addition") {
  console.log(answer.firstnumber + answer.Secondnumber + answer.thirdnumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstnumber - answer.Secondnumber - answer.thirdnumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstnumber * answer.Secondnumber * answer.thirdnumber);
} else if (answer.operators === "Division") {
  console.log(answer.firstnumber / answer.Secondnumber / answer.thirdnumber);
} else {
  console.log("please select valid operator");
}
