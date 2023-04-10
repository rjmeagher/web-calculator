//assign values to firstNumberElement, secondNumberElement, operationElement

function defineValues () {
    let firstNumberElement = Number(document.getElementById("firstNumber").value)
    let secondNumberElement = Number(document.getElementById("secondNumber").value)

    let operationElement = document.getElementById("operation")
    let operationSelected = operationElement.options[operationElement.selectedIndex].value
    
    let answerElement = document.getElementsByID("answer")
        answerElement.innerHTML = calculate(firstNumberValue, secondNumberValue, operationSelected)
}

//calculate the answer
function calculate(firstNumberElement, secondNumberElement, operationSelected) {
    switch(operationSelected) {
        case "+":
            return (firstNumberElement) + (secondNumberElement)
        case "-": 
            return (firstNumberElement) - (secondNumberElement)
        case "*":
            return (firstNumberElement) * (secondNumberElement)
        case "/":
            return (firstNumberElement) / (secondNumberElement)
        default:
            return ""
    }
}
