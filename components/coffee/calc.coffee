previousDisplay = []
currentDisplay = ""
currentSum = ""
lastOperator = ""
buttonClicked = ""

# calculator button click function
$("button").click ->
    buttonClicked = $(this).html()

    switch buttonClicked
        when "0" 
            generateNumber()
        when "1", "2", "3", "4", "5", "6", "7", "8", "9"
            generateNumber()
        when "=" 
            generateSum(lastOperator)
        when "." 
            $("#calc-display").val(buttonClicked)
        when "-"
            generateOperator()
        when "*" 
            generateOperator()
        when "/"
            generateOperator()
        when "+"
            generateOperator()
        when "Delete"
            clear()
        when "CE" 
            clear()
        when "C" 
            clear()
        else alert("Something went wrong")

    # using to see what the current values variables hold
    console.log(previousDisplay + "\n" + currentDisplay + "\n" + currentSum + "\n" + lastOperator)

generateSum = (operator) ->
    switch operator
        when "+"    
            currentSum = (parseInt(currentSum) + parseInt(currentDisplay))
            $("#calc-display").val(currentSum)
        when "/"    
            currentSum = (parseInt(currentSum) / parseInt(currentDisplay))
            $("#calc-display").val(currentSum)           
        when "-"
            currentSum = (parseInt(currentSum) - parseInt(currentDisplay))
            $("#calc-display").val(currentSum)              
        when "*"    
            currentSum = (parseInt(currentSum) * parseInt(currentDisplay))
            $("#calc-display").val(currentSum)     
        else alert("Operator unknown")

generateNumber = () ->
    if currentDisplay == "+" || currentDisplay == "/" || currentDisplay == "*" || currentDisplay == "-"
        previousDisplay.push(currentDisplay)
        $("#calc-display").val(buttonClicked)
        currentDisplay = buttonClicked
    else
        $("#calc-display").val($("#calc-display").val() + buttonClicked)
        currentDisplay = $("#calc-display").val()

generateOperator = () ->
    if currentSum is ""
        currentSum = currentDisplay
    lastOperator = buttonClicked
    currentDisplay = buttonClicked
    $("#calc-display").val(buttonClicked)

clear = () ->
    $("#calc-display, #previous-display").val("")
    previousDisplay = []
    currentDisplay = ""
    currentSum = ""
    lastOperator = ""
    buttonClicked = ""



            # previousDisplay.push($("#calc-display").val())
            # $("#previous-display").val(previousDisplay.join(""))