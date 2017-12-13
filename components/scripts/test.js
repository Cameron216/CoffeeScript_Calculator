var clear, deleteDisplay;

$(".clear").click(function() {
  return clear();
});

$(".delete").click(function() {
  return deleteDisplay();
});

clear = function() {
  return $("#calc-display").val($("#calc-display").val() + "1");
};

deleteDisplay = function() {
  return $("#calc-display").val("");
};
