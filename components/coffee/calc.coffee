previousDisplay = []
currentDisplay = "0"
currentSum = ""
lastOperator = ""
buttonClicked = ""

$("#calc-display").val(currentDisplay)

# calculator button click function
$("button").click ->
    buttonClicked = $(this).html()

    switch buttonClicked
        when "0" 
            if currentDisplay != "0"   
                generateNumber()
        when "1", "2", "3", "4", "5", "6", "7", "8", "9"
            generateNumber()
        when "=" 
            generateSum(lastOperator)
        when "." 
            generateNumber()
        when "-", "*", "/", "+"
            generateOperator()
        when "Delete", "CE", "C"
            clear()
        else alert("Critical error!! Self destruct sequence initiated!!")


    # using to see what the current values variables hold
    # console.log(previousDisplay + "\n" + currentDisplay + "\n" + currentSum + "\n" + lastOperator)

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
        else alert("You pressed equals without entering any numbers or operators silly!")
    
    previousDisplay.push(currentDisplay)
    $("#previous-display").val(previousDisplay.join(""))
    lastOperator = "="
    currentDisplay = currentSum
    console.log(currentSum)
    if isNaN(currentSum)
        $("#current-total").addClass("nan-error").html("Critical error!!<br>Self destruct sequence initiated!!")        
    else
        $("#current-total").html(currentSum)

generateNumber = () ->
    if currentDisplay == "+" || currentDisplay == "/" || currentDisplay == "*" || currentDisplay == "-"
        previousDisplay.push(currentDisplay)
        $("#calc-display").val(buttonClicked)
        currentDisplay = buttonClicked
    else
        if $("#calc-display").val() == "0"
            $("#calc-display").val(buttonClicked)
            currentDisplay = $("#calc-display").val()
        else
            $("#calc-display").val($("#calc-display").val() + buttonClicked)
            currentDisplay = $("#calc-display").val()

generateOperator = () ->
    if lastOperator != "="
        previousDisplay.push(currentDisplay)
        $("#previous-display").val(previousDisplay.join(""))

    if currentSum is ""
        currentSum = currentDisplay
    else if lastOperator = "="

    else
        generateSum(lastOperator)
    
    lastOperator = buttonClicked
    currentDisplay = buttonClicked
    $("#calc-display").val(buttonClicked)

clear = () ->
    previousDisplay = []
    currentDisplay = "0"
    currentSum = ""
    lastOperator = ""
    buttonClicked = ""
    $("#previous-display").val("")
    $("#calc-display").val(currentDisplay)
    $("#current-total").removeClass("nan-error").html("0")



           