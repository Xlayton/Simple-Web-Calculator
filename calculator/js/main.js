var btns = document.getElementsByClassName("btn");

var operation = ''
var operands = ['+', '-', '/', '*']

console.log(btns)

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (e) {
        if (this.id == 'clr') {
            operation = ""
            refreshScreen(operation)
        } else if (this.id == 'equals') {
            refreshScreen(calculate(operation))
        } else {
            operation += this.id
            refreshScreen(operation)
        }
    })
}

function calculate(operation) {
    var result = operation
    if (result.includes("/")) {
        var first = result.match("[0-9^.^-]+/[0-9^.^-]+")
        for (var i = 0; i < first.length; i++) {
            var numbers = first[i].split("/")
            var divideResult = Number(numbers[0]) / Number(numbers[1])
            result = result.replace(first[i], String(divideResult))
            console.log(result)
        }
    }
    if (result.includes("*")) {
        first = result.match("[0-9^.^-]+\\*[0-9^.^-]+")
        for (i = 0; i < first.length; i++) {
            numbers = first[i].split("*")
            var multiResult = Number(numbers[0]) * Number(numbers[1])
            result = result.replace(first[i], String(multiResult))
            console.log(result)
        }
    }
    if (result.includes("+")) {
        first = result.match("[0-9^.^-]+\\+[0-9^.^-]+")
        for (i = 0; i < first.length; i++) {
            numbers = first[i].split("+")
            var addResult = Number(numbers[0]) + Number(numbers[1])
            result = result.replace(first[i], String(addResult))
            console.log(result)
        }
    }
    if (result.includes("-") && result.match("[0-9^.^-]+-[0-9^.^-]+") != null) {
        first = result.match("[0-9^.^-]+-[0-9^.^-]+")
        for (i = 0; i < first.length; i++) {
            numbers = first[i].split("-")
            if (numbers[0] == "") {
                numbers.shift()
                numbers[0] = "-".concat(numbers[0])
            }
            var subtractResult = Number(numbers[0]) - Number(numbers[1])
            result = result.replace(first[i], String(subtractResult))
            console.log(result)
        }
    }
    this.operation = result
    return result
}

function refreshScreen(toPutIn) {
    document.getElementById("display").innerHTML = toPutIn
}
