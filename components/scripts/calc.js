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
        return generateNumber();
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
      return generateNumber();
    case "=":
      return generateSum(lastOperator);
    case ".":
      return generateNumber();
    case "-":
    case "*":
    case "/":
    case "+":
      return generateOperator();
    case "Delete":
    case "CE":
    case "C":
      return clear();
    default:
      return alert("Critical error!! Self destruct sequence initiated!!");
  }
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
  currentDisplay = currentSum;
  console.log(currentSum);
  if (isNaN(currentSum)) {
    return $("#current-total").addClass("nan-error").html("Critical error!!<br>Self destruct sequence initiated!!");
  } else {
    return $("#current-total").html(currentSum);
  }
};

generateNumber = function() {
  if (currentDisplay === "+" || currentDisplay === "/" || currentDisplay === "*" || currentDisplay === "-") {
    previousDisplay.push(currentDisplay);
    $("#calc-display").val(buttonClicked);
    return currentDisplay = buttonClicked;
  } else {
    if ($("#calc-display").val() === "0") {
      $("#calc-display").val(buttonClicked);
      return currentDisplay = $("#calc-display").val();
    } else {
      $("#calc-display").val($("#calc-display").val() + buttonClicked);
      return currentDisplay = $("#calc-display").val();
    }
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
  $("#calc-display").val(currentDisplay);
  return $("#current-total").removeClass("nan-error").html("0");
};
