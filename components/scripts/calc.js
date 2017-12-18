var buttonClicked, clear, currentDisplay, currentSum, generateNumber, generateOperator, generateSum, lastOperator, previousDisplay;

previousDisplay = [];

currentDisplay = "0";

currentSum = "";

lastOperator = "";

buttonClicked = "";

$("#calc-display").val(currentDisplay);

$("button").click(function() {
  buttonClicked = $(this).html();
  switch (buttonClicked) {
    case "0":
      if (currentDisplay !== "0") {
        generateNumber();
      }
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      generateNumber();
      break;
    case "=":
      generateSum(lastOperator);
      break;
    case ".":
      generateNumber();
      break;
    case "-":
    case "*":
    case "/":
    case "+":
      generateOperator();
      break;
    case "Delete":
    case "CE":
    case "C":
      clear();
      break;
    default:
      alert("Something went wrong");
  }
  return console.log(previousDisplay + "\n" + currentDisplay + "\n" + currentSum + "\n" + lastOperator);
});

generateSum = function(operator) {
  switch (operator) {
    case "+":
      currentSum = parseInt(currentSum) + parseInt(currentDisplay);
      $("#calc-display").val(currentSum);
      break;
    case "/":
      currentSum = parseInt(currentSum) / parseInt(currentDisplay);
      $("#calc-display").val(currentSum);
      break;
    case "-":
      currentSum = parseInt(currentSum) - parseInt(currentDisplay);
      $("#calc-display").val(currentSum);
      break;
    case "*":
      currentSum = parseInt(currentSum) * parseInt(currentDisplay);
      $("#calc-display").val(currentSum);
      break;
    default:
      alert("You pressed equals without entering any numbers or operators silly!");
  }
  previousDisplay.push(currentDisplay);
  $("#previous-display").val(previousDisplay.join(""));
  lastOperator = "=";
  return currentDisplay = currentSum;
};

generateNumber = function() {
  if (currentDisplay === "+" || currentDisplay === "/" || currentDisplay === "*" || currentDisplay === "-") {
    previousDisplay.push(currentDisplay);
    $("#calc-display").val(buttonClicked);
    return currentDisplay = buttonClicked;
  } else {
    $("#calc-display").val($("#calc-display").val() + buttonClicked);
    return currentDisplay = $("#calc-display").val();
  }
};

generateOperator = function() {
  if (lastOperator !== "=") {
    previousDisplay.push(currentDisplay);
    $("#previous-display").val(previousDisplay.join(""));
  }
  if (currentSum === "") {
    currentSum = currentDisplay;
  } else if (lastOperator = "=") {

  } else {
    generateSum(lastOperator);
  }
  lastOperator = buttonClicked;
  currentDisplay = buttonClicked;
  return $("#calc-display").val(buttonClicked);
};

clear = function() {
  previousDisplay = [];
  currentDisplay = "0";
  currentSum = "";
  lastOperator = "";
  buttonClicked = "";
  $("#previous-display").val("");
  return $("#calc-display").val(currentDisplay);
};
