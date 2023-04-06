const buttons = document.querySelectorAll(".number, .operator");
const display = document.getElementById("result");
const clear = document.getElementById("clear");
const calculate = document.getElementById("calculate");

let currentVal = "";
let resultVal = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.getAttribute("value");
    currentVal += buttonValue;
    display.value = currentVal;
  });
});

calculate.addEventListener("click", () => {
  if (operator === "+") {
    resultVal = parseFloat(resultVal) + parseFloat(currentVal);
  } else if (operator === "-") {
    resultVal = parseFloat(resultVal) - parseFloat(currentVal);
  } else if (operator === "*") {
    resultVal = parseFloat(resultVal) * parseFloat(currentVal);
  } else if (operator === "/") {
    resultVal = parseFloat(resultVal) / parseFloat(currentVal);
  } else {
    resultVal = currentVal;
  }
  display.value = resultVal;
  currentVal = "";
  operator = "";
});

clear.addEventListener("click", () => {
  currentVal = "";
  resultVal = "";
  operator = "";
  display.value = "";
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.getAttribute("value");
    if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "*" ||
      buttonValue === "/"
    ) {
      operator = buttonValue;
      resultVal = currentVal;
      currentVal = "";
    }
  });
});
