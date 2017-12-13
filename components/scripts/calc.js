var currentDisplay, currentSum, previousDisplay;

previousDisplay = [];

currentDisplay = "";

currentSum = "";

$("button").click(function() {
  var buttonClicked;
  buttonClicked = $(this).html();
  currentDisplay = $("#calc-display").val();
  switch (buttonClicked) {
    case "0":
      return $("#calc-display").val($("#calc-display").val() + buttonClicked);
    case "1":
      if (currentDisplay === "." || currentDisplay === "/" || currentDisplay === "=" || currentDisplay === "*" || currentDisplay === "-" || currentDisplay === "") {
        previousDisplay.push(currentDisplay);
        return $("#calc-display").val(buttonClicked);
      } else {
        return $("#calc-display").val($("#calc-display").val() + buttonClicked);
      }
      break;
    case "2":
      return $("#calc-display").val($("#calc-display").val() + buttonClicked);
    case "3":
      return $("#calc-display").val($("#calc-display").val() + buttonClicked);
    case "4":
      return $("#calc-display").val($("#calc-display").val() + buttonClicked);
    case "5":
      return $("#calc-display").val($("#calc-display").val() + buttonClicked);
    case "6":
      return $("#calc-display").val($("#calc-display").val() + buttonClicked);
    case "7":
      return $("#calc-display").val($("#calc-display").val() + buttonClicked);
    case "8":
      return $("#calc-display").val($("#calc-display").val() + buttonClicked);
    case "9":
      return $("#calc-display").val($("#calc-display").val() + buttonClicked);
    case "=":
      previousDisplay.push($("#calc-display").val());
      $("#previous-display").val(previousDisplay.join(""));
      return $("#calc-display").val(buttonClicked);
    case ".":
      return $("#calc-display").val(buttonClicked);
    case "-":
      return $("#calc-display").val(buttonClicked);
    case "*":
      return $("#calc-display").val(buttonClicked);
    case "/":
      return $("#calc-display").val(buttonClicked);
    case "Delete":
      $("#calc-display").val("");
      return currentDisplay = "";
    case "CE":
      $("#calc-display, #previous-display").val("");
      previousDisplay = [];
      return currentDisplay = "";
    case "C":
      return $("#calc-display").val("");
    default:
      return alert("Something went wrong");
  }
});
