var buttonClicked, clear, currentDisplay, currentSum, generateNumber, generateOperator, generateSum, lastOperator, previousDisplay;

previousDisplay = [];

currentDisplay = "";

currentSum = "";

lastOperator = "";

buttonClicked = "";

$("button").click(function() {
  buttonClicked = $(this).html();
  switch (buttonClicked) {
    case "0":
      generateNumber();
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
      $("#calc-display").val(buttonClicked);
      break;
    case "-":
      generateOperator();
      break;
    case "*":
      generateOperator();
      break;
    case "/":
      generateOperator();
      break;
    case "+":
      generateOperator();
      break;
    case "Delete":
      clear();
      break;
    case "CE":
      clear();
      break;
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
      return $("#calc-display").val(currentSum);
    case "/":
      currentSum = parseInt(currentSum) / parseInt(currentDisplay);
      return $("#calc-display").val(currentSum);
    case "-":
      currentSum = parseInt(currentSum) - parseInt(currentDisplay);
      return $("#calc-display").val(currentSum);
    case "*":
      currentSum = parseInt(currentSum) * parseInt(currentDisplay);
      return $("#calc-display").val(currentSum);
    default:
      return alert("Operator unknown");
  }
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
  if (currentSum === "") {
    currentSum = currentDisplay;
  }
  lastOperator = buttonClicked;
  currentDisplay = buttonClicked;
  return $("#calc-display").val(buttonClicked);
};

clear = function() {
  $("#calc-display, #previous-display").val("");
  previousDisplay = [];
  currentDisplay = "";
  currentSum = "";
  lastOperator = "";
  return buttonClicked = "";
};
