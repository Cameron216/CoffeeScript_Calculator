# $(".clear").click ->
#     clear()

# $(".delete").click ->
#     deleteDisplay()    

# clear = ->
#     $("#calc-display").val($("#calc-display").val() + "1")

# deleteDisplay = ->
#     $("#calc-display").val("")

previousDisplay = []
currentDisplay = ""
currentSum = ""


# calculator button click function
$("button").click ->
    buttonClicked = $(this).html()
    currentDisplay = $("#calc-display").val()

    switch buttonClicked
        when "0" then $("#calc-display").val($("#calc-display").val() + buttonClicked)
        when "1"
            if currentDisplay == "." || currentDisplay == "/" || currentDisplay == "=" || currentDisplay == "*" || currentDisplay == "-" || currentDisplay == ""
                previousDisplay.push(currentDisplay)
                $("#calc-display").val(buttonClicked)
            else
                $("#calc-display").val($("#calc-display").val() + buttonClicked)
        when "2" then $("#calc-display").val($("#calc-display").val() + buttonClicked)
        when "3" then $("#calc-display").val($("#calc-display").val() + buttonClicked)
        when "4" then $("#calc-display").val($("#calc-display").val() + buttonClicked)
        when "5" then $("#calc-display").val($("#calc-display").val() + buttonClicked)
        when "6" then $("#calc-display").val($("#calc-display").val() + buttonClicked)
        when "7" then $("#calc-display").val($("#calc-display").val() + buttonClicked)
        when "8" then $("#calc-display").val($("#calc-display").val() + buttonClicked)
        when "9" then $("#calc-display").val($("#calc-display").val() + buttonClicked)
        when "=" 
            previousDisplay.push($("#calc-display").val())
            $("#previous-display").val(previousDisplay.join(""))
            $("#calc-display").val(buttonClicked)

        when "." then $("#calc-display").val(buttonClicked)
        when "-" then $("#calc-display").val(buttonClicked)
        when "*" then $("#calc-display").val(buttonClicked)
        when "/" then $("#calc-display").val(buttonClicked)
        when "Delete"
            $("#calc-display").val("")
            currentDisplay = ""
        when "CE" 
            $("#calc-display, #previous-display").val("")
            previousDisplay = []
            currentDisplay = ""
        when "C" then $("#calc-display").val("")
        else alert("Something went wrong")
