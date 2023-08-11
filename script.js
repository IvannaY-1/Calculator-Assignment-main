const userInput1 = document.getElementById("num1-el");
const userInput2 = document.getElementById("num2-el");

const result = document.getElementById("result");
const error = document.getElementById("error");


const resetButton = document.getElementById("reset");


function add() {
    let updatedUserInput1 = Number(userInput1.value);
    let updatedUserInput2 = Number(userInput2.value);

    let total = updatedUserInput1 + updatedUserInput2;
    result.textContent = `Result is ${total}`;
}
 
function Subtract() {
    let updatedUserInput1 = Number(userInput1.value);
    let updatedUserInput2 = Number(userInput2.value);
    total = updatedUserInput1 - updatedUserInput2;
    result.textContent = `Result is ${total}`;
}

function Divide() {
    let updatedUserInput1 = Number(userInput1.value);
    let updatedUserInput2 = Number(userInput2.value);
    error.textContent = "";
    if (updatedUserInput2 === 0) {
    error.textContent = "You can't divide by 0";
    return;
  }
    
    total = updatedUserInput1 / updatedUserInput2;
    result.textContent = `Result is ${total}`;
}

function Multiply() {
    let updatedUserInput1 = Number(userInput1.value);
    let updatedUserInput2 = Number(userInput2.value);
    total = updatedUserInput1 * updatedUserInput2;
    result.textContent = `Result is ${total}`;
}

function reset() {
  error.textContent = "";
  userInput1.value = "";
userInput2.value = "";
result.textContent = "";
  dogCounter.textContent = `Result is__`;
}