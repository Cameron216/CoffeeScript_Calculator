$(".clear").click ->
    clear()

$(".delete").click ->
    deleteDisplay()    

clear = ->
    $("#calc-display").val($("#calc-display").val() + "1")

deleteDisplay = ->
    $("#calc-display").val("")